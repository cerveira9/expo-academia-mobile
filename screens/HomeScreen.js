import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import Header from "../components/common/header";
import LoginForm from "../components/LoginForm";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAR9I_0AA3EbMzPBMi0e5cWO9O7GA8fFOQ",
      authDomain: "auth-3e9bb.firebaseapp.com",
      databaseURL: "https://auth-3e9bb.firebaseio.com",
      projectId: "auth-3e9bb",
      storageBucket: "auth-3e9bb.appspot.com",
      messagingSenderId: "269691653937"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Academia" />
        <LoginForm />
      </View>
    );
  }
}

const styles = {};
