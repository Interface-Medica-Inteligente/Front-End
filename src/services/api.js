import { create } from 'apisauce'
import Config from '../config'

export const api = create({
  baseURL: Config.baseURL
})

const Api = {
  login: ({ email, password }) => api.post('/medico/autenticar', {
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
  }),
  registerRecord: ({ doctorId, name, birthDate, cpf, dadName, momName, genre, height, weight }) => api.post('/consulta/cadastrar-prontuario', {
    paciente: {
      cpf,
      nome: name,
      email: '',
      sexo: genre,
      dataNascimento: birthDate,
      nomeMae: momName,
      nomePai: dadName
    },
    medico: doctorId || 5,
    peso: Number(weight),
    altura: Number(height)
  }),
  searchRecord: ({ cpf }) => api.post('/consulta/consultar-prontuario', {
    cpf
  }),
  registerRecipe: ({ medicines, quantity, use, description, via, attendanceId }) => api.post('/receita/cadastrar-prescricao', {
    quantidadeUso: use,
    quantidadeDiaria: quantity,
    medicamento: {
      nome: medicines
    },
    receita: {
      descricao: description,
      segundaVia: via === 'SECOND',
      atendimento: attendanceId
    }
  }),
  searchRecipe: ({ medicines, attendanceId }) => api.post('/receita/consultar-receitas-filtro', {
    atendimento: attendanceId,
    medicamento: medicines
  }),
  getRecipes: ({ attendanceId }) => api.get(`/receita/consultar-receitas/${attendanceId}`),
  getEstablishmentName: ({ cnes }) => api.get(`/registro-atendimento/consultar-cnes/${cnes}`),
  getDiagnosis: ({ cid }) => api.get(`/registro-atendimento/consultar-cid/${cid}`)
}

export default Api
