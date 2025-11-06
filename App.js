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
import ResolverScreen from './src/screens/ResolverScreen';
//
import { setNavigator } from "./src/navigationRef"
// Auth with clerk
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
// auth context
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as TransactionProvider } from './src/context/TransactionContext';


const switchNavigator = createSwitchNavigator({
   Resolver:ResolverScreen,
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
        
          <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
             <AuthProvider>
               <TransactionProvider>
                <App  ref={(navigator) => {setNavigator(navigator)}} /> 
                  </TransactionProvider>
                  </AuthProvider>
                     </ClerkProvider>
  )
}


