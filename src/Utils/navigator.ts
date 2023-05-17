import { NavigationContainerRef, ParamListBase, NavigatorScreenParams, TabNavigationState } from "@react-navigation/native"

let _navigator:NavigationContainerRef<ParamListBase>

function initial(navigatorRef:NavigationContainerRef<ParamListBase>) {
   
    _navigator = navigatorRef;
}

function navigate(routeName:string, params?:Partial<ParamListBase>) {
    _navigator.navigate(routeName, {
        params
    });
}

function resetRoot(routeName:string, params?:Partial<ParamListBase>) {
   
    _navigator.resetRoot(
        {
            index: 0,
            routes: [
                { name: routeName, params:params  },
            ],
        }
    );
}

function resetToMain(routeName?:string, params?:Partial<ParamListBase>) {
    let gParams:any =  {
        key: "main"
    }
    if( routeName ) {
        gParams.routes = [
            { name: routeName, params:params  },
        ]
    }
    _navigator.resetRoot(gParams)
}

function resetToAuth(routeName?:string, params?:Partial<ParamListBase>) {
    let gParams:any =  {
        key: "auth"
    }
    if( routeName ) {
        gParams.routes = [
            { name: routeName, params:params  },
        ]
    }
    _navigator.resetRoot(gParams)
}

export default {
    initial,
    navigate,
    resetRoot,
    resetToMain,
    resetToAuth
};
