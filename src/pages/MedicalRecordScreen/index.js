// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Actions as DoctorActions } from '../../reducers/doctor'
import { genre } from '../../constants'

const MedicalRecordScreen = (): React.Node => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
  }

  return (
    <div className='container-medical-record'>
      <form className='card'>
        <div className='row'>
          <Input label='Prontuário' width={0.3} />
          <Input label='Paciente' width={0.7} />
        </div>

        <div className='row'>
          <Input label='Data de Nascimento' width={0.3} />
          <Input label='Altura' width={0.2} />
          <Input label='Peso' width={0.2} />
          <Input label='CPF' width={0.3} />
        </div>

        <div className='row'>
          <Input placeholder='Sexo' options={genre} inputType='select' width={0.4} />
        </div>

        <div className='row'>
          <Input label='Nome da mãe' width={1} />
        </div>

        <div className='row'>
          <Input label='Nome do pai' width={1} />
        </div>

        <div className='row-buttons'>
          <Button title='Buscar Prontuário' onClick={handleSubmit} />
          <Button title='Cadastrar' onClick={handleSubmit} />
        </div>
      </form>
    </div>
  )
}

export default MedicalRecordScreen
