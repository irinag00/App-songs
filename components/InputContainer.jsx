import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

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
      <Pressable onPress={addItemToListEvent}>
        <Image
          source={require("../assets/add_circle_FILL1_wght400_GRAD0_opsz24.png")}
        />
      </Pressable>
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
