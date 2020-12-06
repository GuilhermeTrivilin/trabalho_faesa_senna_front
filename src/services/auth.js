import { post, get } from './http'

// export const login = async ({ email, password }) => await get(`login?email=${email}&password=${password}`)
export const login = async ({ email, password }) => await post('login', { email, password })