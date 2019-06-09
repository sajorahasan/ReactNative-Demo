import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";

import { Icon, Button } from "../controls";
import { colors, bs } from "../../theme";
import { getTheme } from "./theme";
import {
  extendStyle,
  getBorderProps,
  buildBorderStyle,
  getTextProps,
  buildTextStyle
} from "./utils";

const Edit = props => {
  const {
    onRef,
    autoCapsOff,
    theme,
    border,
    style,
    search,
    searchIcon,
    pointerEvents,
    passwordIcon,
    onPassIcon,
    ...otherProps
  } = props;
  const { borderProps, borderOtherProps } = getBorderProps(otherProps);
  const { textProps, textOtherProps } = getTextProps(borderOtherProps);

  const styles = getTheme(theme);
  const newStyle = buildTextStyle(textProps, styles.style("edit"));
  extendStyle(newStyle, style);

  if (!border) {
    return (
      <View style={defStyles.container}>
        {search && (
          <Icon
            name={searchIcon ? searchIcon : "io ios-search"}
            color={colors.lightGrey}
            size={25}
            style={defStyles.searchIcon}
          />
        )}
        <TextInput
          autoCapitalize={autoCapsOff ? "none" : null}
          ref={onRef}
          style={[newStyle, search ? defStyles.phSpace : {}]}
          placeholderTextColor={styles.style("edit.placeholder")}
          pointerEvents={pointerEvents}
          {...textOtherProps}
        />
        {passwordIcon ? (
          <Button style={defStyles.passIcon} onPress={onPassIcon}>
            <Icon
              name={otherProps.secureTextEntry ? "io md-eye-off" : "io md-eye"}
              size={25}
              color={colors.black}
            />
          </Button>
        ) : null}
      </View>
    );
  }

  const borderStyle =
    style || buildBorderStyle(borderProps, styles.style("edit.border"));
  return (
    <View
      style={[borderStyle, defStyles.container]}
      pointerEvents={pointerEvents}
    >
      {search && (
        <Icon
          name={searchIcon ? searchIcon : "io ios-search"}
          color={colors.lightGrey}
          size={30}
          style={defStyles.searchIcon}
        />
      )}
      <TextInput
        autoCapitalize={autoCapsOff ? "none" : null}
        ref={onRef}
        style={[newStyle, search ? defStyles.phSpace : {}]}
        placeholderTextColor={styles.style("edit.placeholder")}
        {...textOtherProps}
      />
    </View>
  );
};

const defStyles = {
  container: {
    ...bs.relative,
    ...bs.flex_row
  },
  searchIcon: {
    ...bs.absolute,
    ...bs.pl_4x,
    ...bs.pt_2x
  },
  passIcon: {
    ...bs.absolute,
    ...bs.p_2x,
    right: 0
  },
  phSpace: {
    ...bs.pl_12x
  }
};
Edit.propTypes = {
  pointerEvents: PropTypes.any,
  theme: PropTypes.any,
  type: PropTypes.any,
  style: PropTypes.any,
  border: PropTypes.bool,
  onRef: PropTypes.any,
  autoCapsOff: PropTypes.bool,
  search: PropTypes.bool,
  searchIcon: PropTypes.string,
  passwordIcon: PropTypes.bool,
  onPassIcon: PropTypes.func
};

Edit.defaultProps = {
  theme: "std",
  underlineColorAndroid: "rgba(0,0,0,0)"
};

export default Edit;
