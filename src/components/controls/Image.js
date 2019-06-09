import React from "react";
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";

import { sizes } from "../../theme";

const Image = props => {
  const {
    file,
    uri,
    headers,
    priority,
    cache,
    resizeMode,
    style,
    onLoadStart,
    onProgress,
    onLoad,
    onError,
    onLoadEnd,
    children,
    size,
    ...otherProps
  } = props;

  const _resizeMode = FastImage.resizeMode[resizeMode];
  const _cache = FastImage.cacheControl[cache];
  const _priority = FastImage.priority[priority];

  const _source = file ? file : {};
  if (_priority && !file) _source.priority = _priority;
  if (uri && !file) _source.uri = uri;
  if (headers && !file) _source.headers = headers;

  const newSizeStyle = {};
  if (size) {
    newSizeStyle.height = sizes.em(size);
    newSizeStyle.width = sizes.em(size);
  }
  const newStyle = [newSizeStyle, style];

  return (
    <FastImage
      source={_source}
      cache={_cache}
      resizeMode={_resizeMode}
      style={newStyle}
      onLoadStart={onLoadStart}
      onProgress={onProgress}
      onLoad={onLoad}
      onError={onError}
      onLoadEnd={onLoadEnd}
      {...otherProps}
    >
      {children}
    </FastImage>
  );
};

Image.propTypes = {
  file: PropTypes.any,
  uri: PropTypes.string,
  headers: PropTypes.any,
  priority: PropTypes.string,
  cache: PropTypes.string,
  resizeMode: PropTypes.string,
  style: PropTypes.any,
  onLoadStart: PropTypes.func,
  onProgress: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  onLoadEnd: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.number
};
Image.defaultProps = {
  priority: "normal",
  cache: "immutable",
  resizeMode: "cover"
};

export default Image;
