// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'

const LoginScreen = (): React.Node => {
  const handleSubmit = () => {
    alert('Logado')
  }

  return (
    <div className='container'>
      <div className='content'>
        <p className='login-text'>Login</p>
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />
        <Button title='Entrar' onClick={handleSubmit} />
      </div>
      <div className='container-register'>
        Não possui cadastro?<a className='link-register' href='https://google.com.br' target='blank'>Cadastre-se</a>
      </div>
    </div>
  )
}

export default LoginScreen
