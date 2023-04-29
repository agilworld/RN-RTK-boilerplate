import { ParamListBase } from "@react-navigation/native"
import { PayloadAction, PayloadActionCreator, ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit"
export const putAction = (key:string, name:string) => {
    return `${key}/${name}`
}

/**
 * Default states of initial states of any Redux
 */
export interface DefaultApiStatesTypes {
    data:string | ParamListBase | null,
    failure:boolean | null,
    fetching: boolean | null
}

export const DefaultApiStates = {
    data: null,
    failure:null,
    fetching: null
}


/**
 * List action types
 */
export interface ListActionTypes {
    listRequest(payload?: ActionCreatorWithOptionalPayload<PayloadAction> ):any,
    listedSuccess(payload?: ActionCreatorWithOptionalPayload<PayloadAction>):any,
    listedFailure(payload?: ActionCreatorWithOptionalPayload<PayloadAction>):any
}

export interface ListErrorTypes {
    listedError(payload?: ActionCreatorWithOptionalPayload<PayloadAction> ):any,
}

export interface ListedPaginationTypes {
    listedPagination:PayloadAction
}

/**
 * Fetch Actions types
 */

export interface FetchActionTypes {
    fetchRequest(payload?: ActionCreatorWithOptionalPayload<PayloadAction> ):any,
    fetchedSuccess(payload?: ActionCreatorWithOptionalPayload<PayloadAction> ):any,
    fetchedFailure(payload?: ActionCreatorWithOptionalPayload<PayloadAction> ):any
}

export const parentKeys = {
    app:"APP",
    user:"USER",
    todo:"TODO"
}

export const ListActions = {
    LIST_DATA:"listRequest",
    LIST_DATA_SUCCESS:"listedSuccess",
    LIST_DATA_FAILURE:"listedFailure",
    LIST_DATA_ERROR:"listedError",
    LIST_DATA_REFRESH:"listedRefresh",
    LIST_DATA_PAGINATION:"listedPagination"
}

export const FetchActions = {
    FETCH_DATA:"fetchRequest",
    FETCH_DATA_SUCCESS:"fetchedSuccess",
    FETCH_DATA_ERROR:"fetchedError",
    FETCH_DATA_FAILURE:"fetchedFailure",
    FETCH_DATA_REFRESH:"fetchedRefresh",
}

export const CreateActions = {
    POST_DATA:"creatOne",
    POST_BULK_DATA:"createdBulk",
    POST_DATA_ERROR:"createdError",
    POST_DATA_SUCCESS:"createdSuccess"
}

export const UpateActions = {
    UPDATE_DATA:"updateOne",
    UPDATE_BULK_DATA:"updatedBulk",
    UPDATE_DATA_ERROR:"updatedError",
    UPDATE_DATA_SUCCESS:"updatadSuccess"
}

export const RemoveActions = {
    REMOVE_DATA:"removeOne",
    REMOVE_BULK_DATA:"removedBulk",
    REMOVE_DATA_ERROR:"removedError",
    REMOVE_DATA_SUCCESS:"removedSuccess"
}

export const ToggleActions = {
    TOGGLE_DATA:"toggling",
    TOGGLE_DATA_ERROR:"toggledError",
    TOGGLE_DATA_SUCCESS:"removedSuccess"
}
export const ClearActions = {
    CLEAR_DATA:"clearData",
    CLEAR_SUCCESS:"clearSuccess",
}
