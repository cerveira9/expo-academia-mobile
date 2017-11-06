import React, { Component } from "react";
import { TextInput } from "react-native";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import CardSection from "../components/common/CardSection";

class LoginForm extends Component {
  state = { text: "" };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
