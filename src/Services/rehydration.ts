
import AsyncStorage from "@react-native-async-storage/async-storage"
import Config from "../Config"
import { persistStore } from "redux-persist"
import PersistConfig from "../Config/persist.config"
import { startup as startUp } from "../Redux/appRedux"

const updateReducers = (store: any) => {
    const reducerVersion = PersistConfig.reducerVersion
    const startup = () => store.dispatch(startUp())
  
    // Check to ensure latest reducer version
    AsyncStorage.getItem('reducerVersion').then((localVersion) => {
      if (localVersion !== reducerVersion) {
        if (Config.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion
            },
            preview: 'Reducer Version Change Detected',
            important: true
          })
        }
        // Purge store
        persistStore(store, null, startup).purge()
        AsyncStorage.setItem('reducerVersion', reducerVersion)
      } else {
        persistStore(store, null, startup)
      }
    }).catch(() => {
      persistStore(store, null, startup)
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    })
  }
  
  export default { updateReducers }
  