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
function ForgotPassword(props) {
  const [state, setState] = useState({
    headingTabData: [{title: 'Forgot Password', isActive: true}],
    mobile: '',
    otp: '',
  });

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
      </>
    );
  };

  return (
    <View style={Styles.container}>
      <NoAuthHeader />
      <View style={{flex: 1}}>
        <CustomHeadingTabBar data={state.headingTabData} />
        <KeyboardAwareScrollView>
          <View style={Styles.box}>
            {renderMobileLoginForm()}
            <CustomButton
              title="Next"
              onPress={() => props.navigation.navigate('UpdatePassword')}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

export default ForgotPassword;

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
