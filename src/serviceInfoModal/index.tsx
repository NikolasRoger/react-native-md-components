import React from "react";
import { Text } from "./styles";
import { MdModal, Button } from "..";
import { ScrollView, View } from "react-native";

interface IProps {
  text: string;
}

const ServiceInfoModal = (props: IProps) => {
  return (
    <MdModal modalTitle="Conta Digital Astecas">
      <ScrollView style={{ marginTop: 20, marginBottom: 30 }}>
        <Text>{props.text}</Text>
      </ScrollView>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <Button type="primary" title="Saiba mais sobre o Astecas" />
      </View>
    </MdModal>
  );
};

export default ServiceInfoModal;
