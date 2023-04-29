import { ApiErrorResponse, ApiOkResponse, ApiResponse } from "apisauce"

export * from "./todo"
export * from "./user"

export type Result = ApiResponse<ApiErrorResponse<any> | ApiOkResponse<any>>