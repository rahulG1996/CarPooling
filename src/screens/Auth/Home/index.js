import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthHeader, CustomHeadingTabBar} from '../../../components';
import {Styles} from '../../../utils/style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Home = () => {
  const [state, setState] = useState({
    headingTabData: [
      {title: 'Travel', isActive: true},
      {title: 'Track', isActive: false},
      {title: 'Message', isActive: false},
    ],

    activeTab: 'Travel',
  });

  const hnadleTabBar = value => {
    let headingTabData = state.headingTabData.map(item => {
      if (item.title === value) {
        return {...item, isActive: true};
      } else {
        return {...item, isActive: false};
      }
    });
    setState({...state, headingTabData, activeTab: value});
  };

  return (
    <View style={Styles.container}>
      <AuthHeader />
      <View style={{flex: 1}}>
        <CustomHeadingTabBar
          data={state.headingTabData}
          hnadleTabBar={hnadleTabBar}
        />
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled"></KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Home;
