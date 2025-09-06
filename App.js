import { StatusBar } from 'expo-status-bar';
import {createAppContainer, createSwitchNavigator} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"

//screens
import SignInScreen from "./src/screens/SignInScreen"
import SignUpScreen from "./src/screens/SignUpScreen"
import ValidationCodeScreen from "./src/screens/ValidationCodeScreen"
import TransactionsScreens from "./src/screens/TransactionsScreens"
import ShowTransactionScreen from "./src/screens/ShowTransactionScreen"
import EditTransactionScreen from "./src/screens/EditTransactionScreen"
import CreateTransactionScreen from "./src/screens/CreateTransactionScreens"
//
import { setNavigator } from "./src/navigationRef"
// Auth with clerk
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'


const switchNavigator = createSwitchNavigator({
  loginFlow:createStackNavigator({
   SignIn:SignInScreen,
    SignUp:SignUpScreen,
    ValidationCode:ValidationCodeScreen
 }),
  mainFlow:createStackNavigator({
     Transaction:TransactionsScreens,
     CreateTransaction:CreateTransactionScreen,
     EditTransaction:EditTransactionScreen,
     ShowTransaction:ShowTransactionScreen,
     
  })

})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
        
          <ClerkProvider tokenCache={tokenCache}>
             <App  ref={(navigator) => {setNavigator(navigator)}} /> 
                 </ClerkProvider>
  )
}

/*

import { Slot } from 'expo-router'

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  )
}

import { useSignUp } from '@clerk/clerk-expo';

 const { signUp, isLoaded } = useSignUp();

   const onSignUp = async (data: SignUpFields) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });

      await signUp.prepareVerification({ strategy: 'email_code' });

      router.push('/verify');
    } catch (err) {
      
     }
  }

*/


