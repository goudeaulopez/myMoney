
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import { useSignUp } from '@clerk/clerk-expo';

const SignUpScreen = ({ navigation }) => {
  const { signUp, isLoaded } = useSignUp();

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
      console.log('Sign up error: ', err);
     
    }
  };
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for MyMoney"
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
