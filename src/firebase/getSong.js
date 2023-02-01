import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "./firebase";

export default function getSong() {
    const storage = getStorage(app);
    return new Promise(
      (resolve, reject) => {
        getDownloadURL(ref(storage, 'gs://faketify-8d4b2.appspot.com/ballroom-extravaganza.mp3'))
        .then((url) => {
          resolve(new Audio(url));
        })
        .catch((error) => {
          reject(error);
        });}
    )
  }
    

    

