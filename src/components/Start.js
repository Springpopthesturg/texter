import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  LogBox,
  Image,
  Pressable,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

//importing images
import bgImage from "../assets/images/bkg-img.png";
import logo from "../assets/images/texter-logo.png";
import Icon from "react-native-vector-icons/FontAwesome";

class Start extends Component {
  state = {
    name: "",
    bgColor: "",
  };

  changeBgColor = (newColor) => {
    this.setState({ bgColor: newColor });
  };
  //background color choices
  colors = {
    beige: "#f5f5dc",
    grey: "#474056",
    lightBlue: "#8A95A5",
    lightGreen: "#B9C6AE",
  };

  componentDidMount() {
    LogBox.ignoreAllLogs();
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.bgImage}
        >
          <Image
            accessible={true}
            accessibilityLabel="Texter logo"
            accessibilityHint="The logo is a smily face and under it there is the app title 'Texter'"
            accessibilityRole="image"
            style={styles.logo}
            source={logo}
          />
          <View style={styles.box}>
            <View style={styles.inputField}>
              <Icon
                style={styles.iconStyle}
                name="user"
                size={30}
                color="#888"
              />
              <TextInput
                accessible={true}
                accessibilityLabel="Your Name"
                accessibilityHint="Type the name you want to use in the chat session"
                style={styles.input}
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}
                placeholder="Your Name"
              />
            </View>
            <View style={styles.colorSwatch}>
              <Text style={styles.subtitle}>Choose Background Color</Text>
              <View style={styles.swatches}>
                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Select beige background"
                  accessibilityHint="Lets you choose an beige background for the chat screen"
                  accessibilityRole="button"
                  onPress={() => this.changeBgColor(this.colors.beige)}
                >
                  <View style={styles.swatch1}></View>
                </TouchableOpacity>
                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Select grey background"
                  accessibilityHint="Lets you choose a grey background for the chat screen"
                  accessibilityRole="button"
                  onPress={() => this.changeBgColor(this.colors.grey)}
                >
                  <View style={styles.swatch2}></View>
                </TouchableOpacity>
                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Select light blue background"
                  accessibilityHint="Lets you choose a light blue background for the chat screen"
                  accessibilityRole="button"
                  onPress={() => this.changeBgColor(this.colors.lightBlue)}
                >
                  <View style={styles.swatch3}></View>
                </TouchableOpacity>
                <TouchableOpacity
                  accessible={true}
                  accessibilityLabel="Select light green background"
                  accessibilityHint="Lets you choose a light green background for the chat screen"
                  accessibilityRole="button"
                  onPress={() => this.changeBgColor(this.colors.lightGreen)}
                >
                  <View style={styles.swatch4}></View>
                </TouchableOpacity>
              </View>
            </View>
            <Pressable
              style={styles.btn}
              accessible={true}
              accessibilityLabel="Start texting"
              accessibilityHint="Lets you start a new chat session"
              accessibilityRole="button"
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  bgColor: this.state.bgColor,
                })
              }
            >
              <Text style={styles.btnText}>Start Texting</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// Styles for Start view
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#151617",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    height: "auto",
    resizeMode: "contain",
    flex: 1,
  },
  h1: {
    flexGrow: 1,
    flexShrink: 1,
    fontWeight: "800",
    color: "transparent",
    paddingTop: 60,
  },
  box: {
    backgroundColor: "#ffffff",
    flexGrow: 1,
    flexShrink: 0,
    width: "88%",
    marginBottom: 30,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 30,
    height: 260,
    minHeight: 260,
    maxHeight: 290,
    borderRadius: 20,
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 0,
  },
  iconStyle: {
    //padding: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 25,
    width: 25,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#888",
  },
  btn: {
    flex: 1,
    backgroundColor: "#6705e9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 32,
    marginTop: 10,
    width: "90%",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 16,
    marginTop: 0,
    marginBottom: 0,
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
    marginBottom: 10,
  },
  colorSwatch: {
    flex: 1,
    padding: 20,
    marginTop: 5,
  },
  swatches: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  swatch1: {
    width: 40,
    height: 40,
    backgroundColor: "#f5f5dc",
    borderRadius: 40,
  },
  swatch2: {
    width: 40,
    height: 40,
    backgroundColor: "#474056",
    borderRadius: 40,
  },
  swatch3: {
    width: 40,
    height: 40,
    backgroundColor: "#8A95A5",
    borderRadius: 40,
  },
  swatch4: {
    width: 40,
    height: 40,
    backgroundColor: "#B9C6AE",
    borderRadius: 40,
  },
});

export default Start;