import { collection} from "firebase/firestore";
import { db } from "../../../shared/infrastucture/configs/firebase-credentials";

export const USERS_COLLECTION_REF = collection(db,"users")
