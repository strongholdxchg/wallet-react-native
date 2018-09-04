import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Spinner } from './Spinner';
import { HeaderButton } from './HeaderButton';
import context from './context';

const _FullScreenForm = props => {
  const {
    viewStyleContainer,
    viewStyleHeader,
    viewStyleContent,
    viewStyleFooter,
    iconStyleHeaderLeft,
    buttonStyleActionRight,
    textStyleAction,
  } = styles;

  const {
    iconHeaderLeft,
    onPressHeaderLeft,
    textHeaderRight,
    onPressHeaderRight,
    textFooterLeft,
    onPressFooterLeft,
    textFooterRight,
    onPressFooterRight,
    textHeaderLeft,
    loading,
    color,
    colors,
  } = props;

  return (
    <View
      style={[
        viewStyleContainer,
        { backgroundColor: _backgroundColor(colors, color) },
      ]}>
      {loading ? (
        <Spinner size="large" />
      ) : (
        <View style={{ flex: 1 }}>
          {iconHeaderLeft || textHeaderRight || textHeaderLeft ? (
            <View style={viewStyleHeader}>
              {iconHeaderLeft ? (
                <HeaderButton
                  icon={iconHeaderLeft}
                  onPress={onPressHeaderLeft}
                  color={colors[color + 'Contrast']}
                />
              ) : textHeaderLeft ? (
                <TouchableOpacity onPress={onPressHeaderLeft}>
                  <Text
                    style={[
                      textStyleAction,
                      { color: colors[color + 'Contrast'] },
                    ]}>
                    {textHeaderLeft}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View />
              )}
              {textHeaderRight ? (
                <TouchableOpacity onPress={onPressHeaderRight}>
                  <Text
                    style={[
                      textStyleAction,
                      { color: colors[color + 'Contrast'] },
                    ]}>
                    {textHeaderRight}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View />
              )}
            </View>
          ) : null}
          <View style={viewStyleContent}>{props.children}</View>
          {textFooterRight || textFooterLeft ? (
            <View style={viewStyleFooter}>
              {textFooterLeft ? (
                <TouchableOpacity onPress={onPressFooterLeft}>
                  <Text
                    style={[
                      textStyleAction,
                      { color: colors[color + 'Contrast'] },
                    ]}>
                    {textFooterLeft}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View />
              )}
              {textFooterRight ? (
                <TouchableOpacity onPress={onPressFooterRight}>
                  <Text
                    style={[
                      textStyleAction,
                      { color: colors[color + 'Contrast'], textAlign: 'right' },
                    ]}>
                    {textFooterRight}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View />
              )}
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
};

const styles = {
  viewStyleContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  viewStyleHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    minHeight: 64,
    zIndex: 0,
    alignItems: 'center',
  },
  viewStyleContent: {
    flex: 1,
    flexDirection: 'column',
    zIndex: 1,
  },
  viewStyleFooter: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 64,
    paddingBottom: 16,
    zIndex: 0,
    alignItems: 'center',
  },
  iconStyleHeaderLeft: {
    margin: 16,
  },
  textStyleAction: {
    fontSize: 18,
    padding: 16,
    minHeight: 56,
  },
};

const FullScreenForm = context(_FullScreenForm);

export { FullScreenForm };

const _backgroundColor = (colors, color) => {
  // console.log(colors);
  return colors[color];
};
