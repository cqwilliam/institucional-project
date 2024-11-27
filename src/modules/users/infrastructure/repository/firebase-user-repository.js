import { getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { UserRepository } from "../../domain/repository";
import { USERS_COLLECTION_REF } from "./firebase-user-repository.constants";

export class FirebaseUserRepository extends UserRepository {
  async getUsers() {
    try {
      const data = await getDocs(USERS_COLLECTION_REF);
      return data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    } catch (error) {
      console.error("Error fetching users:", error);
      return []; // Devuelve un array vacío en caso de error
    }
  }

  async addUser(user) {
    try {
      const docRef = await addDoc(USERS_COLLECTION_REF, newUser);
      return { ...newUser, id: docRef.id };
    } catch (error) {
      console.error("Error adding user:", error);
      throw error; // Lanza el error para que pueda ser manejado por el frontend
    }
  }

  async updateUser(id, updatedUser) {
    try {
      const userDoc = doc(db, "users", id);
      await updateDoc(userDoc, updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  async deleteUser(id) {
    try {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}
