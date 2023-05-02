import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import CodePush from 'react-native-code-push';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootContainer from './RootContainer';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./Services/configureStore"
import Loader from './Components/Loader';
import RNConfig from "react-native-config"

function App(): JSX.Element {
  useEffect(()=>{
    CodePush.sync({
      deploymentKey:RNConfig.CODE_PUSH_KEY
    })
  },[])
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader visible={true} />} persistor={persistor}>
        <SafeAreaView style={{flex:1}}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <RootContainer />
        </SafeAreaView>
      </PersistGate>
     
    </Provider>
  );
}

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };

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

export default CodePush(codePushOptions)(App);
