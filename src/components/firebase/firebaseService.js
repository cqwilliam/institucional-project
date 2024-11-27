// import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
// import { db } from "../credentials";

// const usersCollectionRef = collection(db, "users");

// export const getUsersLists = async () => {
//   try {
//     const data = await getDocs(usersCollectionRef);
//     return data.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];  // Devuelve un array vacío en caso de error
//   }
// };

// export const addUser = async (newUser) => {
//   try {
//     const docRef = await addDoc(usersCollectionRef, newUser);
//     return { ...newUser, id: docRef.id };
//   } catch (error) {
//     console.error("Error adding user:", error);
//     throw error; // Lanza el error para que pueda ser manejado por el frontend
//   }
// };

// export const updateUser = async (id, updatedUser) => {
//   try {
//     const userDoc = doc(db, "users", id);
//     await updateDoc(userDoc, updatedUser);
//   } catch (error) {
//     console.error("Error updating user:", error);
//     throw error;
//   }
// };

// export const deleteUser = async (id) => {
//   try {
//     const userDoc = doc(db, "users", id);
//     await deleteDoc(userDoc);
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     throw error;
//   }
// };
