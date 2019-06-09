//Global Libraries
import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

//Components
import { Icon, Button, Text, TextInput } from "../../controls";

//Styling
import { bs, colors, sizes } from "../../../theme";

class Row extends Component {
  render() {
    const {
      //Common
      noBorder,
      borderColor,
      borderWidth,
      //Input
      input,
      inputValue,
      placeholder,
      onChangeText,
      inputStyle,
      leftInputStyle,
      rightInputStyle,
      //Row
      title,
      titleColor,
      subtitle,
      subtitleColor,
      description,
      descriptionColor,
      icon,
      iconName,
      iconColor,
      iconSize,
      text,
      textColor,
      onPress,
      style,
      leftStyle,
      rightStyle,
      height,
      //Component
      leftComponent,
      rightComponent,
      ...otherProps
    } = this.props;

    const Title = () => (
      <Text
        numberOfLines={1}
        color={titleColor ? titleColor : colors.black}
        size={16}
      >
        {title}
      </Text>
    );

    const SubTitle = () => (
      <Text
        numberOfLines={1}
        color={subtitleColor ? subtitleColor : colors.placeholder}
        size={12}
      >
        {subtitle}
      </Text>
    );

    const Description = () => (
      <Text
        numberOfLines={1}
        color={descriptionColor ? descriptionColor : colors.black}
        size={13}
        style={bs.pt_1x}
      >
        {description}
      </Text>
    );

    const IconText = () => (
      <Text color={textColor ? textColor : colors.primary}>{text}</Text>
    );

    const IconRight = () => (
      <Icon
        name={iconName ? iconName : "io ios-arrow-forward"}
        color={iconColor ? iconColor : colors.primary}
        size={iconSize ? iconSize : 26}
        style={bs.pl_1x}
      />
    );

    const heightStyle = height ? { height: sizes.em(height) } : {};
    const borderStyle = !noBorder
      ? {
          borderTopWidth: borderWidth ? borderWidth : 0.5,
          borderTopColor: borderColor ? borderColor : colors.lightGrey,
          borderBottomWidth: borderWidth ? borderWidth : 0.5,
          borderBottomColor: borderColor ? borderColor : colors.lightGrey
        }
      : {};
    const defaultStyle = !noBorder
      ? { ...styles.container, ...borderStyle, ...heightStyle }
      : styles.container;

    const defaultInputStyle = !noBorder
      ? { ...styles.inputContainer, ...borderStyle, ...heightStyle }
      : styles.inputContainer;

    if (input) {
      return (
        <View style={[defaultInputStyle, style]}>
          <View style={[styles.leftInputView, leftInputStyle]}>
            {title && Title()}
            {subtitle && SubTitle()}
            {description && Description()}
          </View>
          <View style={[styles.rightInputView, rightInputStyle]}>
            <TextInput
              value={inputValue}
              placeholder={placeholder}
              autoCapsOff
              size={16}
              color={colors.black}
              onChangeText={onChangeText}
              style={[styles.input, inputStyle]}
              {...otherProps}
            />
          </View>
        </View>
      );
    }
    if (leftComponent && !rightComponent) {
      return (
        <View style={[defaultStyle, style]}>
          <View style={[styles.leftView, leftStyle]}>{leftComponent}</View>
          <View style={[styles.rightView, rightStyle]}>
            {text && IconText()}
            {icon && IconRight()}
          </View>
        </View>
      );
    }
    if (rightComponent && !leftComponent) {
      return (
        <View style={[defaultStyle, style]}>
          <View style={[styles.leftView, leftStyle]}>
            {title && Title()}
            {subtitle && SubTitle()}
            {description && Description()}
          </View>
          <View style={[styles.rightView, rightStyle]}>{rightComponent}</View>
        </View>
      );
    }
    if (leftComponent && rightComponent) {
      return (
        <View style={[defaultStyle, style]}>
          <View style={[styles.leftView, leftStyle]}>{leftComponent}</View>
          <View style={[styles.rightView, rightStyle]}>{rightComponent}</View>
        </View>
      );
    }
    return (
      <Button style={[defaultStyle, style]} onPress={onPress}>
        <View style={[styles.leftView, leftStyle]}>
          {title && Title()}
          {subtitle && SubTitle()}
          {description && Description()}
        </View>
        <View style={[styles.rightView, rightStyle]}>
          {text && IconText()}
          {icon && IconRight()}
        </View>
      </Button>
    );
  }
}

const styles = {
  container: {
    ...bs.full_width,
    ...bs.flex_row,
    ...bs.between_center,
    ...bs.ph_6x,
    ...bs.bg_white,
    height: sizes.em(50)
  },
  leftView: {
    ...bs.flex_col
  },
  rightView: {
    ...bs.flex_row,
    ...bs.item_center,
    ...bs.pl_2x,
    ...bs.pv_1x
  },
  inputContainer: {
    ...bs.full_width,
    ...bs.flex_row,
    ...bs.between_center,
    ...bs.pl_6x,
    ...bs.bg_white,
    height: sizes.em(50)
  },
  leftInputView: {
    ...bs.flex_col,
    width: "30%"
  },
  rightInputView: {
    width: "70%"
  },
  input: {
    ...bs.full_width,
    ...bs.pl_4x,
    height: sizes.em(49)
  }
};

Row.propTypes = {
  //Common
  noBorder: PropTypes.bool,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  //Input
  input: PropTypes.bool,
  inputValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  inputStyle: PropTypes.any,
  leftInputStyle: PropTypes.any,
  rightInputStyle: PropTypes.any,
  //Row
  title: PropTypes.string,
  titleColor: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  icon: PropTypes.bool,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  text: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
  leftStyle: PropTypes.any,
  rightStyle: PropTypes.any,
  height: PropTypes.number,
  //Component
  leftComponent: PropTypes.any,
  rightComponent: PropTypes.any
};

Row.defaultProps = {
  onPress: () => {}
};

export default Row;
