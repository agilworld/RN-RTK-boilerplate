/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { startup } from "./Redux/appRedux"
import StackNavigator from './Routes';
import Navigator from "./Utils/navigator"

function RootContainer(props:any): JSX.Element {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(startup())
  },[])
  return (
    <StackNavigator stackRef={(dataRef:any)=> Navigator.initial(dataRef.current)} />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default RootContainer;
