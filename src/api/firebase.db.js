import { db } from "../firebase.config"
import firebase from 'firebase'

export const addItem=async(userid,item)=>{
    const dbRef=await db.collection(userid);
    const docRef=await dbRef.doc(item.category)
    const collectionRef=await docRef.collection(item.category)
    const response=await collectionRef.add({...item,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log(response)
}

const getSingleFCategoryItems=async(dbRef,category)=>{
    const docRef=await dbRef.doc(category);
    const collectionRef=await docRef.collection(category);
    const data=[];
    await collectionRef.get().then((querySnapshot) => {
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

export const getItemsByCategory=async(userid,category)=>{
    
}

export const getAllItems=async(userid)=>{
    const dbRef=await db.collection(userid);
    const allItems=[];
    const categories=['Wanderlist','Watchlist','Todos'];
    for(let i=0; i<categories.length; i++){
        let category=categories[i];
        const categoryData=await getSingleFCategoryItems(dbRef,category);
        allItems.push(...categoryData)
    }
    return await allItems
}