//Global Libraries
import React, { Component } from "react";
import { View, Alert } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import navigation from "@navigation/services";
import strings from "@language";
import local from "@local-db";

//Components
import { Container, Loader } from "../../components/common";
import { Scroll, Text, Image, Button } from "../../components/controls";

//Styling
import { colors, images } from "../../theme";
import styles from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      email: ""
    };
  }

  ///////////////////////
  //// FUNCTIONS - STARTS ////////

  // react
  componentDidMount() {
    this._prepareData();
  }

  // navigation
  _goToLogin = () => {
    navigation.reset("login");
  };

  _prepareData = async () => {
    const userData = await local.getOne("EMAIL");
    if (userData) {
      this.setState({
        email: userData.data.email,
        loading: false
      });
    } else {
      this.setState({ loading: false });
    }
  };

  _showLogoutAlert = () => {
    Alert.alert(strings.logout, strings.logoutConfirm, [
      {
        text: strings.yes.toUpperCase(),
        onPress: this._logout
      },
      {
        text: strings.no.toUpperCase()
      },
      {
        cancelable: false
      }
    ]);
  };

  _logout = async () => {
    await local.cleanOne("EMAIL");
    await local.cleanOne("USER_CREDENTIALS");
    Alert.alert(strings.success, strings.logoutSuccess, [
      {
        text: strings.ok.toUpperCase(),
        onPress: this._goToLogin
      },
      {
        cancelable: false
      }
    ]);
  };

  //// FUNCTIONS - ENDS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW - STARTS ////////////

  // Content
  renderContent = () => {
    return (
      <Scroll>
        <View style={styles.container}>
          {this.renderTitle()}
          {this.renderBody()}
          {this.renderFooter()}
          <Loader type="transparent" visible={this.state.loading} />
        </View>
      </Scroll>
    );
  };

  // Title
  renderTitle = () => {
    return (
      <View style={styles.topContainer}>
        <Image file={images.app_icon} style={styles.icon} />
        <Text bold size={30} color={colors.black}>
          {strings.home}
        </Text>
      </View>
    );
  };

  // Home Body
  renderBody = () => {
    return (
      <View style={styles.form}>
        <Text bold size={24} color={colors.black}>
          {strings.welcome + ", " + this.state.email}
        </Text>
      </View>
    );
  };

  // Footer Button
  renderFooter = () => {
    return (
      <Button onPress={this._showLogoutAlert} bstyle={styles.btnRegister}>
        <Text size={18} color={colors.primary}>
          {strings.logout}
        </Text>
      </Button>
    );
  };

  //Render View
  render() {
    return <Container>{this.renderContent()}</Container>;
  }
  ////// VIEW - ENDS ////////////
  ////////////////////////
}

Home.propTypes = {
  dispatch: PropTypes.func
};

export default Home;
