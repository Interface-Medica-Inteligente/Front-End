// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Actions as DoctorActions } from '../../reducers/doctor'
import { useForm } from 'react-hook-form'

const LoginScreen = (): React.Node => {
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const onSubmit = data => dispatch(DoctorActions.ui.requestLogin(data))

  return (
    <div className='container-login'>
      <form className='content' onSubmit={handleSubmit(onSubmit)}>
        <p className='login-text'>Login</p>
        <Input placeholder='E-mail' {...register('email')} />
        <Input placeholder='Senha' {...register('password')} />
        <Button title='Entrar' />
      </form>
      <div className='container-button-register'>
        Não possui cadastro?<Link className='link-register' to='/register'>Cadastre-se</Link>
      </div>
    </div>
  )
}

export default LoginScreen
