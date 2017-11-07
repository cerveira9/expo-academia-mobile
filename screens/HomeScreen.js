import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import Header from "../components/common/header";
import LoginForm from "../components/LoginForm";
import Button from "../components/common/Button";
import CardSection from "../components/common/CardSection";
import Spinner from "../components/common/Spinner";

export default class HomeScreen extends Component {
  state = { loggedIn: false };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Academia" />
          {this.renderContent()}
      </View>
    );
  }
}

const styles = {};
