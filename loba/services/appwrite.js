import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
    async getNotes() {
        const response = await databaseService.ListDocuments(dbId, colId);

        if (response.error) {
            return { error: response.error };
        }

        return { data: response.data }; // Return the actual documents
    },
};

export default noteService;
