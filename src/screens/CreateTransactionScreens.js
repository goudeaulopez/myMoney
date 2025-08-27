import {View,Text,StyleSheet} from "react-native"

const CreateTransactionScreen = () => {
    return(
        <View style={styles.container}>
            <Text>CreateTransactionScreen</Text>
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
export default CreateTransactionScreen