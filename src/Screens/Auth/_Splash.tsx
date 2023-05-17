import React, {useEffect} from "react"
import { 
    View, 
    Text, 
    Image,
    SafeAreaView 
} from "react-native"
import { moderateScale, scale } from "../../Utils/scaling"
import RNInfo from "react-native-device-info"

export default function Splash(props:any): JSX.Element {
    useEffect(() => {
      setTimeout(()=>{
        //Navigator.resetToAuth("Login")
        props.navigation.navigate("Login")
      },2000)
    }, [])
    
    return (<SafeAreaView style={{flex:1}}>
        <View style={{flex:1, position:"relative", backgroundColor:"#03507C", alignContent:"center", justifyContent:"center", alignItems:"center"}}>
            <Image style={{
                width: moderateScale(100),
                height: moderateScale(100),
            }} source={require("../../Images/Splash-144x144.png")} />
            <View style={{position:"absolute", bottom:30, left:0, right:0, alignItems:"center"}}>
                <Text>Version {RNInfo.getVersion()} ({RNInfo.getBuildNumber()})</Text>
            </View>
        </View>
    </SafeAreaView>)
}