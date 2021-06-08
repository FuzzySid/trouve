
import { v4 as uuidv4 } from 'uuid';

export const createNotification=async(clientToken, notificationDetails)=>{
    console.log({clientToken})
    const response=await fetch('http://localhost:5000/notificationAccessToken');
    const accessToken=await response.json();
    // console.log('access token->',JSON.stringify(accessToken));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const notificationObject={
        id:uuidv4(),
        clientToken,
        title:notificationDetails.title,
        description:notificationDetails.description
    }
    console.log({notificationObject})
    const FCMNotification={
            "message":{
          "token":clientToken,
          "notification":{
            "title":notificationDetails.title,
            "body":notificationDetails.description,
          
          }
        }
      
    }
    console.log({FCMNotification})

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: FCMNotification,
    redirect: 'follow'
    };

    fetch("https://fcm.googleapis.com/v1/projects/trouve-e9737/messages:send", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}