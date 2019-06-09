let Datastore = require("react-native-local-mongodb");
let _local = new Datastore({
  filename: "ReactNativeDemo",
  autoload: true
});
export default _local;
