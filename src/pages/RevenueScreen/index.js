// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Actions as DoctorActions } from '../../reducers/doctor'

const RevenueScreen = (): React.Node => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
  }

  return (
    <div className='container-revenue'>
      <form className='card'>
        <div className='row'>
          <Input label='Paciente' width={0.7} />
        </div>

        <div className='row'>
          <Input label='Endereço' width={0.7} />
        </div>

        <p>Prescrição:</p>
        <div className='row'>
          <Input label='Medicamento' width={0.3} />
          <Input label='Quantidade' width={0.2} />
          <Input label='Uso' width={0.2} />
        </div>

        <div className='row'>
          <Input label='Descrição' width={1} />
        </div>

        <div className='row-select'>
          <div>
            <Input label='1ª Via Farmácia' width={0.2} />
            <Input label='2ª via Paciente' width={0.2} />
          </div>
          <Input label='Data' width={1} />
        </div>

        <div className='row-buttons'>
          <Button title='Buscar Receita' onClick={handleSubmit} />
          <Button title='Cadastrar' onClick={handleSubmit} />
        </div>
      </form>
    </div>
  )
}

export default RevenueScreen
