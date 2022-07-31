import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import * as Speech from "expo-speech";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Text-to-Speech App</Text>
        <Image source={require("./logo.png")} style={{ width: 300, height: 300, marginTop: "10%" }} />
        <TextInput style={styles.input} placeholder="Enter Text here ..."
          onChangeText={
            (text) => {
              this.setState({ text: text })
            }
          }
          onBlur={
            () => {
              this.speakText(this.state.text)
            }
          }
          value={this.state.text}
        />
        <TouchableOpacity style={styles.speakBtn} onPress={() => { this.speakText(this.state.text) }}>
          <Text style={styles.speakBtnTxt}>
            Speak
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  speakText(speech) {
    Speech.speak(speech);
    this.setState({ text: "" })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    paddingTop: "10%",
    alignItems: 'center',
  },
  heading: {
    color: 'blue',
    fontSize: 30,
  },
  input: {
    backgroundColor: 'aqua',
    borderColor: 'black',
    borderWidth: 5,
    width: "80%",
    height: 100,
    textAlign: "center",
    marginTop: "20%",
    fontSize: 15
  },
  speakBtn: {
    marginTop: "10%",
    backgroundColor: "lightblue"
  },
  speakBtnTxt: {
    color: "green",
    fontSize: 25,
    padding: "2%",
    borderColor: 'black',
    borderWidth: 2,
  }
});
