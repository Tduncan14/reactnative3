import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, Modal, TextInput } from 'react-native';



const NoteScreen = () => {

    const [notes, setNotes] = useState([
        { id: '1', text: 'Note One' },
        { id: '2', text: 'Note Two' },
        { id: '3', text: 'Note Three' },

    ])


    const [ModalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');


    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <Text style={styles.noteText}>
                            {item.text}
                        </Text>

                    </View>
                )} />


            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}> + Add Note</Text>
            </TouchableOpacity>


            {/* modal */}

            <Modal
                visible={ModalVisible}
                animationType='slide'
                transparent
                onRequestClose={() => setModalVisible(false)}>

                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}> Add a new Note</Text>
                        <TextInput style={styles.input}
                            placeholder='Enter note...'
                            placeholderTextColor='#aaa'
                            value={newNote}
                            onChangeText={setNewNote} />
                    </View>

                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalVisible(false)}>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',

    },

    noteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5
    },



    noteText: {
        fontSize: 19
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

    }


})


export default NoteScreen