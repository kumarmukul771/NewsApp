import React from "react";
import { View, Text, StyleSheet } from "react-native";
const SemiBoldText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.styles }} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-semibold",
    fontSize: 14,
  },
});

export default SemiBoldText;
