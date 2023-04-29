import React, { useEffect, useState } from "react"
import { View, Text as DefaultText, SafeAreaView } from "react-native"
import { TextInput, Text, Button } from "react-native-paper"

export default function (props:any): JSX.Element {
    useEffect(() => {
        // do thing here
    },[])
    return (
        <SafeAreaView>
            <View>
                <Text variant="headlineSmall">Title</Text>
                <DefaultText>New screen</DefaultText>
                <Button mode="contained">Button</Button>
            </View>
        </SafeAreaView>
    )
}