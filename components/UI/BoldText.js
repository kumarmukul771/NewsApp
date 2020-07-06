import React from "react";
import { View, Text, StyleSheet } from "react-native";
const BoldText = props => {
  return <Text style={styles.text} {...props}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-bold",
    fontSize:20
  },
});

export default BoldText