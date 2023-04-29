import { createSlice, createAction, createReducer } from "@reduxjs/toolkit";
import { ParamListBase, RouteProp, NavigationContainerRef, NavigationState } from "@react-navigation/native"
import { RootState } from "../Services/configureStore"
import { parentKeys, app } from "../Actions"

type AppTypes = {
   navCurrent: string | null,
   navStates: NavigationState<ParamListBase> | null,
   startup:null | boolean,
   background:null | boolean,
   loading:null | boolean
}

const initialStates:AppTypes = {
    navCurrent:null,
    navStates: null,
    startup:null,
    background:null,
    loading:null,
}

export const setNav = createAction<string>(app.NAV)
export const setNavStates = createAction<NavigationState<ParamListBase>>(app.NAV_STATES)
export const startup = createAction(app.STARTUP)
export const loading = createAction(app.LOADING)
export const unloading = createAction(app.UNLOADING)

const reducer = createReducer(
    initialStates,
    (builder) => {
        builder.addCase(startup, (state, action) => {
            return {...state, startup:true}
        }).addCase(loading, (state, action) => {
            return {...state, loading:true}
        }).addCase(unloading, (state, action) => {
            return {...state, loading:false}
        }).addCase(setNav, (state, action) => {
            return {
                ...state, 
                navCurrent:action.payload
            }
        }).addCase(setNavStates, (state, action) => {
            return {
                ...state, 
                navStates:action.payload,
            }
        })
    }
)

export const appCreator = app

export const appState = (state: RootState) => state[parentKeys.app]

export default reducer

