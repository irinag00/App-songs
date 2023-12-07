import { View, TextInput, Button, StyleSheet } from "react-native";

const InputContainer = ({
  placeholderProp,
  textItemProp,
  onChangeTextHandlerEvent,
  addItemToListEvent,
}) => {
  return (
    <View style={styles.inputCointainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholderProp}
        onChangeText={onChangeTextHandlerEvent}
        value={textItemProp}
      />
      <Button title="Añadir" color="#E0AFA0" onPress={addItemToListEvent} />
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  inputCointainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInput: {
    width: 200,
    borderBottomColor: "#463F3A",
    borderBottomWidth: 1,
  },
});
