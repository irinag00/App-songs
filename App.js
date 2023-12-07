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
import InputContainer from "./components/InputContainer";
import ModalContainer from "./components/ModalContainer";

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
          <Text>¡Tu app de ejercicios!</Text>
        </View>
        <InputContainer
          placeholderProp={"Ingresa un ejercicio"}
          textItemProp={textInput}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListEvent={addItemToList}
        />
        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ModalContainer
        animationTypeProp={"slide"}
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelectedToDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
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
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    margin: 10,
    backgroundColor: "#BCB8B1",
    borderRadius: 10,
  },
});
