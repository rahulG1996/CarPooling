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

const SuccessRegistrationPage = props => {
  const [state, setState] = useState({
    headingTabData: [{title: 'Registration', isActive: true}],
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <NoAuthHeader />
      <View style={{flex: 1}}>
        <CustomHeadingTabBar
          data={state.headingTabData}
          hnadleTabBar={() => {}}
        />
        <KeyboardAwareScrollView contentContainerStyle={{margin: 20, flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Registration Completed
            </Text>
            <View style={{paddingVertical: 20}}>
              <Image source={require('../../../assets/images/success.png')} />
            </View>
            <Text style={[styles.text, {fontSize: 20, paddingBottom: 20}]}>
              Account has been created !
            </Text>
            <Text style={styles.text}>
              A confirmation link has been sent to your email id, pls click the
              link to verify
            </Text>
          </View>
          <CustomButton
            title="Done"
            onPress={() => props.navigation.navigate('Login')}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default SuccessRegistrationPage;

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
