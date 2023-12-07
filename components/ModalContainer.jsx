import { View, Text, Modal, StyleSheet, Button, Image } from "react-native";

const ModalContainer = ({
  animationTypeProp,
  isVisibleProp,
  itemSelectedProp,
  onDeleteItemHandlerEvent,
  setModalVisibleEvent,
}) => {
  return (
    <Modal
      transparent={true}
      animationType={animationTypeProp}
      visible={isVisibleProp}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalMessageContainer}>
            <Text>¿Desea eliminar esta canción de su playlist? </Text>
            <Text>"{itemSelectedProp.value}"</Text>
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
        </View>
      </View>
    </Modal>
  );
};

export default ModalContainer;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalMessageContainer: {
    alignItems: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    gap: 10,
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
