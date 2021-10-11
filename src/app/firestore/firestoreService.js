import firebase from "../config/firebase";

const db = firebase.firestore()

export function dataFromSnapshot(snapshot){
    if (!snapshot.exists) return undefined;
    const data = snapshot.data()

    for (const prop in data){
        if (data.hasOwnProperty(prop)){
            if (data[prop] instanceof firebase.firestore.Timestamp){
                data[prop] = data[prop].toDate()
            }
        }
    }

    return {
        ...data,
        id: snapshot.id
    }
}

export function listenToEventsFromFirestore(){
    return db.collection('events')
}
export function listenToEventFromFirestore(eventId) {
     return db.collection('events').doc(eventId);
}
export function addEventToFireStore(event){
    return db.collection('events').add({
        ...event,
        hostedBy: 'Diana',
        hostPhotoUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
        attendees: []
    })
}