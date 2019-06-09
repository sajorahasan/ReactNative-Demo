import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { Icon } from "../controls/";
import { colors } from "../../theme";

export default class CheckBox extends React.Component {
  render() {
    const {
      checked,
      disable,
      color,
      size,
      onChange,
      ...otherProps
    } = this.props;

    return (
      <TouchableOpacity activeOpacity={disable ? 1 : 0.6} onPress={onChange}>
        <Icon
          name={
            checked ? "mc checkbox-marked-outline" : "mc checkbox-blank-outline"
          }
          color={color}
          size={size}
          {...otherProps}
        />
      </TouchableOpacity>
    );
  }
}

CheckBox.propTypes = {
  disable: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.number,
  checked: PropTypes.bool
};

CheckBox.defaultProps = {
  onChange: () => {},
  color: colors.primary,
  size: 18,
  checked: true
};
