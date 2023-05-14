import React, { useEffect, useState } from "react"
import { 
    View, 
    Text as DefaultText, 
    SafeAreaView,
    BackHandler
} from "react-native"
import { colors } from "../Themes"
import { Card, Text, Chip, Badge } from "react-native-paper"
import { Button } from "../Components/Button"
import { useDispatch, useSelector } from "react-redux"
import { getTodo, listRequest, TodoTypes } from "../Redux/todoRedux"
import { logout } from "../Redux/userRedux"
import Navigator from "../Libs/Navigator"

export default function Home(props:any): JSX.Element {
    const dispatch = useDispatch()
    // get selectors 
    const todoSelector:TodoTypes = useSelector(state=>getTodo(state))

    useEffect(()=>{
        dispatch(listRequest())

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
        console.tron.log("todos", todoSelector.todos)
    },[todoSelector.todos])

    const onLogout = () => {
        dispatch(logout(false))
        //props.navigation.navigate("Auth")
    }

    const goToTrx = () => {
        console.log("props.navigation", props.navigation)
        //props.navigation.navigate("Auth")
    } 
    return (<SafeAreaView>
        <View>
            <Text variant="bodyLarge">Hai, Dian Afrial</Text>
            <DefaultText>Senin, 27 Maret 2023</DefaultText>
            <View style={{marginTop:20}}>
                <View>
                    <Card style={{flexGrow:2}} mode="elevated">
                        <Card.Title title={"Pendapatan Saya"}
                            style={{borderBottomWidth:1,paddingBottom:0,borderBottomColor:"#ddd"}} />
                        <Card.Content>
                            <View style={{flexDirection:"row",justifyContent:"flex-start", alignItems:"center",paddingTop:10}}>
                                <Text variant="headlineMedium" style={{marginRight:10}}>Rp4.250.000</Text>
                                <Badge size={25} style={{top:-8,marginRight:5,backgroundColor:"grey"}}>12</Badge>
                                <Badge size={25} style={{top:-8}}>2</Badge>
                            </View>

                            <View style={{
                                flexDirection:"row",
                                justifyContent:"flex-start", 
                                alignItems:"center",
                                paddingTop:10
                            }}>
                                <View style={{flex:1}}>
                                    <DefaultText>Pengeluaran</DefaultText>
                                    <Text variant="bodyLarge">Rp210.000</Text>
                                </View>

                                <View style={{flex:1}}>
                                    <DefaultText>Terhutang</DefaultText>
                                    <Text variant="bodyLarge">Rp10.000</Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </View>
           
            <Button style={{marginTop:20,borderRadius:90}} onPress={onLogout}>
                Logout
            </Button>
        </View>
    </SafeAreaView>)
}