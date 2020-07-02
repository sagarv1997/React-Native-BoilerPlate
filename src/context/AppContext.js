import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useColorScheme} from 'react-native';

import HomeScreen from '../../HomeScreen';
import {switchTheme} from '../store/actions/actions';

const AppContext = (props) => {
  const osTheme = useColorScheme();

  useEffect(() => {
    props.switchTheme(osTheme);
  }, []);

  return <HomeScreen />;
};

const mapStateToProps = (state) => ({
  theme: state.themeReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  switchTheme: (theme) => dispatch(switchTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContext);
