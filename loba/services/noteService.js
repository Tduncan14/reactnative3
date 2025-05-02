import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";


//Appwrite database and collection id 


const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
    // get Notes

    async getNotes() {
        const response = await databaseService.ListDocuments(dbId, colID);

        if (response.error) {
            return { error: response.error };
        }

        return { data: response };

    }
}


export default noteService