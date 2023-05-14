import Config from "react-native-config"
export interface ConfigBaseProps {
    env:string,
    usePersist: boolean,
    useReactotron:boolean,
    persistNavigation: "always" | "dev" | "prod" | "never"
    catchErrors: "always" | "dev" | "prod" | "never"
    exitRoutes: string[],
    reduxLogging: boolean
  }

  
const baseConfig: ConfigBaseProps = {
    env: Config.ENV,
    usePersist: true,
    useReactotron:__DEV__,
    reduxLogging:__DEV__, 
    catchErrors:"always",
    persistNavigation:"dev",
    exitRoutes:["Splash"]         
}

export default baseConfig