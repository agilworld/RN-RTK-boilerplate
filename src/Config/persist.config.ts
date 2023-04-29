import storage from "@react-native-async-storage/async-storage"

const rootPersistConfig = {
    reducerVersion:"1.0",
    store:{
        key: 'root',
        storage: storage,
        blacklist: []
    }
}

export default rootPersistConfig
  