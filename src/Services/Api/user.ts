import Api from "./api"

export const getUsers = () => Api.get("/users")
export const getUserTodos = (id:number) => Api.get(`users/${id}/todos`)