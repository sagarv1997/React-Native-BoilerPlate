import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

import {ThemeContext} from './src/context/ThemeContext';
import {LocalizationContext} from './src/context/LocalizationContext';
import {themedColors} from './src/style/theme';
import {increment, decrement} from './src/store/actions/actions';

const HomeScreen = (props) => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const {translations, setAppLanguage} = useContext(LocalizationContext);
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text style={{color: theme.colors.text}}>{translations.common.name}</Text>
      <Button title="Light" onPress={() => changeTheme(themedColors.light)} />
      <Button title="Dark" onPress={() => changeTheme(themedColors.dark)} />
      <Button title="English" onPress={() => setAppLanguage('en')} />
      <Button title="Hindi" onPress={() => setAppLanguage('hi')} />
      <Text>Counter value from Redux Store: {props.counter}</Text>
      <Button
        title="Increment Counter"
        onPress={() => props.onIncrementCounter(1)}
      />
      <Button
        title="Decrement Counter"
        onPress={() => props.onDecrementCounter(1)}
      />
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

const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: (number) => dispatch(increment(number)),
    onDecrementCounter: (number) => dispatch(decrement(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
