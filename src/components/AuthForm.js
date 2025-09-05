import {useState} from "react"
import { StyleSheet,Text, Button,TextInput,View } from 'react-native';
import Spacer from './Spacer';

const AuthForm = ({ headerText, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Spacer>
        <Text style={styles.text}>{headerText}</Text>
      </Spacer>
      <TextInput
        style={styles.textinput}
        label="Email"
        value={email}
        onChangeText={email=>setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter Email"
      />
      <Spacer />
      <TextInput
        style={styles.textinput}
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={password=> setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
         placeholder="Enter Password"
      />
      
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit( {email, password })}
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
    borderColor:'gray',
    width:"80%",
    fontSize:20,
    padding:4,
    alignSelf:"center"
  }

});

export default AuthForm;
