// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const LoginScreen = (): React.Node => {
  const handleSubmit = () => {
    alert('Logado')
  }

  return (
    <div className='container-login'>
      <div className='content'>
        <p className='login-text'>Login</p>
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />
        <Button title='Entrar' onClick={handleSubmit} />
      </div>
      <div className='container-button-register'>
        Não possui cadastro?<Link className='link-register' to='/register'>Cadastre-se</Link>
      </div>
    </div>
  )
}

export default LoginScreen
