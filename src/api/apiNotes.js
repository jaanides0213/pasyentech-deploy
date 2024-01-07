import { collection, getDocs, doc, deleteDoc, serverTimestamp, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const createNotes = async (content) => {
    const notesCollection = collection(db, "notes");
    const newNote = {
      content,
      timestamp: serverTimestamp(),
    };
    const docRef = await addDoc(notesCollection, newNote);
    return docRef.id;
  };
  
export const updateNotes = async (noteId, updatedContent) => {
  const noteRef = doc(db, "notes", noteId);
  await updateDoc(noteRef, { content: updatedContent });
};

export const getNotesData = async () => {
    const notesCollection = collection(db, "notes");
    const notesSnapshot = await getDocs(notesCollection);
    const notesData = notesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return notesData;
};