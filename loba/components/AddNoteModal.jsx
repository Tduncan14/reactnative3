import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, Modal, TextInput } from 'react-native';


const addNoteModal = ({
    modalVisible,
    setModalVisible,
    newNote,
    setNewNote,
    addNote
}) => {


    return (
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



                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalVisible(false)}>

                            <Text style={styles.cancelButtonText}> Cancel</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

        </Modal>
    )


}



const styles = StyleSheet.create({

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


export default addNoteModal