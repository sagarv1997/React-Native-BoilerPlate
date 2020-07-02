import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {switchTheme} from './src/store/actions/actions';

const HomeScreen = (props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: props.theme.colors.background},
      ]}>
      <Text style={{color: props.theme.colors.text}}>
        React Native Boiler Plate
      </Text>
      <Button title="Light" onPress={() => props.switchTheme('light')} />
      <Button title="Dark" onPress={() => props.switchTheme('dark')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: (theme) => dispatch(switchTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
