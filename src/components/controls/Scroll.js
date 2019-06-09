import React from "react";
import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { bs } from "../../theme";
import { extendStyle } from "./utils";
import { getTheme } from "./theme";

const Scroll = props => {
  const {
    notAware,
    theme,
    center,
    end,
    style,
    contentStyle,
    children,
    showScroll,
    onRef,
    ...otherProps
  } = props;

  const styles = getTheme(theme);

  const newStyle = [styles.style("scroll")];
  extendStyle(newStyle, style);

  const newContentStyle = [styles.style("scroll.content")];
  if (center) newContentStyle.push(bs.center);
  if (end) newContentStyle.push(bs.end_center);
  extendStyle(newContentStyle, contentStyle);

  if (notAware) {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={showScroll}
        showsVerticalScrollIndicator={showScroll}
        ref={onRef}
        {...otherProps}
      >
        {children}
      </ScrollView>
    );
  }
  return (
    <KeyboardAwareScrollView
      style={newStyle}
      showsHorizontalScrollIndicator={showScroll}
      showsVerticalScrollIndicator={showScroll}
      contentContainerStyle={styles.style("scroll.container")}
      {...otherProps}
    >
      <View style={newContentStyle}>{children}</View>
    </KeyboardAwareScrollView>
  );
};

Scroll.propTypes = {
  onRef: PropTypes.any,
  notAware: PropTypes.bool,
  theme: PropTypes.any,
  style: PropTypes.any,
  center: PropTypes.bool,
  showScroll: PropTypes.bool,
  end: PropTypes.bool,
  contentStyle: PropTypes.any,
  children: PropTypes.node.isRequired
};
Scroll.defaultProps = {
  aware: false,
  showScroll: false
};

export default Scroll;
