import React, {useState, useCallback, useEffect } from "react"
import { 
    View,  
    SafeAreaView,
    TouchableOpacity,
    BackHandler,
    Image
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Text as DefaultText, TextInput, Button as ButtonAction } from "react-native-paper"
import { Button } from "../../Components/Button"
import { TextField } from "../../Components/TextField"
import { moderateScale } from "../../Utils/scaling"
import { setLogin, getUser } from "../../Redux/userRedux"
import { getVersion, getBuildNumber } from "react-native-device-info"

type FieldErrors = {
    username?:string,
    password?:string
}

export default function Login(props:any): JSX.Element {
    const dispatch = useDispatch()
    const { isLoggedIn, user } = useSelector(state => getUser(state) )
    const [username, setUsername] = useState("")
    const [processLogin, setProcessLogin] = useState(false)
    const [pass, setPass] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState<FieldErrors>()

    useEffect(()=>{
        const backAction = () => {
            return true;
        };
      
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();

    },[])

    useEffect(()=>{
        if( processLogin && isLoggedIn ) {
            props.navigation.navigate("Main")
        }
    },[isLoggedIn, processLogin])

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const onLogin = () => {
        setProcessLogin(true)
        if( pass && username ) {
          dispatch(setLogin(true))
        } else {
            const pErrors: FieldErrors = {}
            if( !pass ) {
               pErrors.password = "You must enter valid password"
            }
            if( !username) {
               pErrors.username = "You must enter username"
            }
            setErrors({
                ...errors,
                ...pErrors
            })
            setProcessLogin(false)
        }
    }

    return (<SafeAreaView style={{flex:1}}>
        <View style={{flex:1, alignItems:"flex-start", justifyContent:"flex-start", alignContent:"center"}}>
            <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", marginTop:50}}>
                <Image style={{
                    width: moderateScale(42),
                    height: moderateScale(42),
                }} source={require("../../Images/Login-72x72.png")} />
                <View style={{marginLeft:20}}>
                    <DefaultText variant="bodyLarge">Agilworld Demo</DefaultText>
                    <DefaultText variant="bodySmall" style={{color:"grey"}}>App Version {getVersion()} ({getBuildNumber()})</DefaultText>
                </View>
            </View>
           
            
            <View style={{flex:1, width:"100%", paddingVertical:30}}>
               
                <TextField 
                      label="Username"
                      value={username}
                      maxLength={20}
                      onChangeText={text => {
                          setUsername(text)
                          if( errors?.username ) setErrors({...errors, username:undefined})
                      }}
                />
                    {errors?.username ? <DefaultText style={{color:"red"}} variant="bodySmall">{errors?.username}</DefaultText> : null}

                <TextField
                    label="Password"
                    value={pass}
                    LabelTextProps={{
                        style:{marginTop:20}
                     }}
                    maxLength={20}
                    onChangeText={text => {
                        setPass(text)
                        if( errors?.password ) setErrors({...errors, password:undefined})
                    }}
                    RightAccessory={(props)=><TouchableOpacity style={{marginTop:10,marginRight:10}} onPress={togglePassword}>
                        <DefaultText style={{fontSize:12}} variant="bodyMedium">
                            {showPassword?"Hide":"Show"}
                        </DefaultText>
                    </TouchableOpacity>}
                    secureTextEntry={!showPassword}
                    /*right={<TouchableOpacity onPress={togglePassword}>
                        <DefaultText style={{fontSize:12}} variant="bodyMedium">
                            {showPassword?"Hide":"Show"}
                        </DefaultText>
                    </TouchableOpacity>}*/
                />

                {errors?.password ? <DefaultText style={{color:"red"}} variant="bodySmall">{errors?.password}</DefaultText> : null}         

                <Button text={"Sign In"} style={{marginTop:25,paddingVertical:8,borderRadius:90}} onPress={onLogin} />
                   
            </View>
        </View>
    </SafeAreaView>)
}