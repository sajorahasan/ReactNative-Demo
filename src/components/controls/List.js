import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

const List = props => {
  const { showScroll, keyExtractor, ...otherProps } = props;

  return (
    <FlatList
      showsHorizontalScrollIndicator={showScroll}
      showsVerticalScrollIndicator={showScroll}
      keyExtractor={keyExtractor}
      {...otherProps}
    />
  );
};

List.propTypes = {
  showScroll: PropTypes.bool,
  keyExtractor: PropTypes.func
};
List.defaultProps = {
  showScroll: false,
  keyExtractor: (item, index) => index.toString()
};

export default List;
