import {View,Text,StyleSheet,Button} from "react-native"
import { SignOutButton } from "../components/SignOutButton";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-expo";


const TransactionsScreens = ({ navigation }) => {
  const { getToken, userId } = useAuth();
  const [token, setToken] = useState(null);

  const fetchAuthData = async () => {
      try {
        // SIN plantilla (Session Token):
        const jwt = await getToken();

        // CON plantilla (si la creaste en Clerk):
        // const jwt = await getToken({ template: 'mobile' });

        setToken(jwt);
        console.log("JWT:", jwt);
        console.log("User ID:", userId);

        // Ejemplo de request protegido:
        // const res = await fetch("https://tu-api.com/api/transactions", {
        //   headers: { Authorization: `Bearer ${jwt}` },
        // });
        // const data = await res.json();
      } catch (err) {
        console.log("Error fetching auth data:", err);
      }
    };

 return(
        <View style={styles.container}>
            <Text>TransactionsScreens</Text>
            
            <SignOutButton navigation={navigation}/>
              <Button title="get info" onPress={fetchAuthData}/>
              <Text>{'userId: '+ userId}</Text>
               <Text>{'token: '+ token}</Text>
           
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

