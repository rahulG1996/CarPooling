import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OTPTextView from 'react-native-otp-textinput';
import Icon1 from 'react-native-vector-icons/Entypo';
import {colors} from '../../utils/colors';

const OtpModal = props => {
  const [otpData, setOtp] = useState('');
  const [otpFromInupt, setOtpInput] = useState('');
  const [otpLength, setOtpLength] = useState(2);

  const handleOtp = otp => {
    setOtpInput(otp);
  };

  useEffect(() => {
    console.warn('proprs', props);
  });

  return (
    <View>
      <Modal
        transparent
        deviceWidth={wp('100%')}
        deviceHeight={hp('100%')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: hp('0%'),
        }}
        onBackButtonPress={props.handleModal}
        isVisible={props.showOtpModal}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0, 0.6)',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: wp('90'),
              height: hp('40%'),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <View style={styles.container}>
              <View style={{width: '100%', alignItems: 'flex-end'}}>
                <TouchableOpacity
                  style={{padding: 10}}
                  onPress={props.handleModal}>
                  <Icon1 name="cross" color="black" size={30} />
                </TouchableOpacity>
              </View>
              <View style={{marginBottom: hp('2%')}}>
                <Text style={{fontSize: hp('2.5%')}}>Enter the OTP below</Text>
              </View>
              <OTPTextView
                handleTextChange={e => handleOtp(e)}
                textInputStyle={styles.roundedTextInput}
                tintColor={colors.blue}
                inputCount={4}
              />

              <View style={{paddingVertical: hp('2%')}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Text>Didn't recieve ? </Text>
                  <Text
                    style={{
                      color: colors.blue,
                      textDecorationLine: 'underline',
                    }}>
                    Resend
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OtpModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 2,
  },
});
