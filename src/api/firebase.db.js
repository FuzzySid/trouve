import { db } from "../firebase.config"
import firebase from 'firebase'
import constants from "../constants/constants";

export const addItem=async(userid,item,collecName='items')=>{
    const collectionRef=await db.collection(collecName);
    const response=await collectionRef.add({...item,
        userid,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    return response;
}

export const editItem=async(userid,item)=>{
    const collectionRef=await db.collection('items');
    collectionRef.doc(item.id).set({...item,
            edittedontimestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    return;
}

export const saveItem=async(userid,item)=>{
    const collectionRef=await db.collection('items').doc(item.id)
    const response=await collectionRef.update({
        isSaved: true
    })
    .then(() => {
        console.log("Document successfully updated!");
        db.collection('saved').doc(item.id).set({...item,isSaved:true})
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    return response;
    
}

export const unsaveItem=async(userid,item)=>{
    const collectionRef=await db.collection('items').doc(item.id)
    const response=await collectionRef.update({
        isSaved: false
    })
    .then(() => {
        console.log("Document successfully updated!");
        deleteItem(userid,item.id,'saved')
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    return response;
    
}


export const getAllItems=async(
    userid,
    orderBy=['timestamp','desc'],
    filterBy=[],
    collecName="items"
    )=>
    {
    const collectionRef=await db.collection(collecName);
    const isFilterSet=filterBy.length>0 ? true : false;
    const allCategories=Object.keys(constants.categories)
    const data=[];
    await collectionRef
        .where('userid','==',userid)
        .where(`category`,`in`,isFilterSet ? [...filterBy] : allCategories)
        .orderBy(...orderBy)
        .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            data.push({
                id:doc.id,
                ...doc.data()
            })
        });

    });
    return await data;
}

export const getItemByQuery=async(userid,queryType,query)=>{
    if(queryType!=='filter') return;
    const collectionRef=await db.collection(userid);
    const queryRef=await collectionRef.where('Category'===query);
}

export const addToTrash=async(userid,item)=>{
    const collectionRef=await db.collection('trash');
    const response=await collectionRef.doc(item.id).set({...item,
        userid,
        deletedontimestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    if(item.isSaved) await deleteItem(userid,item.id,'saved');
    return await deleteItem(userid,item.id);
    
}

export const deleteItem=async(userid,itemId,collecName='items')=>{
    const collectionRef=await db.collection(collecName);
    const response=await collectionRef.doc(itemId).delete()
    return response;
}