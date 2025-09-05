import {View,Text,StyleSheet} from "react-native"

const ShowTransactionsScreen = () => {
    return(
        <View style={styles.container}>
            <Text>ShowTransactionsScreen</Text>
        </View>
    )
}
ShowTransactionsScreen.navigationOptions = () => {
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
export default ShowTransactionsScreen