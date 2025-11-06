import { useContext ,useEffect} from "react";
import {View,Text,StyleSheet} from "react-native"
import { SignOutButton } from "../components/SignOutButton";
//import {NavigationEvents} from "react-navigation"
import {Context as TransactionContext} from "../context/TransactionContext"

const TransactionsScreens = ({ navigation }) => {
   const {state,fetchTransaction } = useContext(TransactionContext)

   useEffect(()=>{
      fetchTransaction()
   },[])
console.log(JSON.stringify(state.transactions,null,2));

  return(
      
        
         <View style={styles.container}>
            <Text>TransactionsScreens</Text>
            <SignOutButton navigation={navigation}/>
          </View>
          
    )
}
TransactionsScreens.navigationOptions = () => {
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
export default TransactionsScreens

