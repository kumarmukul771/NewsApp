import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { render } from "react-dom";
import SemiBoldText from "./components/UI/SemiBoldText";
import RegularText from "./components/UI/RegularText";
import BoldText from "./components/UI/BoldText";
import { Card, Button, Overlay } from "react-native-elements";
import Deck from "./components/UI/Deck";
import NewCard from "./components/UI/NewsCard";
import { ScrollView } from "react-native-gesture-handler";
import SignInOverlay from "./components/Overlays/SignIn";
import { throwIfAudioIsDisabled } from "expo-av/build/Audio/AudioAvailability";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const fetchFont = () => {
  return Font.loadAsync({
    "poppins-semibold":
      "https://res.cloudinary.com/pchauhan77/raw/upload/v1593859371/decibell/fonts/Poppins-SemiBold_iy4zmw.ttf",
    "poppins-regular":
      "https://res.cloudinary.com/pchauhan77/raw/upload/v1593859371/decibell/fonts/Poppins-Regular_jitfcu.ttf",
    "poppins-medium":
      "https://res.cloudinary.com/pchauhan77/raw/upload/v1593859371/decibell/fonts/Poppins-Medium_si4gby.ttf",
    "poppins-bold":
      "https://res.cloudinary.com/pchauhan77/raw/upload/v1593859372/decibell/fonts/Poppins-Bold_q0wrcq.ttf",
  });
};

export default class App extends Component {
  state = {
    dataloaded: false,
    modelVisible: false,
  };

  modalHandler = () => {
    if (this.state.modelVisible) {
      this.setState({
        modelVisible: false,
      });
    } else {
      this.setState({
        modelVisible: true,
      });
    }
  };

  render() {
    if (!this.state.dataloaded) {
      return (
        <AppLoading
          startAsync={fetchFont}
          onFinish={() => {
            this.setState({
              dataloaded: true,
            });
          }}
        />
      );
    }

    return (
      <ScrollView>
        <NewCard modalHandler={this.modalHandler} />
        <NewCard modalHandler={this.modalHandler} />
        <NewCard modalHandler={this.modalHandler} />
        <SignInOverlay visible={this.state.modelVisible} modalHandler={this.modalHandler} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});
