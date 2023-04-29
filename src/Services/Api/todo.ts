import Api from "./api"

export const getTodos = () => Api.get("todos")
export const createTodo = (body:Object) => Api.post("todos", body)