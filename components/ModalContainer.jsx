import { View, Text, Modal, StyleSheet, Button } from "react-native";

const ModalContainer = ({
  animationTypeProp,
  isVisibleProp,
  itemSelectedProp,
  onDeleteItemHandlerEvent,
  setModalVisibleEvent,
}) => {
  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp}>
      <View style={styles.modalMessageContainer}>
        <Text>Se eliminará: </Text>
        <Text>{itemSelectedProp.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button
          color={"#BCB8B1"}
          title="Cancelar"
          onPress={() => setModalVisibleEvent(!isVisibleProp)}
        />
        <Button
          color="#E0AFA0"
          title="Eliminar"
          onPress={onDeleteItemHandlerEvent}
        />
      </View>
    </Modal>
  );
};

export default ModalContainer;
const styles = StyleSheet.create({
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
