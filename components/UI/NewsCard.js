import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import SemiBoldText from "./SemiBoldText";
import RegularText from "./RegularText";
import BoldText from "./BoldText";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class NewCard extends Component {
  state = {
    vote: null,
  };

  upvoteHandler = () => {
    if (this.state.vote === true) {
      this.setState({
        vote: null,
      });
    } else {
      this.setState({
        vote: true,
      });
    }
  };

  downVoteHandler = () => {
    if (this.state.vote === false) {
      this.setState({
        vote: null,
      });
    } else {
      this.setState({
        vote: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://www.w3schools.com/w3css/img_forest.jpg" }}
            style={styles.image}
          />
        </View>

        <View style={styles.headerContainer}>
          <BoldText>News Title</BoldText>
        </View>

        <View style={styles.summaryContainer}>
          <RegularText numberOfLines={15}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s
            when an unknown printer took a galley of type.
          </RegularText>
        </View>

        <View style={styles.readmoreContainer}>
          <TouchableOpacity>
            <RegularText styles={{ color: "#3399FF" }}>
              Read More ......
            </RegularText>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={this.upvoteHandler}>
            <SemiBoldText
              styles={this.state.vote === true ? styles.green : null}
            >
              Upvote
            </SemiBoldText>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.modalHandler}>
            <Text style={{ fontFamily: "poppins-semibold" }}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.downVoteHandler}>
            <SemiBoldText
              styles={this.state.vote === false ? styles.red : null}
            >
              DownVote
            </SemiBoldText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  imageContainer: {
    height: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryContainer: {
    flex: 1,
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.5,
  },
  summaryText: {
    fontFamily: "poppins-regular",
    fontSize: 15,
  },
  headerContainer: {
    marginTop: 10,
  },
  headerText: {
    fontFamily: "poppins-bold",
    fontSize: 20,
  },
  readmoreContainer: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.95,
    justifyContent: "center",
  },
  bottomContainer: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.85,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "flex-end",
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
});
