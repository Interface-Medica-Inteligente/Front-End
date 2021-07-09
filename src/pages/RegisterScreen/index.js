// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Actions as DoctorActions } from '../../reducers/doctor'
import { genre } from '../../constants'
import { useForm } from 'react-hook-form'

const RegisterScreen = (): React.Node => {
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const onSubmit = data => dispatch(DoctorActions.ui.requestRegister(data))

  return (
    <div className='container-register'>
      <form className='content' onSubmit={handleSubmit(onSubmit)}>
        <p className='register-text'>Cadastro</p>
        <Input placeholder='Nome' {...register('name')} />
        <Input placeholder='CPF' {...register('cpf')} />
        <Input placeholder='CRM' {...register('crm')} />
        <Input placeholder='Sexo' options={genre} inputType='select' {...register('genre')} />
        <Input placeholder='E-mail' {...register('email')} />
        <Input placeholder='Senha' {...register('password')} />
        <div className='container-buttons'>
          <Button title='Cadastrar' onClick={handleSubmit} />
          <div className='container-button-login'>
            Já possui cadastro?<Link className='link-login' to='/'>Login</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterScreen
