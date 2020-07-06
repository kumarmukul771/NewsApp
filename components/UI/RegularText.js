import React from "react";
import { View, Text, StyleSheet } from "react-native";
const RegularText = props=> {
    console.log({...props})
  return <Text style={{...styles.text,...props.styles}} {...props}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins-regular",
    fontSize:14
  },
});

export default RegularText;