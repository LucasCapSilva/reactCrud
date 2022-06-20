import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as LocalAuthentication from 'expo-local-authentication';
import { styles } from '../home/HomeStyle';

const LoginScreen = () => {

  async function login(){
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if(results.success) {
        Alert.alert('alert', 'login success')
      } else {
        Alert.alert('alert',  JSON.stringify(results))
      }
      // LocalAuthentication.cancelAuthenticate();
    }catch(err) {
      Alert.alert('alert', 'login fail: ' + err)
      console.log(err);
    }
    
  }
  return (
    <View style={styles.container}>
    <Button title="login" onPress={login.bind(this)}></Button>
  </View>
  );
}

export default LoginScreen;