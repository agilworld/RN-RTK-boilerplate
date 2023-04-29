import { ListActions, putAction, parentKeys } from "./_creators"

export const app = {
    NAV:putAction(parentKeys.app, "nav"),
    NAV_STATES:putAction(parentKeys.app, "navStates"),
    STARTUP:putAction(parentKeys.app, "StartUp"),
    LOADING:putAction(parentKeys.app, "loading"),
    UNLOADING:putAction(parentKeys.app, "unloading")
}