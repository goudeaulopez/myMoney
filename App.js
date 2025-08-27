import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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


const switchNavigator = createSwitchNavigator({
  loginFlow:createStackNavigator({
    SignIn:SignInScreen,
    SignUp:SignUpScreen,
    ValidationCode:ValidationCodeScreen

  },{
    defaultNavigationOptions:{headerShown:false}
  }),
  mainFlow:createStackNavigator({
     CreateTransaction:CreateTransactionScreen,
     EditTransaction:EditTransactionScreen,
     ShowTransaction:ShowTransactionScreen,
     Transaction:TransactionsScreens
  },{
    defaultNavigationOptions:{headerShown:false}
  })

})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
  
     <App  
      ref={(navigator) => {
          setNavigator(navigator);
        }}
     />
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


