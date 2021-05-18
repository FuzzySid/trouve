import { db } from "../firebase.config"
import firebase from 'firebase'
import constants from "../constants/constants";

export const addItem=async(userid,item)=>{
    const collectionRef=await db.collection('items');
    const response=await collectionRef.add({...item,
        userid,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
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



export const getAllItems=async(userid,orderBy=['timestamp','desc'],filterBy=[])=>{
    const collectionRef=await db.collection('items');
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



export const deleteItem=async(userid,itemId,itemCategory)=>{
    const collectionRef=await db.collection('items');
    const response=await collectionRef.doc(itemId).delete()
    return response;
}