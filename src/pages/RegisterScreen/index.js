// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Actions as DoctorActions } from '../../reducers/doctor'

const RegisterScreen = (): React.Node => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(DoctorActions.entities.setDoctor({ token: 'hfsghdjhjsd' }))
  }

  return (
    <div className='container-register'>
      <div className='content'>
        <p className='register-text'>Cadastro</p>
        <Input placeholder='Nome' />
        <Input placeholder='CPF' />
        <Input placeholder='CRM' />
        <Input placeholder='Sexo' inputType='select' />
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />
        <div className='container-buttons'>
          <Button title='Cadastrar' onClick={handleSubmit} />
          <div className='container-button-login'>
            Já possui cadastro?<Link className='link-login' to='/'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
