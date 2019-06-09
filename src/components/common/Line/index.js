//Global Libraries
import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

//Styling
import { bs, colors, sizes } from "../../../theme";

class Line extends Component {
  render() {
    const { height, pad, color } = this.props;

    const defaultStyle = {
      height: height,
      backgroundColor: color,
      marginVertical: pad
    };
    return <View style={[styles.container, defaultStyle]} />;
  }
}

const styles = {
  container: {
    ...bs.full_width
  }
};

Line.propTypes = {
  height: PropTypes.number,
  pad: PropTypes.number,
  color: PropTypes.string
};

Line.defaultProps = {
  height: 0.5,
  pad: sizes.em(10),
  color: colors.lightGrey
};

export default Line;
