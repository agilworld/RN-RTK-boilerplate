import { combineReducers } from "@reduxjs/toolkit"
import { parentKeys } from "../Actions"
import todoRedux from "./todoRedux"
import appRedux from "./appRedux"
import userRedux from "./userRedux"

export default combineReducers({
    [parentKeys.app]:appRedux,
    [parentKeys.todo]:todoRedux,
    [parentKeys.user]:userRedux
})
