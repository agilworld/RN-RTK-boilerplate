import React, { useRef, useEffect } from "react"
import { View, Text } from "react-native"
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useDispatch, useSelector } from "react-redux"
import { setNav, setNavStates } from "./Redux/appRedux"
import Login from "./Screens/Auth/_Login"
import Splash from "./Screens/Auth/_Splash"

import Home from "./Screens/Home"
import Settings from "./Screens/Settings"
import Notification from "./Screens/Notification"

import Help from "./Screens/Common/_Help"
import { getUser } from "./Redux/userRedux"
import { colors } from "./Themes"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator()

function MainAppStack(props:any) : JSX.Element {
    return (<MainStack.Navigator  initialRouteName="Home" screenOptions={{
        headerStyle:{
           backgroundColor:"white"
        },
        contentStyle:{
            backgroundColor:colors.background,
            padding:20
        },
        headerShadowVisible:true,
    }}>
        <MainStack.Screen
            name={'Dashboard'}
            component={Home}
            navigationKey="home"
            options={{ statusBarColor:"white", headerBackVisible:false }}
        />
        <MainStack.Screen
            name={'Settings'}
            component={Settings}
            options={{ statusBarColor:"white"}}
        />
        <MainStack.Screen
            name={'Notification'}
            component={Notification}
            options={{ statusBarColor:"white"}}
        />
    </MainStack.Navigator>)
}

function AuthAppStack(props:any) : JSX.Element {
    return (<AuthStack.Navigator screenOptions={{
        headerStyle:{
           backgroundColor:"#fefefe"
        },
        contentStyle:{
            borderTopColor:"#ddd",
            borderTopWidth:1,
            backgroundColor:"white",
            padding:30
        },
        headerShadowVisible:true,
    }}>
        <AuthStack.Screen
            name={'Splash'}
            component={Splash}
            options={{ headerShown:false, contentStyle:{ padding:0 }, statusBarColor:"white"}}
        />
        <AuthStack.Screen
            name={'Login'}
            component={Login}
            options={{  headerShown:false, statusBarColor:"white"}}
        />
    </AuthStack.Navigator>)
}
export default function StackNavigator(props:any): JSX.Element {
    const { isLoggedIn } = useSelector(state=>getUser(state))
    const navigationRef = useNavigationContainerRef();
    const stackRef = useRef(null);
    const dispatch = useDispatch()
    
    useEffect(() => {
        props.stackRef(stackRef);
    }, []);

    return <NavigationContainer 
            ref={navigationRef}
            onReady={() => {
                stackRef.current = navigationRef.getCurrentRoute().name;
            }}
            onStateChange={async () => {
                const previousRouteName = stackRef.current;
                const currentRouteName = navigationRef.getCurrentRoute().name;
                if (previousRouteName !== currentRouteName) {
                    // Save the current route name for later comparison
                    stackRef.current = currentRouteName;
                    
                    console.tron.log(`NAVIGATING ${previousRouteName} to ${currentRouteName}`)
                    // Dispatch nav
                    dispatch(setNav(currentRouteName));
                    dispatch(setNavStates(navigationRef.getRootState()))
                }
            }}
        >
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Splash">
                <Stack.Group>
                    {!isLoggedIn ? <Stack.Screen key="auth" name={'Auth'} component={AuthAppStack} /> :
                    <Stack.Screen key="main" name={'Main'} component={MainAppStack} />}
                </Stack.Group>
            
                <Stack.Group>
                    <Stack.Screen
                        name={'Help'}
                        component={Help}
                        options={{ statusBarColor:"white"}}
                    />
                </Stack.Group>
            </Stack.Navigator>
    </NavigationContainer>
}