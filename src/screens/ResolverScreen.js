import {useEffect,useContext} from "react"
import {ActivityIndicator,StyleSheet,View} from "react-native"
import {Context as AuthContext} from "../context/AuthContext"


const ResolverScreen = () => {
    const { tryLocalSignIn } = useContext(AuthContext)
    useEffect(()=>{
        console.log('resolver');
        tryLocalSignIn()
    },[])

    return <View style={styles.container}>
        <ActivityIndicator/>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center"
    }
})
export default ResolverScreen