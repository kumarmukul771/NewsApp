import React from "react";
import { View,Text,StyleSheet,Dimensions } from "react-native";
import { Overlay } from "react-native-elements";
import RegularText from "../UI/RegularText";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SignInOverlay = (props) => {
  return (
    <Overlay overlayStyle={styles.container} isVisible={props.visible} onBackdropPress={props.modalHandler}>
      <RegularText>
          You need To Sign in to use this feature
      </RegularText>
    </Overlay>
  );
};
const styles=StyleSheet.create({
    container:{
        height:SCREEN_HEIGHT*0.2,
        width: SCREEN_WIDTH*0.8,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:18
    }
})
export default SignInOverlay;
