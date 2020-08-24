import { useState, useEffect } from "react";
import { projectStorge, projectFireStore, timestamp } from "../firebase/config";

const useStorge = (file) => {
  const [prorgess, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const storgeRef = projectStorge.ref(file.name);
    const collectionRef = projectFireStore.collection("images");

    storgeRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storgeRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { prorgess, url, error };
};

export default useStorge;
