import { create } from 'apisauce'
import Config from '../config'

export const api = create({
  baseURL: Config.baseURL
})

const Api = {
  login: ({ email, password }) => api.post('/medico/authenticate', {
    email,
    senha: password
  })
}

export default Api
