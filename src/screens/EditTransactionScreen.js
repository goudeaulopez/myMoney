import {View,Text,StyleSheet} from "react-native"

const EditTransactionScreen = () => {
    return(
        <View style={styles.container}>
            <Text>EditTransactionScreen</Text>
        </View>
    )
}
EditTransactionScreen.navigationOptions = () => {
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
export default EditTransactionScreen