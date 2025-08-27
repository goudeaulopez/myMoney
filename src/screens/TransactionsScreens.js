import {View,Text,StyleSheet} from "react-native"

const TransactionsScreen = () => {
    return(
        <View style={styles.container}>
            <Text>TransactionsScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default TransactionsScreen