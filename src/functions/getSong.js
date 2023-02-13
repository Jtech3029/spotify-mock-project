import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "../firebase/firebase";

export default function getSong(song) {
    const storage = getStorage(app);
    return new Promise(
      (resolve, reject) => {
        getDownloadURL(ref(storage, song))
        .then((url) => {
          resolve(new Audio(url));
        })
        .catch((error) => {
          reject(error);
        });}
    )
  }
    

    

