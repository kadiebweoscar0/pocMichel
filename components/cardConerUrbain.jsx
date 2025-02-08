import { View, Text, Image } from "react-native";
import React from "react";

const CardConerUrbain = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Image source={props.srcImage} style={{ width: 70, height: 70 }} />
      <View
        style={{
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#2ECC71",
          }}
        >
          {props.text1}
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          {props.text2}
        </Text>
      </View>
    </View>
  );
};

export default CardConerUrbain;
