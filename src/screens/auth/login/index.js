//Global Libraries
import React, { Component } from "react";
import { View, Alert } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import navigation from "@navigation/services";
import Global from "@common-functions";
import apis from "@apis";
import strings from "@language";
import local from "@local-db";

//Redux

//Components
import { Container, Loader } from "../../../components/common";
import {
  Scroll,
  Text,
  Image,
  Button,
  TextInput,
  CheckBox
} from "../../../components/controls";

//Styling
import { colors, images } from "../../../theme";
import styles from "./styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      password: "",
      rememberMe: false,
      securePassword: true
    };
  }

  ///////////////////////
  //// FUNCTIONS ////////

  // navigation
  _goToRegister = () => {
    navigation.signup();
  };

  _goToHome = () => {
    navigation.reset("home");
  };

  _goToForgot = () => {
    navigation.forgotPassword({
      navTitle: strings.login
    });
  };

  // logical
  _updateValue = (field, val, callback) => {
    this.setState({ [field]: val }, callback);
  };

  _prepareData = async () => {
    const USER_REMEMBER = await local.getOne("USER_REMEMBER");
    await local.get();
    if (USER_REMEMBER) {
      this._updateValue("email", USER_REMEMBER.data.email);
      this._updateValue(
        "password",
        Global.decrypt(USER_REMEMBER.data.email, USER_REMEMBER.data.password)
      );
      this._updateValue("rememberMe", true);
      this._updateValue("loading", false);
    } else {
      this._updateValue("loading", false);
    }
  };

  _showHidePassword = () => {
    this._updateValue("hidePassword", !this.state.hidePassword);
  };

  _onRemember = () => {
    const { rememberMe } = this.state;
    if (rememberMe) {
      this._removeUserFromRemember();
      this._updateValue("email", "");
      this._updateValue("password", "");
      this._updateValue("rememberMe", false);
    } else {
      this._updateValue("rememberMe", true);
    }
  };

  _rememberUser = async () => {
    const { email, password, rememberMe } = this.state;
    if (rememberMe) {
      await local.insert("USER_REMEMBER", {
        email,
        password: Global.encrypt(email, password)
      });
    }
  };

  _removeUserFromRemember = async () => {
    await local.cleanOne("USER_REMEMBER");
  };

  _togglePassword = () => {
    this._updateValue("securePassword", !this.state.securePassword);
  };

  _validate = () => {
    const { email } = this.state;
    if (Global.validate("email", email)) {
      return true;
    }
  };

  _onLogin = () => {
    this._goToHome();
    // if (this._validate()) {
    //   const { email, password } = this.state;
    //   const param = {
    //     email,
    //     password
    //   };
    //   this._updateValue("loading", true);
    //   apis
    //     .login(param)
    //     .then(() => {
    //       this._rememberUser();
    //       this._updateValue("loading", false, () => {
    //         this._goToHome();
    //       });
    //     })
    //     .catch(err => {
    //       this._updateValue("loading", false, () => {
    //         Alert.alert(strings.error, err);
    //       });
    //     });
    // }
  };

  //// FUNCTIONS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW ////////////

  // Content
  renderContent = () => {
    return (
      <Scroll>
        <View style={styles.container}>
          {this.renderTitle()}
          {this.renderForm()}
          {this.renderFooter()}
          <Loader type="transparent" visible={this.state.loading} />
        </View>
      </Scroll>
    );
  };

  // Title with Icon
  renderTitle = () => {
    return (
      <View style={styles.topContainer}>
        <Image file={images.app_icon} style={styles.icon} />
        <Text semibold size={28} color={colors.black}>
          {strings.education}
        </Text>
        <Text semibold size={28} color={colors.black}>
          {strings.walkThrough}
        </Text>
      </View>
    );
  };

  // Login Form
  renderForm = () => {
    const { email, password } = this.state;
    const allowLogin = email.length > 0 && password.length > 0;
    return (
      <View style={styles.form}>
        <TextInput
          keyboardType="email-address"
          autoCapsOff
          placeholder={strings.email}
          size={14}
          color={colors.black}
          style={styles.input}
          value={email}
          onChangeText={text => this._updateValue("email", text)}
        />
        <TextInput
          placeholder={strings.password}
          autoCapsOff
          size={14}
          color={colors.black}
          style={styles.input}
          value={password}
          onChangeText={text => this._updateValue("password", text)}
          passwordIcon
          secureTextEntry={this.state.securePassword}
          onPassIcon={this._togglePassword}
        />
        <View style={styles.formRow}>
          <Button style={styles.formRow2} onPress={this._onRemember}>
            <CheckBox
              size={25}
              checked={this.state.rememberMe}
              onChange={this._onRemember}
            />
            <Text size={14} color={colors.black}>
              {strings.rememberMe}
            </Text>
          </Button>
          <Button onPress={this._goToForgot}>
            <Text size={14} color={colors.red}>
              {strings.forgotPasswordQ}
            </Text>
          </Button>
        </View>
        <Button
          style={allowLogin ? styles.btnLogin : styles.btnLoginDisable}
          onPress={allowLogin ? this._onLogin : () => {}}
        >
          <Text semibold size={18} color={colors.white}>
            {strings.login}
          </Text>
        </Button>
      </View>
    );
  };

  // Footer Button
  renderFooter = () => {
    return (
      <Button onPress={this._goToRegister} bstyle={styles.btnRegister}>
        <Text size={18} color={colors.primary}>
          {strings.createNewAc}
        </Text>
      </Button>
    );
  };

  //Render View
  render() {
    return <Container>{this.renderContent()}</Container>;
  }
  ////// VIEW ////////////
  ////////////////////////
}

Login.propTypes = {
  dispatch: PropTypes.func
};

export default Login;
