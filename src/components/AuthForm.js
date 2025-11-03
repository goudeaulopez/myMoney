import {useState,useContext} from "react"
import { StyleSheet,Text, Button,TextInput,View, Keyboard } from 'react-native';
import Spacer from './Spacer';
import {Context as AuthContext } from "../context/AuthContext" 



const AuthForm = ({ headerText, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {clearErrorMessage,state,myErrorsEmail,myErrorsPassword} = useContext(AuthContext)
  
  

  const handlesubmit = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isValidPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)

     if(!isValidEmail && !isValidPassword){
        myErrorsEmail('Email required')
     const test = !password ?'Password required':'Password contain at least uppercase and number'
        myErrorsPassword(test)
     }
     else if(!isValidEmail && isValidPassword){
        myErrorsEmail('Email required')
        myErrorsPassword('')
     }
      else if(isValidEmail && !isValidPassword){
        myErrorsEmail('')
        const test = !password ?'Password required':'Password contain at least uppercase and number'
        myErrorsPassword(test)
     }
      else{
      onSubmit({ email, password })
    }
    
    }
   
  return (
    <View>
      <Spacer>
        <Text style={styles.text}>{headerText}</Text>
      </Spacer>
      <Text style={{paddingLeft:"10%",color:"red"}}>{state.errorMessage}</Text>
      <TextInput
        style={[styles.textinput,{borderColor:state.errorMessageEmail?"red":state.errorMessage?'red':"gray"}]}
        label="Email"
        value={email}
        onChangeText={email=>setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter Email"
        onFocus={()=>{
           clearErrorMessage();
          setEmail('')
         }}
      /> 
      <Text style={{paddingLeft:"10%",color:"red"}}>{state.errorMessageEmail}</Text>
      <Spacer />
      <TextInput
        style={[styles.textinput,{borderColor:state.errorMessagePassword?"red":state.errorMessage?'red':"gray"}]}
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={password=> setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
         placeholder="Enter Password"
         onFocus={()=>{
           clearErrorMessage();
           setPassword('')
         }}
      />
      <Text style={{paddingLeft:"10%",color:'red'}}>{state.errorMessagePassword}</Text>
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={handlesubmit}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize:32,
    textAlign:"center"
  },
  textinput:{
    borderWidth:1,
    //borderColor:'gray',
    width:"80%",
    fontSize:20,
    padding:4,
    alignSelf:"center"
  }

});

export default AuthForm;
