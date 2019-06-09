import ImagePicker from "react-native-image-crop-picker";

/**
 * PROPERTIES:
 * https://github.com/ivpusic/react-native-image-crop-picker#request-object
 */
class PhotoVideoPicker {}

PhotoVideoPicker.open = (props = {}) => {
  return new Promise((resolve, reject) => {
    try {
      const param = { ...props, includeBase64: true, includeExif: true };
      ImagePicker.openPicker(param).then(image => {
        resolve(image);
      });
    } catch (err) {
      reject(err);
    }
  });
};

PhotoVideoPicker.camera = (props = {}) => {
  return new Promise((resolve, reject) => {
    try {
      const param = { ...props, includeBase64: true, includeExif: true };
      ImagePicker.openCamera(param).then(res => {
        resolve(res);
      });
    } catch (err) {
      reject(err);
    }
  });
};

PhotoVideoPicker.crop = (props = {}) => {
  return new Promise((resolve, reject) => {
    try {
      const param = { ...props, includeBase64: true, includeExif: true };
      ImagePicker.openCropper(param).then(res => {
        resolve(res);
      });
    } catch (err) {
      reject(err);
    }
  });
};

PhotoVideoPicker.clean = () => {
  return new Promise((resolve, reject) => {
    try {
      ImagePicker.clean()
        .then(() => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
};

export default PhotoVideoPicker;
