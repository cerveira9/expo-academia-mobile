// Import libraries
import React from "react";
import { Text, View } from "react-native";

// Make components
const Header = props => {
  //props = Properties. Passing os data.
  const { textStyle, viewStyle } = styles; //Declaring and allowin styles 2 b used.

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//Make the style of the component
const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component available to other parts of the app
export default Header;
