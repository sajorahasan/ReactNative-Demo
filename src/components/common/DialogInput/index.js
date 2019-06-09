//Global Libraries
import React, { Component } from "react";
import { View, Modal } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import strings from "@language";

//Components
import { Button, Text, TextInput } from "../../controls";

//Styling
import { bs, colors, sizes } from "../../../theme";

class DialogInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  ///////////////////////
  //// FUNCTIONS ////////

  // logical
  _updateValue = (field, val, callback) => {
    this.setState({ [field]: val }, callback);
  };

  //// FUNCTIONS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW ////////////
  render() {
    const {
      visible,
      title,
      placeholder,
      addText,
      onAdd,
      cancelText,
      onCancel,
      ...otherProps
    } = this.props;

    const { inputValue } = this.state;
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
                <Text bold size={20} color={colors.black}>
                  {title}
                </Text>
              </View>
              <View style={styles.message}>
                <TextInput
                  size={14}
                  color={colors.black}
                  placeholder={placeholder}
                  onChangeText={text => this._updateValue("inputValue", text)}
                  style={styles.input}
                />
              </View>
              <View style={styles.buttons}>
                <Button style={styles.button} onPress={onCancel}>
                  <Text size={16} color={colors.black}>
                    {cancelText}
                  </Text>
                </Button>
                <Button ylest={styles.button} onPress={() => onAdd(inputValue)}>
                  <Text bold size={16} color={colors.primary}>
                    {addText}
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
////// VIEW ////////////
////////////////////////

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
    ...bs.end_center
  },
  title: {
    ...bs.center_start,
    ...bs.p_1x
  },
  message: {
    ...bs.full_width,
    ...bs.pt_3x,
    ...bs.pb_6x
  },
  input: {
    ...bs.bg_white,
    ...bs.full_width,
    ...bs.ph_2x,
    ...bs.mb_2x,
    borderRadius: sizes.em(5),
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
    height: sizes.em(45)
  },
  button: {
    ...bs.ph_6x
  }
};

DialogInput.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  addText: PropTypes.string,
  onAdd: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func
};

DialogInput.defaultProps = {
  addText: strings.add,
  cancelText: strings.cancel,
  onConfirm: () => {},
  onCancel: () => {}
};

export default DialogInput;
