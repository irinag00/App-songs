import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const [itemList, setItemList] = useState([]);

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
  const renderListItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button color="#8A817C" title="X"></Button>
    </View>
  );
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCB8B1",
    alignItems: "start",
    padding: 20,
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
    backgroundColor: "#F4F3EE",
    borderRadius: 10,
  },
});
