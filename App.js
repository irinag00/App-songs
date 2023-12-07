import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ImageBackground,
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
    if (textInput !== "") {
      setItemList((prevStateList) => [
        ...prevStateList,
        { id: Math.random().toString(), value: textInput },
      ]);
    }

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
      <Pressable onPress={() => onSelectItemHandler(item.id)}>
        <Image
          source={require("./assets/delete_FILL0_wght400_GRAD0_opsz24.png")}
        />
      </Pressable>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text>¡Tu app de canciones!</Text>
        </View>
        <InputContainer
          placeholderProp={"Ingresa una canción"}
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
    padding: 10,
    margin: 10,
    backgroundColor: "#E0AFA0",
    borderRadius: 10,
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
