// In App.js in a new project

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
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
function Login(props) {
  const [state, setState] = useState({
    headingTabData: [
      {title: 'Log In', isActive: true},
      {title: 'Register', isActive: false},
    ],
    mobile: '',
    activeTab: 'Log In',
    isEmailLogin: false,
    email: '',
    password: '',
    otp: '',
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

  const renderMobileLoginForm = () => {
    return (
      <>
        <SectionHeader title="Enter your mobile number" />
        <CustomTextInput
          placeholder="Mobile Number"
          onChangeText={e => setState({...state, mobile: e})}
          value={state.mobile}
        />
        <View style={styles.sendOtpContainer}>
          <TouchableOpacity style={styles.otpBtn}>
            <Text style={styles.sendText}>Send OTP</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity> */}
        </View>
        <SectionHeader title="Enter OTP" />
        <CustomTextInput
          placeholder="Enter OTP"
          onChangeText={e => setState({...state, otp: e})}
          value={state.otp}
        />
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => setState({...state, isEmailLogin: true})}>
          <Text style={styles.clickhereText}>
            Click here to login with Email ID and Password
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderEmailLoginForm = () => {
    return (
      <>
        <SectionHeader title="Email" />
        <CustomTextInput
          placeholder="Email"
          onChangeText={e => setState({...state, email: e})}
          value={state.email}
        />
        <SectionHeader title="Password" />
        <CustomTextInput
          placeholder="Password"
          onChangeText={e => setState({...state, password: e})}
          value={state.password}
          showEyes={true}
        />
        <View style={styles.sendOtpContainer}>
          <TouchableOpacity>
            <Text style={{color: colors.blue}}>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.resendText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderSocialIcon = type => {
    if (type === 'facebook') {
      return (
        <TouchableOpacity>
          <Image source={require(`../../../assets/images/facebook.png`)} />
        </TouchableOpacity>
      );
    } else if (type === 'twitter') {
      return (
        <TouchableOpacity style={{marginHorizontal: 10}}>
          <Image source={require(`../../../assets/images/twitter.png`)} />
        </TouchableOpacity>
      );
    } else
      return (
        <TouchableOpacity>
          <Image source={require(`../../../assets/images/google.png`)} />
        </TouchableOpacity>
      );
  };

  return (
    <View style={{flex: 1}}>
      <NoAuthHeader />
      <View style={{flex: 1}}>
        <CustomHeadingTabBar
          data={state.headingTabData}
          hnadleTabBar={hnadleTabBar}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={{margin: 20}}
          keyboardShouldPersistTaps="handled">
          <View style={Styles.box}>
            {state.activeTab === 'Log In'
              ? !state.isEmailLogin
                ? renderMobileLoginForm()
                : renderEmailLoginForm()
              : null}
            <CustomButton title="Log In" />
            <Text style={{textAlign: 'center', fontSize: 12}}>
              or Login With
            </Text>
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <View style={{flexDirection: 'row'}}>
                {renderSocialIcon('facebook')}
                {renderSocialIcon('twitter')}
                {renderSocialIcon('google')}
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

export default Login;

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
});
