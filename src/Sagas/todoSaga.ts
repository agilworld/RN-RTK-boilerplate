import { call, takeEvery, put } from "redux-saga/effects";
import { listedSuccess, todoCreator } from "../Redux/todoRedux";
import { getTodos } from "../Services/Api";

export function* fetchDataSaga() {
  try {
    let result = yield call(getTodos);
    if( result.ok ) {
      yield put(listedSuccess(result.data));
    }
  } catch (e) {
    yield put({ type: todoCreator.LIST_DATA_FAILURE });
  }
}
