import { takeLatest, all } from 'redux-saga/effects'
import { todo } from "../Actions"
import { fetchDataSaga } from "./todoSaga"

export default function * root () {
    yield all([
      // some sagas only receive an action
      takeLatest(todo.LIST_DATA, fetchDataSaga)
    ])
}