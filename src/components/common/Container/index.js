//Global Libraries
import React, { Component } from "react";
import { StatusBar, SafeAreaView, Platform } from "react-native";
import PropTypes from "prop-types";

//Styling
import { bs, colors } from "../../../theme";

class Container extends Component {
  render() {
    const { children, status, statusBgColor, statusGray } = this.props;
    const themeColor = colors.primary;
    const dark = "dark-content";
    const light = "light-content";

    const barStyleProps = status === "dark" ? dark : light;
    const barStyleDefaultProps = Platform.OS === "ios" ? dark : light;
    const backgroundColor = statusBgColor ? statusBgColor : themeColor;

    const SafeStatusBar = [statusGray ? bs.bg_grey : bs.bg_white, bs.flex];

    return (
      <SafeAreaView style={SafeStatusBar}>
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle={status ? barStyleProps : barStyleDefaultProps}
        />
        {children}
      </SafeAreaView>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.any,
  status: PropTypes.string,
  statusBgColor: PropTypes.string,
  statusGray: PropTypes.bool
};

export default Container;
