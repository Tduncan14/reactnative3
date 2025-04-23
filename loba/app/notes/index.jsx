import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, Modal, TextInput } from 'react-native';
import NoteList from '../../components/NoteList';
import addNoteModal from '../../components/AddNoteModal';


const NoteScreen = () => {

    const [notes, setNotes] = useState([
        { id: '1', text: 'Note One' },
        { id: '2', text: 'Note Two' },
        { id: '3', text: 'Note Three' },

    ])


    const [ModalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');



    // add newNote

    const addNote = () => {

        if (newNote.trim() === '') return;



        setNotes((prevNotes) => [
            ...prevNotes,
            { id: Date.now.toString(), text: newNote }
        ])


        setNewNote('');

        setModalVisible(false);

    }


    return (
        <View style={styles.container}>
            {/* Note List */}
            <NoteList notes={notes} />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}> + Add Note</Text>
            </TouchableOpacity>


            {/* modal */}

            <addNoteModal
                ModalVisible={ModalVisible}
                setModalVisible={setModalVisible}
                newNote={newNote}
                setNewNote={setNewNote}
                addNote={addNote}
            />


        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',

    },



    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },

    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'

    },


    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%'
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 15
    },

    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    cancelButton: {
        backgroundColor: '#ccc',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },

    cancelButtonText: {
        fontSize: 16,
        color: '#333'
    },



    saveButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },

    saveButtonText: {
        fontSize: 16,
        color: '#fff'
    }


})


export default NoteScreen