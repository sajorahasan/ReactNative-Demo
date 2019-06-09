import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { Text, Button, Icon } from "../controls/";
import { colors, bs } from "../../theme";

class NavBar extends React.Component {
  render() {
    const {
      backText,
      backTextColor,
      backIcon,
      backIconColor,
      backIconName,
      onBack,
      title,
      titleSize,
      titleColor,
      subTitle,
      subTitleColor,
      rightIcon,
      rightIconColor,
      rightIconName,
      rightText,
      rightTextColor,
      onRight,
      padH,
      padV,
      style
    } = this.props;

    const Left = () => (
      <Button onPress={onBack} style={styles.row}>
        {backIcon && (
          <Icon
            name={backIconName ? backIconName : "io ios-arrow-back"}
            color={backIconColor ? backIconColor : colors.black}
            size={30}
            style={styles.pRight}
          />
        )}
        {backText && (
          <Text color={backTextColor ? backTextColor : colors.black} size={18}>
            {backText}
          </Text>
        )}
      </Button>
    );

    const Title = () => (
      <View style={styles.title}>
        {title && (
          <Text
            semibold
            color={titleColor ? titleColor : colors.black}
            size={titleSize ? titleSize : 22}
          >
            {title}
          </Text>
        )}
        {subTitle && (
          <Text
            color={subTitleColor ? subTitleColor : colors.placeholder}
            size={12}
          >
            {subTitle}
          </Text>
        )}
      </View>
    );

    const Right = () => (
      <Button onPress={onRight} style={styles.row}>
        {rightText && (
          <Text
            color={rightTextColor ? rightTextColor : colors.black}
            size={18}
          >
            {rightText}
          </Text>
        )}
        {rightIcon && (
          <Icon
            name={rightIconName ? rightIconName : "io ios-arrow-forward"}
            color={rightIconColor ? rightIconColor : colors.black}
            size={30}
            style={styles.pLeft}
          />
        )}
      </Button>
    );
    return (
      <View
        style={[
          styles.container,
          padH ? padH : styles.phDef,
          padV ? padV : styles.pvDef,
          style
        ]}
      >
        {Left()}
        {Title()}
        {Right()}
      </View>
    );
  }
}

const styles = {
  container: {
    ...bs.flex_row,
    ...bs.between_center,
    ...bs.full_width,
    ...bs.bg_grey
  },
  phDef: {
    ...bs.ph_2x
  },
  pvDef: {
    ...bs.pv_2x
  },
  pLeft: {
    ...bs.pl_2x
  },
  pRight: {
    ...bs.pr_2x
  },
  row: {
    ...bs.flex_row,
    ...bs.item_center
  },
  title: {
    ...bs.flex_col,
    ...bs.item_center
  }
};

NavBar.propTypes = {
  padH: PropTypes.any,
  padV: PropTypes.any,
  backText: PropTypes.string,
  backTextColor: PropTypes.string,
  backIcon: PropTypes.bool,
  backIconColor: PropTypes.string,
  backIconName: PropTypes.string,
  onBack: PropTypes.func,
  title: PropTypes.string,
  titleSize: PropTypes.number,
  titleColor: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleColor: PropTypes.string,
  rightIcon: PropTypes.bool,
  rightIconColor: PropTypes.string,
  rightIconName: PropTypes.string,
  rightText: PropTypes.string,
  rightTextColor: PropTypes.string,
  onRight: PropTypes.func,
  style: PropTypes.any
};

NavBar.defaultProps = {
  onBack: () => {},
  onRight: () => {}
};

export default NavBar;
