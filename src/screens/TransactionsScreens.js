import { useEffect,useState } from "react"
import {View,Text,StyleSheet} from "react-native"
import { useAuth } from "@clerk/clerk-expo";
import { SignOutButton } from "../components/SignOutButton";

const TransactionsScreens = ({ navigation }) => {


  useEffect( ()=>{
 
    
  }, []);


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

