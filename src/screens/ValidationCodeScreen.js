import {useState,useContext} from "react"
import { useSignUp, useAuth } from '@clerk/clerk-expo';
import {View,Text,StyleSheet,TextInput,Button} from "react-native"
import Spacer from "../components/Spacer"
import * as SecureStore from "expo-secure-store"
import { Context as AuthContext} from "../context/AuthContext"
import { NavigationEvents} from "react-navigation"

const ValidationCodeScreen = ({ navigation }) => {
    const [code,setCode] = useState()
     const { signUp, isLoaded, setActive } = useSignUp();
     const {getToken} = useAuth()
      const {state,myErrors,signInApp,clearErrorMessage} = useContext(AuthContext)




const onVerify = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({code});

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId });
        const jwt = await getToken()
        await SecureStore.setItemAsync('token',jwt)
        signInApp()
      } else {
        console.log('Verification failed');
      }
    } catch (err) {
      if(!code){
        myErrors('No verification code added')
        console.log('No verification code added');
      }else{
       console.log('No verification code valid');
       myErrors('No verification code valid')
      }
       
       // myErrors(err.message)
    }
  };

   return(
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage}/> 
         <Text>ValidationCodeScreen</Text>
            <Text style={{color:"red",textAlign:"center"}}>{state.errorMessage}</Text>
            <Spacer>
                <TextInput  value={code} onChangeText={code=>setCode(code)} onFocus={clearErrorMessage} style={{borderWidth:1,borderColor:state.errorMessage?'red':'gray'}}/>
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

