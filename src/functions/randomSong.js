import { getFirestore, collection, where, query, getDocs } from "firebase/firestore";

export default async function randomSong(certainSong) {
  // Initialize the Firestore client
  let dataArray = [];
  let randomInt = Math.floor(Math.random() * 7);
  let data;

  const db = getFirestore();

  
  // Get a reference to the collection
  const collectionRef = collection(db, "songs");

  if(certainSong) {
    const q = await query(collectionRef, where("key", "==", certainSong));
    const querySnapshot = await getDocs(q);
    let song;

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      song = doc.data();
    });

    return song;
  }


    const q = await query(collectionRef, where("key", "==", randomInt));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data = [doc.id, doc.data()];
    
    });

    return data;
}