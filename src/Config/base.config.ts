export interface ConfigBaseProps {
    usePersist: boolean,
    useReactotron:boolean,
    persistNavigation: "always" | "dev" | "prod" | "never"
    catchErrors: "always" | "dev" | "prod" | "never"
    exitRoutes: string[],
    reduxLogging: boolean
  }

  
const baseConfig: ConfigBaseProps = {
    usePersist: true,
    useReactotron:__DEV__,
    reduxLogging:__DEV__, 
    catchErrors:"always",
    persistNavigation:"dev",
    exitRoutes:["Splash"]         
}

export default baseConfig