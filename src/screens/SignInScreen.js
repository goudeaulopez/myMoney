import {useSignIn,useAuth } from '@clerk/clerk-expo';
import { useEffect,useState } from "react"
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';

const SignInScreen = ({ navigation }) => {
const { signIn, isLoaded, setActive } = useSignIn();

  const { getToken, userId} = useAuth();
   const [token, setToken] = useState(null);
  const [uid, setUid] = useState(null);

  useEffect(()=>{
    fetchAuthData();
  }, []);

   const fetchAuthData = async () => {
      try {
        if (!isLoaded) return; 

        setUid(userId);

        const jwt = await getToken();
        setToken(jwt);

        console.log("User ID:", userId);
        console.log("JWT:", jwt);

      } catch (err) {
        console.error("Error fetching auth data:", err);
      }
    };


const onSignIn = async ({email,password}) => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password: password,
      });

      if (signInAttempt.status === 'complete') {
        setActive({ session: signInAttempt.createdSessionId });

        navigation.navigate('mainFlow')

      } else {
        console.log('Sign in failed');
        setError('root', { message: 'Sign in could not be completed' });
      }
    } catch (err) {
      console.log('Sign in error: ', JSON.stringify(err, null, 2));

     
    }
  };

   return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for MyMoney"
        submitButtonText="Sign In"
        onSubmit={onSignIn}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Spacer>
          <Text style={styles.link}>
            Don't have an account? Sign Up instead
          </Text>
        </Spacer>
      </TouchableOpacity>
      <Text>{token?token:"tienes que entrar"}</Text>
      <Text>{uid?uid:"tienes que entrar"}</Text>
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
