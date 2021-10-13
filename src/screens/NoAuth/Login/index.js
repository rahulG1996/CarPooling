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
    userType: [
      {type: "I'm a passanger", isSelected: false},
      {type: "I'm a Driver", isSelected: false},
      {type: 'Other', isSelected: false},
    ],
    gender: [
      {type: 'Male', isSelected: false},
      {type: 'Female', isSelected: false},
    ],
    userTypeSelected: "I'm a passanger",
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
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => setState({...state, isEmailLogin: false})}>
          <Text style={styles.clickhereText}>
            Click here to login with Mobile
          </Text>
        </TouchableOpacity>
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

  const selectUserType = item => {
    let userType = state.userType.map(data => {
      if (data.type === item.type) {
        return {...data, isSelected: true};
      } else {
        return {...data, isSelected: false};
      }
    });
    setState({...state, userType});
  };

  const selectGenderType = item => {
    let gender = state.gender.map(data => {
      if (data.type === item.type) {
        return {...data, isSelected: true};
      } else {
        return {...data, isSelected: false};
      }
    });
    setState({...state, gender});
  };

  const renderSignupForm = () => {
    return (
      <>
        <SectionHeader title="Choose a user" />
        <View style={styles.container}>
          {state.userType.map(item => {
            return (
              <TouchableOpacity
                onPress={() => selectUserType(item)}
                style={[styles.userTypeConatiner]}>
                <View
                  style={[
                    styles.radioBtn,
                    {backgroundColor: item.isSelected ? colors.blue : 'white'},
                  ]}
                />
                <Text>{item.type}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <SectionHeader title="First Name" showAstric />
        <CustomTextInput
          placeholder=""
          onChangeText={e => setState({...state, fName: e})}
          value={state.fName}
        />
        <SectionHeader title="Last Name" />
        <CustomTextInput
          placeholder=""
          onChangeText={e => setState({...state, lName: e})}
          value={state.lName}
        />
        <SectionHeader title="Choose a user" showAstric />
        <View style={styles.container}>
          {state.gender.map(item => {
            return (
              <TouchableOpacity
                onPress={() => selectGenderType(item)}
                style={[styles.userTypeConatiner]}>
                <View
                  style={[
                    styles.radioBtn,
                    {backgroundColor: item.isSelected ? colors.blue : 'white'},
                  ]}
                />
                <Text>{item.type}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <SectionHeader title="Email Address" showAstric />
        <CustomTextInput
          placeholder="Email"
          onChangeText={e => setState({...state, email: e})}
          value={state.email}
        />
        <SectionHeader title="Password" showAstric />
        <CustomTextInput
          placeholder=""
          onChangeText={e => setState({...state, password: e})}
          value={state.password}
          showEyes={true}
        />
        <SectionHeader title="Confirm Password" showAstric />
        <CustomTextInput
          placeholder=""
          onChangeText={e => setState({...state, cPassword: e})}
          value={state.cPassword}
          showEyes={true}
        />
      </>
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
              : renderSignupForm()}
            {state.activeTab === 'Log In' ? (
              <>
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
              </>
            ) : (
              <CustomButton title="Register" />
            )}
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
  radioBtn: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  userTypeConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginVertical: 10,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
