//Global Libraries
import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

//Local Libraries
import strings from "@language";

//Components
import { Text } from "../../../components/controls";

//Styling
import { bs, colors } from "../../../theme";

class NoData extends Component {
  render() {
    const { text, color } = this.props;

    return (
      <View style={styles.view}>
        <Text size={16} color={color}>
          {text}
        </Text>
      </View>
    );
  }
}

const styles = {
  view: {
    ...bs.full_width,
    ...bs.p_2x,
    ...bs.center
  }
};

NoData.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};

NoData.defaultProps = {
  text: strings.noRecordsFound,
  color: colors.placeholder
};

export default NoData;
