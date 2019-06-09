//Global Libraries
import React from "react";
import { View, Modal } from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";

//Local Libraries
import apis from "@apis";
import strings from "@language";

//Components
import { Container, Loader, NoData } from "../../common";
import { Button, Text, Icon, List, TextInput } from "../../controls";

//Styling
import { bs, sizes, colors } from "../../../theme";

class CountryPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      countryCode: "",
      countryList: [],
      filterList: [],
      searchText: ""
    };
  }

  ///////////////////////
  //// FUNCTIONS ////////

  // react
  componentDidMount() {
    this._prepareData();
  }

  // logical
  _updateValue = (field, val, callback) => {
    this.setState({ [field]: val }, callback);
  };

  _prepareData = () => {
    const data = apis.getCountries();
    this._updateValue("countryList", data);
    this._updateValue("loading", false);
  };

  _onSearchText = text => {
    this._updateValue("searchText", text);
    const newList = _.filter(this.state.countryList, val => {
      return val.name.toLowerCase().includes(text.toLowerCase());
    });
    this._updateValue("filterList", newList);
  };

  _onSelectCountry = code => {
    this._updateValue("countryCode", code);
    this.props.onSelect(code);
    this._updateValue("searchText", "");
  };

  _onClose = () => {
    this._updateValue("searchText", "");
    this.props.onClose();
  };

  //// FUNCTIONS ////////
  ///////////////////////

  ////////////////////////
  ////// VIEW ////////////

  // Render Content
  renderContent() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {}}
        >
          <View style={styles.content}>
            {this.renderClose()}
            {loading ? (
              <Loader />
            ) : (
              <React.Fragment>
                {this.renderSearch()}
                {this.renderList()}
              </React.Fragment>
            )}
          </View>
        </Modal>
      </View>
    );
  }

  // Render Close Button
  renderClose = () => {
    return (
      <Button onPress={this._onClose} style={styles.closeBtn}>
        <Icon name="io md-close" size={24} color={colors.primary} />
      </Button>
    );
  };

  // Render Search Box
  renderSearch = () => {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          search
          placeholder={strings.searchCountries}
          autoCapsOff
          size={16}
          color={colors.black}
          style={styles.search}
          onChangeText={val => this._onSearchText(val)}
        />
      </View>
    );
  };

  // Render All List
  renderList = () => {
    const { filterList, countryList, searchText } = this.state;
    const DATA =
      searchText.length > 0
        ? filterList.length > 0
          ? filterList
          : []
        : countryList;
    return (
      <List
        data={DATA}
        keyExtractor={(item, index) => String(item.code + "_" + index)}
        ListEmptyComponent={<NoData />}
        renderItem={this.renderItem}
      />
    );
  };

  // Render Each Country
  renderItem = ({ item }) => {
    return (
      <Button
        style={styles.countryContainer}
        onPress={() => this._onSelectCountry(item.dial_code)}
      >
        <Text size={18}>{item.flag}</Text>
        <Text size={14} color={colors.black} style={styles.countryCode}>
          {"+" + item.dial_code}
        </Text>
        <Text size={14} color={colors.black} style={styles.countryName}>
          {item.name}
        </Text>
        {item.dial_code === this.state.countryCode ? (
          <Icon name="io md-checkmark" size={20} color={colors.primary} />
        ) : null}
      </Button>
    );
  };

  // Render View
  render() {
    return <Container>{this.renderContent()}</Container>;
  }
  ////// VIEW ////////////
  ////////////////////////
}

const styles = {
  container: {
    ...bs.flex_row
  },
  content: {
    ...bs.ph_4x
  },
  closeBtn: {
    ...bs.center_end,
    ...bs.mv_2x
  },
  searchContainer: {
    ...bs.pv_2x,
    ...bs.full_width
  },
  search: {
    ...bs.full_width,
    ...bs.ph_2x,
    ...bs.mb_2x,
    borderRadius: sizes.em(5),
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
    height: sizes.em(45)
  },
  countryContainer: {
    ...bs.flex_row,
    ...bs.ph_2x,
    ...bs.mb_2x,
    ...bs.center,
    borderRadius: sizes.em(5),
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
    height: sizes.em(45)
  },
  countryCode: {
    flex: 0.2,
    ...bs.ml_2x
  },
  countryName: {
    ...bs.flex,
    ...bs.ml_4x
  }
};

CountryPicker.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onSelect: PropTypes.func
};

export default CountryPicker;
