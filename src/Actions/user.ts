import { ListActions, putAction, parentKeys } from "./_creators"

export const user = {
    SET_LOGIN: putAction(parentKeys.user, "LOGIN"),
    SET_LOGOUT: putAction(parentKeys.user, "LOGOUT")
}