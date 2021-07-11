// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { Actions as DialogActions } from '../../reducers/dialog'
import { Actions as RecordActions } from '../../reducers/record'
import { genre } from '../../constants'
import { useForm } from 'react-hook-form'
import useRecord from '../../hooks/useRecord'

const MedicalRecordScreen = (): React.Node => {
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue } = useForm()

  useRecord({ setValue })

  const onSubmit = data => dispatch(RecordActions.ui.requestRegisterRecord(data))

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(DialogActions.ui.openDialog('RECORD'))
  }

  return (
    <div className='container-medical-record'>
      <form className='card-medical-record' onSubmit={handleSubmit(onSubmit)}>
        <div className='row-form'>
          <Input label='Paciente' width={1} {...register('name')} />
        </div>

        <div className='row-form'>
          <Input label='Data de Nascimento' width={0.3} {...register('birthDate')} />
          <Input label='Altura' width={0.2} {...register('height')} />
          <Input label='Peso' width={0.2} {...register('weight')} />
          <Input label='CPF' width={0.3} {...register('cpf')} />
        </div>

        <div className='row-form'>
          <Input placeholder='Sexo' options={genre} inputType='select' width={0.3} {...register('genre')} />
        </div>

        <div className='row-form'>
          <Input label='Nome da mãe' width={1} {...register('momName')} />
        </div>

        <div className='row-form'>
          <Input label='Nome do pai' width={1} {...register('dadName')} />
        </div>

        <div className='row-buttons'>
          <Button title='Buscar Prontuário' color='#142585' onClick={handleSearch} />
          <Button title='Cadastrar' />
        </div>
      </form>
    </div>
  )
}

export default MedicalRecordScreen
