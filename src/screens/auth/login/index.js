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
  //// FUNCTIONS - STARTS ////////

  // react
  componentDidMount() {
    this._prepareData();
  }

  // navigation
  _goToRegister = () => {
    //navigation.signup();
    alert("WIP");
  };

  _goToHome = () => {
    navigation.reset("home");
  };

  _goToForgot = () => {
    // navigation.forgotPassword({
    //   navTitle: strings.login
    // });
    alert("WIP");
  };

  _prepareData = async () => {
    const userData = await local.getOne("USER_CREDENTIALS");
    if (userData) {
      this.setState({
        email: userData.data.email,
        password: Global.decrypt(userData.data.email, userData.data.password),
        rememberMe: true,
        loading: false
      });
    } else {
      this.setState({ loading: false });
    }
  };

  _showHidePassword = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  _onRemember = () => {
    if (this.state.rememberMe) {
      this.setState({ rememberMe: false });
    } else {
      this.setState({ rememberMe: true });
    }
  };

  _saveUserData = async () => {
    const { email, password, rememberMe } = this.state;
    await local.insert("EMAIL", { email });
    if (rememberMe) {
      await local.insert("USER_CREDENTIALS", {
        email,
        password: Global.encrypt(email, password)
      });
    }
  };

  _clearUserData = async () => {
    await local.cleanOne("USER_CREDENTIALS");
  };

  _togglePassword = () => {
    this.setState({ securePassword: !this.state.securePassword });
  };

  _validate = () => {
    const { email } = this.state;
    if (Global.validate("email", email)) {
      return true;
    }
  };

  _onLogin = async () => {
    if (this._validate()) {
      const { email, password } = this.state;
      const param = {
        email,
        password
      };
      this.setState({ loading: true });

      setTimeout(() => {
        console.log("hereeee");
      }, 300);
      if (email === "sajorahasan@gmail.com" && password === "#reset123") {
        this._saveUserData();
        this.setState({ loading: false });
        Alert.alert(strings.success, strings.loginSuccess, [
          {
            text: strings.ok.toUpperCase(),
            onPress: this._goToHome
          },
          {
            cancelable: false
          }
        ]);
      } else {
        this.setState({ loading: false });
        Alert.alert(strings.error, "Incorrect Credentails");
      }

      // apis
      //   .login(param)
      //   .then(() => {
      //     this._saveUserData();
      //     this.setState({ loading: false });
      //     this._goToHome();
      //   })
      //   .catch(err => {
      //     this.setState({ loading: false });
      //     Alert.alert(strings.error, err);
      //   });
    }
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
          {strings.reactNative}
        </Text>
        <Text semibold size={28} color={colors.black}>
          {strings.demoApp}
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
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          placeholder={strings.password}
          autoCapsOff
          size={14}
          color={colors.black}
          style={styles.input}
          value={password}
          onChangeText={text => this.setState({ password: text })}
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
  ////// VIEW - ENDS ////////////
  ////////////////////////
}

Login.propTypes = {
  dispatch: PropTypes.func
};

export default Login;
