import React from "react";
import {View, Image} from "react-native";
import Button from "../components/common/Button";
import CardSection from "../components/common/CardSection";

const HomeForm = () => {
    return(
        <View>
            <View style={styles.viewStyle}>
                <Image
                    style={styles.imageStyle} 
                    source={require('../assets/images/EASY_GYM.png')} 
                />
            </View>
            <CardSection>
                <Button style={styles.buttonStyle}>Treinos</Button>
            </CardSection>
        </View>
    );
};

const styles = {
    imageStyle: {
       height: 300,
       width: 300
    },
    viewStyle: {
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        padding: 15
    },
    buttonStyle: {
        
    }
    
};

export default HomeForm;