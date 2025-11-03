import { useContext } from "react";
import {View,Text,StyleSheet} from "react-native"
import { SignOutButton } from "../components/SignOutButton";
import {Context as AuthContext} from "../context/AuthContext"

const TransactionsScreens = ({ navigation }) => {
   const {state} = useContext(AuthContext)
  
console.log(state);
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

