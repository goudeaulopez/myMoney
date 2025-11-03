import { useContext } from "react";
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import { useSignUp } from '@clerk/clerk-expo';
import {Context as AuthContext} from "../context/AuthContext"
import { NavigationEvents} from "react-navigation"

const SignUpScreen = ({ navigation }) => {
  const { signUp, isLoaded } = useSignUp();
  const {myErrors,clearErrorMessage,myErrorsEmail} = useContext(AuthContext)

  const onSignUp = async ({email,password}) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: email,
        password
      });
      await signUp.prepareVerification({ strategy: 'email_code' });

      navigation.navigate('ValidationCode')
    } catch (err) {
       myErrors('Email already taken')
      //myErrors(err.message)
    }
  };
  //console.log(state);  <Text style={{color:"red"}}>{state.errorMessage}</Text>
  
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/> 
      
      <AuthForm
        headerText="Sign Up"
        submitButtonText="Sign Up"
        onSubmit={onSignUp}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
      
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  link: {
    color: 'blue',
    textAlign:"center"
  },
});

export default SignUpScreen;
