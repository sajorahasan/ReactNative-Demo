//Global Libraries
import React, { Component } from "react";
import { View, Modal } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import strings from "@language";

//Components
import { Button, Text } from "../../controls";

//Styling
import { bs, colors, sizes } from "../../../theme";

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ////////////////////////
  ////// VIEW ////////////

  render() {
    const {
      visible,
      title,
      message,
      messageCenter,
      confirmText,
      onConfirm,
      secondaryText,
      onSecondary,
      cancelText,
      onCancel,
      ...otherProps
    } = this.props;

    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => {}}
          {...otherProps}
        >
          <View style={styles.modalContainer}>
            <View style={styles.content}>
              <View style={styles.title}>
                <Text bold size={24} color={colors.black}>
                  {title}
                </Text>
              </View>
              <View style={styles.message}>
                <Text
                  center={messageCenter ? true : false}
                  size={18}
                  color={colors.black}
                >
                  {message}
                </Text>
              </View>
              <View style={styles.buttons}>
                <View style={styles.twoButtons}>
                  <Button style={styles.buttonConfirm} onPress={onConfirm}>
                    <Text size={16}>{confirmText}</Text>
                  </Button>
                  {secondaryText ? (
                    <Button
                      style={styles.buttonSecondary}
                      onPress={onSecondary}
                    >
                      <Text
                        bold
                        size={16}
                        color={colors.black}
                        style={bs.flex_wrap}
                      >
                        {secondaryText}
                      </Text>
                    </Button>
                  ) : null}
                </View>
                <Button style={styles.buttonCancel} onPress={onCancel}>
                  <Text bold size={16} color={colors.black}>
                    {cancelText}
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  ////// VIEW ////////////
  ////////////////////////
}

const styles = {
  container: {
    ...bs.flex
  },
  modalContainer: {
    ...bs.flex,
    ...bs.center,
    ...bs.bg_modal
  },
  content: {
    width: "80%",
    ...bs.bg_white,
    ...bs.m_4x,
    ...bs.ph_4x,
    ...bs.pv_4x,
    borderRadius: sizes.em(10)
  },
  buttons: {
    ...bs.flex_row,
    ...bs.flex_wrap,
    ...bs.around_center
  },
  twoButtons: {
    ...bs.flex_row,
    ...bs.around_center
  },
  title: {
    ...bs.center,
    ...bs.ph_6x,
    ...bs.pt_3x
  },
  message: {
    ...bs.center,
    ...bs.ph_6x,
    ...bs.pt_3x,
    ...bs.pb_6x
  },
  buttonConfirm: {
    ...bs.bg_primary,
    ...bs.center,
    ...bs.ph_3x,
    ...bs.pv_3x,
    ...bs.m_2x,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: sizes.em(10)
  },
  buttonSecondary: {
    ...bs.bg_white,
    ...bs.center,
    ...bs.ph_3x,
    ...bs.pv_3x,
    ...bs.m_2x,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: sizes.em(10)
  },
  buttonCancel: {
    ...bs.bg_white,
    ...bs.center,
    ...bs.pv_3x,
    ...bs.m_2x
  }
};

Confirm.propTypes = {
  visible: PropTypes.bool,
  confirmText: PropTypes.string,
  onConfirm: PropTypes.func,
  secondaryText: PropTypes.string,
  onSecondary: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  messageCenter: PropTypes.bool
};

Confirm.defaultProps = {
  title: strings.confirm,
  message: strings.areYouSure,
  confirmText: strings.confirm,
  cancelText: strings.cancel,
  onConfirm: () => {},
  onCancel: () => {}
};

export default Confirm;
