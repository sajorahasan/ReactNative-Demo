//Global Libraries
import React, { Component } from "react";
import { View, ActivityIndicator, Modal } from "react-native";
import PropTypes from "prop-types";

//Components
import { Text } from "../../controls";

//Styling
import { bs, sizes, colors } from "../../../theme";

class Loader extends Component {
  render() {
    const { type, visible, size, color, ...otherProps } = this.props;

    if (type === "default") {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={size} color={color} {...otherProps} />
        </View>
      );
    }
    if (type === "progress") {
      return (
        <View style={styles.containerTransparentLoader}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {}}
            {...otherProps}
          >
            <View style={styles.modalContainer}>
              <View style={styles.content}>
                <ActivityIndicator size={size} color={color} {...otherProps} />
                <Text bold size={16} color={color} style={bs.pt_2x}>{`${
                  this.props.progress
                }%`}</Text>
              </View>
            </View>
          </Modal>
        </View>
      );
    }

    if (type === "transparent") {
      return (
        <View style={styles.containerTransparentLoader}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {}}
            {...otherProps}
          >
            <View style={styles.modalContainer}>
              <View style={styles.content}>
                <ActivityIndicator size={size} color={color} {...otherProps} />
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
}

const styles = {
  container: {
    ...bs.flex,
    ...bs.full_width,
    ...bs.center,
    ...bs.bg_white
  },
  containerTransparentLoader: {
    ...bs.absolute_full
  },
  modalContainer: {
    ...bs.flex,
    ...bs.center,
    ...bs.bg_modal
  },
  content: {
    height: sizes.screen.width / 3,
    width: sizes.screen.width / 3,
    ...bs.bg_white,
    ...bs.m_4x,
    ...bs.ph_4x,
    ...bs.pv_4x,
    ...bs.center,
    borderRadius: sizes.em(10)
  }
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  visible: PropTypes.bool,
  progress: PropTypes.number
};

Loader.defaultProps = {
  size: "large",
  color: colors.black,
  type: "default",
  visible: false
};

export default Loader;
