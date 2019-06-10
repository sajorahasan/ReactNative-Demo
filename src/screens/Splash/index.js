//Global Libraries
import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import SplashScreen from "react-native-splash-screen";

//Local Libraries
import navigation from "@navigation/services";
import strings from "@language";
//Redux

//Components
import { Container } from "../../components/common";
import { Text, Image } from "../../components/controls";

//Styling
import { colors, images } from "../../theme";
import styles from "./styles";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingData: true,
      loggedIn: false
      //
    };
  }

  ///////////////////////
  //// FUNCTIONS ////////

  // react
  componentDidMount() {
    console.log("I am here ---->");
    this._prepareData();
  }

  // navigation
  _goToApp = () => {
    if (this.state.loggedIn) {
      SplashScreen.hide();
      navigation.reset("home");
    } else {
      SplashScreen.hide();
      navigation.reset("login");
    }
  };

  // logical
  _updateValue = (field, val, callback) => {
    this.setState({ [field]: val }, callback);
  };

  _prepareData = () => {
    this._updateValue("loadingData", false, () => {
      this._goToApp();
    });
  };

  //// FUNCTIONS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW ////////////

  // Title with Icon
  renderTitle = () => {
    return (
      <View style={styles.topContainer}>
        <Image file={images.app_icon} style={styles.icon} />
        <Text semibold size={36} color={colors.black}>
          {strings.education}
        </Text>
        <Text semibold size={36} color={colors.black}>
          {strings.walkThrough}
        </Text>
      </View>
    );
  };

  //Render View
  render() {
    return <Container>{this.renderTitle()}</Container>;
  }
  ////// VIEW ////////////
  ////////////////////////
}

Splash.propTypes = {
  dispatch: PropTypes.func
};

export default Splash;
