import {useState} from "react"
import { useSignUp } from '@clerk/clerk-expo';
import {View,Text,StyleSheet,TextInput,Button,ActivityIndicator} from "react-native"
import Spacer from "../components/Spacer"

const ValidationCodeScreen = ({ navigation }) => {
    const [code,setCode] = useState()
     const { signUp, isLoaded, setActive } = useSignUp();

const onVerify = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({code});

      if (signUpAttempt.status === 'complete') {
        setActive({ session: signUpAttempt.createdSessionId });
        navigation.navigate('mainFlow')
      } else {
        console.log('Verification failed');
      }
    } catch (err) {
        console.log(err);
    }
  };

   return(
        <View style={styles.container}>
            <Text>ValidationCodeScreen</Text>
            <Spacer>
                <TextInput value={code} onChangeText={code=>setCode(code)}/>
                   <Button title="Verify" onPress={()=>onVerify()}/>
            </Spacer>
        </View>
    )
}
ValidationCodeScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default ValidationCodeScreen

