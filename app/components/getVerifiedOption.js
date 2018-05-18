import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Colors from './../config/colors';
import { Output } from './common';

class GetVerifiedOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: Colors.black,
    };
  }

  componentWillMount() {
    let color;
    if (this.props.status === 'PENDING') {
      color = Colors.black;
    } else if (this.props.status === 'VERIFIED') {
      color = Colors.green;
    } else if (
      this.props.status === 'INCOMPLETE' ||
      this.props.status === 'DENIED'
    ) {
      color = Colors.red;
    }

    this.setState({
      color: color,
    });
  }

  render() {
    const { label, value } = this.props;
    return (
      <View style={styles.options}>
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.goTo(this.props.gotoAddress, this.props.title)
          }>
          <View style={styles.optionsElement}>
            <View style={{ flex: 1 }}>
              <Output label={label} value={value} />
            </View>
            <View style={[styles.submit, { borderColor: this.state.color }]}>
              <Text
                style={[
                  styles.optionsText,
                  { fontSize: 13, color: this.state.color },
                ]}>
                {this.props.status}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  options: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    // height: 70,
  },
  optionsElement: {
    // backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsText: {
    fontSize: 8,
    color: Colors.black,
  },
  submit: {
    // padding: 4,
    // height: 24,
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default GetVerifiedOption;
