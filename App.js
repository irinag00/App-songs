import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  Modal,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeTextHandler = (text) => {
    setTextInput(text);
  };
  const addItemToList = () => {
    setItemList((prevStateList) => [
      ...prevStateList,
      { id: Math.random().toString(), value: textInput },
    ]);
    setTextInput("");
  };
  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible);
    setItemSelectedToDelete(itemList.find((item) => item.id === id));
  };
  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id));
    // setItemSelectedToDelete({});
    setModalVisible(!modalVisible);
  };
  const renderListItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button
        color="#463F3A"
        title="X"
        onPress={() => onSelectItemHandler(item.id)}
      ></Button>
    </View>
  );
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text>¡Tu app de tareas!</Text>
        </View>
        <View style={styles.inputCointainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ingresar tarea"
            onChangeText={onChangeTextHandler}
            value={textInput}
          />
          <Button title="Añadir" color="#E0AFA0" onPress={addItemToList} />
        </View>
        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalMessageContainer}>
          <Text>Se eliminará: </Text>
          <Text>{itemSelectedToDelete.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button
            color={"#BCB8B1"}
            title="Cancelar"
            onPress={() => setModalVisible(!modalVisible)}
          ></Button>
          <Button
            color="#E0AFA0"
            title="Eliminar"
            onPress={() => onDeleteItemHandler()}
          ></Button>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F3EE",
    alignItems: "start",
    padding: 50,
  },
  containerText: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 8,
  },
  inputCointainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInput: {
    width: 200,
    borderBottomColor: "#463F3A",
    borderBottomWidth: 1,
    marginRight: 10,
  },
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    margin: 10,
    backgroundColor: "#BCB8B1",
    borderRadius: 10,
  },
  modalMessageContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
