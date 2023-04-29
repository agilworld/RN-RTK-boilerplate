import React from 'react';
import { View, ActivityIndicator, StyleSheet, StyleProp } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

type LoaderProps = {
    visible:Boolean,
    style?: StyleProp<any>
}
export default function Loader(props:LoaderProps) {

    if (props.visible) {
        return (
            <View style={[styles.container, props.style]}>
                <ActivityIndicator size="large" color={"blue"} />
            </View>
        );
    } else return null;
}
