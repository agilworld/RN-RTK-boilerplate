import { Action, AnyAction, CaseReducer, CaseReducerActions, Slice } from "@reduxjs/toolkit"
import { ListActions, putAction, parentKeys, ListActionTypes } from "./_creators"

export const todo = {
    LIST_DATA:putAction(parentKeys.todo, ListActions.LIST_DATA ),
    LIST_DATA_SUCCESS: putAction(parentKeys.todo, ListActions.LIST_DATA_SUCCESS),
    LIST_DATA_FAILURE: putAction(parentKeys.todo, ListActions.LIST_DATA_FAILURE),
}   
  