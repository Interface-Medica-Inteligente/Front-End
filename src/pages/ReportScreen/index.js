// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Actions as DoctorActions } from '../../reducers/doctor'

const ReportScreen = (): React.Node => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
  }

  return (
    <div className='container-report'>
      <form className='card'>
        <div className='row-report'>
          <Input label='Nº do CNES' width={0.3} />
          <Input label='Nome do estabelecimento de saúde solicitante' width={0.7} />
        </div>

        <div className='row-report'>
          <Input label='Nome completo do paciente' width={1} />
        </div>

        <div className='row-report'>
          <Input label='Nome completo da mãe paciente' width={0.6} />
          <Input label='Peso do paciente(Kg)' width={0.2} />
          <Input label='Altura do paciente(cm)' width={0.2} />
        </div>
      </form>
      <form className='card'>
        <div className='row-report'>
          <div>
            <p>Medicamentos</p>
            <Input label='Medicamentos' width={0.7} />
          </div>
          <div>
            <p>Quantidade Solicitada</p>
            <div className='row-report'>
              <Input label='Mês 1' width={0.1} />
              <Input label='Mês 2' width={0.1} />
              <Input label='Mês 3' width={0.1} />
            </div>
          </div>
        </div>
        <div className='row-report'>
          <Button title='Adicionar Medicamento' onClick={handleSubmit} />
        </div>
      </form>

      <form className='card'>
        <div className='row-report'>
          <Input label='CID-10' width={0.2} />
          <Input label='Diagnóstico' width={0.8} />
        </div>
        <div className='row-report'>
          <Input label='Anamnese' width={1} />
        </div>
        <div>
          <p>Paciente realizou tratamento prévio ou está em tratamento da doença?:</p>
          <div className='row-report'>
            <Input label='Sim' width={0.1} />
            <Input label='Não' width={0.1} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ReportScreen
