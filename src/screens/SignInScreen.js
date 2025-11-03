import { useSignIn, useAuth} from '@clerk/clerk-expo';
import {useContext} from "react"
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import * as SecureStore from "expo-secure-store"
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from "../context/AuthContext"
import { NavigationEvents} from "react-navigation"


const SignInScreen = ({ navigation }) => {
const { signIn, isLoaded, setActive } = useSignIn();
const {getToken} = useAuth()
const {signInApp,myErrors,clearErrorMessage} = useContext(AuthContext)

const onSignIn = async ({email,password}) => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password: password,
      });

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });

        const jwt = await getToken();
        await SecureStore.setItemAsync('token',jwt)
         signInApp()
      } else {
        console.log('Sign in failed');
        setError('root', { message: 'Sign in could not be completed' });
      }
    } catch (err) {
       myErrors('No account found it, check email and password')
    
    }
  };
   
   return (
    <View style={styles.container}>
       <NavigationEvents onWillFocus={clearErrorMessage}/> 
      <AuthForm
        headerText="Sign In"
        submitButtonText="Sign In"
        onSubmit={onSignIn}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Spacer>
          <Text style={styles.link}>
            Don't have an account? Sign Up instead!!
          </Text>
        </Spacer>
      </TouchableOpacity>
      
    
    </View>
  );
};

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;
