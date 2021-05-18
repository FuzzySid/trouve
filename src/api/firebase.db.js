import { db } from "../firebase.config"
import firebase from 'firebase'
import constants from "../constants/constants";

export const addItem=async(userid,item)=>{
    const collectionRef=await db.collection(userid);
    const response=await collectionRef.add({...item,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    return response;
}

// const getSingleFCategoryItems=async(dbRef,category)=>{
//     const docRef=await dbRef.doc(category);
//     const collectionRef=await docRef.collection(category);
//     const data=[];
//     await collectionRef.get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             //console.log(doc.id, " => ", doc.data());
//             data.push({
//                 id:doc.id,
//                 ...doc.data()
//             })
//         });

//     });
//     return await data;
// }

// export const getItemsByCategory=async(userid,category)=>{
    
// }

export const getAllItems=async(userid,orderBy=['timestamp','desc'],filterBy=[])=>{
    const collectionRef=await db.collection(userid);
    const isFilterSet=filterBy.length>0 ? true : false;
    const allCategories=Object.keys(constants.categories)
    console.log({isFilterSet},{allCategories})
    const data=[];
    await collectionRef
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
    console.log(queryRef)
}



export const deleteItem=async(userid,itemId,itemCategory)=>{
    const collectionRef=await db.collection(userid);
    const response=await collectionRef.doc(itemId).delete()
    return response;
}