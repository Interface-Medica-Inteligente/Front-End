import { create } from 'apisauce'
import Config from '../config'

export const api = create({
  baseURL: Config.baseURL
})

const Api = {
  login: ({ email, password }) => api.post('/medico/authenticate', {
    email,
    senha: password
  }),
  register: ({ name, cpf, crm, genre, email, password }) => api.post('/medico', {
    nome: name,
    senha: password,
    email,
    sexo: genre,
    crm,
    cpf
  })
}

export default Api