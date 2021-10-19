// In App.js in a new project

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Touchable,
} from 'react-native';
import {
  NoAuthHeader,
  CustomHeadingTabBar,
  SectionHeader,
  CustomTextInput,
  CustomButton,
} from '../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Styles} from '../../../utils/style';
import {colors} from '../../../utils/colors';
import {CommonActions} from '@react-navigation/native';

function UpdatePassword(props) {
  const [state, setState] = useState({
    headingTabData: [{title: 'Update Password', isActive: true}],
    password: '',
    cPassword: '',
    isPasswordUpdated: false,
  });

  const renderEmailLoginForm = () => {
    return (
      <>
        <SectionHeader title="Enter New Password" />
        <CustomTextInput
          placeholder="Tap to enter password"
          onChangeText={e => setState({...state, password: e})}
          value={state.password}
          showEyes={true}
        />
        <SectionHeader title="Confirm New Password" />
        <CustomTextInput
          placeholder="Tap to enter password"
          onChangeText={e => setState({...state, cPassword: e})}
          value={state.cPassword}
          showEyes={true}
        />
      </>
    );
  };

  return (
    <View style={Styles.container}>
      <NoAuthHeader />
      <View style={Styles.container}>
        <CustomHeadingTabBar
          data={state.headingTabData}
          hnadleTabBar={() => {}}
        />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <View style={[Styles.box, {flex: 1}]}>
            {state.isPasswordUpdated ? (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Password Updated{' '}
                  </Text>
                  <View style={{paddingVertical: 20}}>
                    <Image
                      source={require('../../../assets/images/success.png')}
                    />
                  </View>

                  <Text style={styles.text}>
                    New password has been updated!
                  </Text>
                </View>
                <CustomButton
                  title="Login"
                  onPress={() => {
                    setState({...state, isPasswordUpdated: false});
                    props.navigation.navigate('Login');
                  }}
                />
              </>
            ) : (
              <>
                {renderEmailLoginForm()}
                <CustomButton
                  title="Update"
                  onPress={() => setState({...state, isPasswordUpdated: true})}
                />
              </>
            )}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

export default UpdatePassword;

const styles = StyleSheet.create({
  otpBtn: {
    backgroundColor: colors.blue,
    paddingVertical: 6,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  resendText: {
    textDecorationLine: 'underline',
    color: colors.blue,
    fontSize: 12,
  },
  sendText: {
    color: 'white',
    fontSize: 12,
  },
  sendOtpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  clickhereText: {
    textDecorationLine: 'underline',
    borderBottomColor: colors.blue,
    color: colors.blue,
    paddingBottom: 2,
    fontSize: 10,
    textAlign: 'center',
  },
  text: {
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
