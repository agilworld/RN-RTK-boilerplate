import Config from '../Config'
import Immutable from "seamless-immutable"
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

declare global {
    interface Console {
        tron: any
    }
}

const reactotron = Reactotron
    .configure({ name: 'Counter POS App' })
    .useReactNative()
    .use(trackGlobalErrors({
        veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0
    }))
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin({except:[]}))

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!

  reactotron.connect()

  // Let's clear Reactotron on every time we load the app
  reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
}

export default reactotron
console.tron = reactotron