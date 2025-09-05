import { useAuth, useClerk, useSession } from "@clerk/clerk-expo";
import { Text, TouchableOpacity } from 'react-native'

export const SignOutButton = ({navigation}) => {
 const { isLoaded } = useAuth();
  const { setActive /*, signOut: clerkSignOut */ } = useClerk();
  const { session } = useSession();

  const handleSignOut = async () => {
    try {
      // 1) Termina la sesión en el servidor (mata el refresh token)
      await session?.end();

      // 2) Limpia la sesión activa en el dispositivo
      await setActive({ session: null });

      // 3) Navega al flujo de login
      navigation.navigate("loginFlow");
    } catch (err) {
      const msg = err?.errors?.[0]?.message || err?.message || String(err);
      setErrorMsg(msg);
      console.log("SignOut error:", err);
    } 
  };
  
 return (
    <TouchableOpacity onPress={handleSignOut} >
      <Text style={{fontSize:32,padding:5}}>Sign out</Text>
    </TouchableOpacity>
  )
}
