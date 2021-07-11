// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import useRecord from '../../hooks/useRecord'
import { useDispatch } from 'react-redux'
import { Actions as ReportActions } from '../../reducers/report'
import Api from '../../services/api'

const ReportScreen = (): React.Node => {
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue, getValues } = useForm()

  useRecord({ setValue })

  const onSubmit = data => dispatch(ReportActions.ui.requestRegisterReport(data))

  const onBlurCNES = () => {
    const cnes = getValues('cnes')
    Api.getEstablishmentName({ cnes }).then((response) => {
      setValue('establishmentName', response.data.nomeEstabelecimento)
    }).catch(() => {
      setValue('establishmentName', '')
    })
  }

  const onBlurCid = () => {
    const cid = getValues('cid')
    Api.getDiagnosis({ cid }).then((response) => {
      setValue('diagnosis', response.data.descricao)
    }).catch(() => {
      setValue('diagnosis', '')
    })
  }

  return (
    <form className='container-report' onSubmit={handleSubmit(onSubmit)}>
      <div className='card-report'>
        <div className='row-report'>
          <Input label='Código do CNES' width={0.3} {...register('cnes')} onBlur={onBlurCNES} />
          <Input label='Nome do estabelecimento de saúde solicitante' width={0.7} {...register('establishmentName')} />
        </div>

        <div className='row-report'>
          <Input label='Nome completo do paciente' width={1} {...register('name')} />
        </div>

        <div className='row-report'>
          <Input label='Nome completo da mãe do paciente' width={0.7} {...register('momName')} />
          <Input label='Peso do paciente(Kg)' width={0.15} {...register('weight')} />
          <Input label='Altura do paciente(cm)' width={0.15} {...register('height')} />
        </div>
      </div>
      {/* <div className='card-report'>
        <div className='row-report'>
          <div className='container-medicines'>
            <p className='title'>Medicamentos</p>
            <Input label='Medicamentos' width={0.65} />
          </div>
          <div className='container-month'>
            <p className='title'>Quantidade Solicitada</p>
            <div className='row-report'>
              <Input label='Mês 1' width={0.1} />
              <Input label='Mês 2' width={0.1} />
              <Input label='Mês 3' width={0.1} />
            </div>
          </div>
        </div>
        <div className='row-report-button-add'>
          <Button title='Adicionar Medicamento' onClick={handleSearch} />
        </div>
      </div> */}

      <div className='card-report'>
        <div className='row-report'>
          <Input label='CID-10' width={0.2} {...register('cid')} onBlur={onBlurCid} />
          <Input label='Diagnóstico' width={0.8} {...register('diagnosis')} />
        </div>
        <div className='row-report'>
          <Input label='Anamnese' width={1} height={2} {...register('anamnese')} />
        </div>
        <div>
          <p>Paciente realizou tratamento prévio ou está em tratamento da doença?:</p>
          <div className='row-report'>
            <Input data={[{ label: 'Sim', value: 'YES' }, { label: 'Não', value: 'NO' }]} inputType='radio' name='treatment ' {...register('treatment')} />
          </div>
        </div>
        {/* <div className='row-report'>
          <Input label='Relatar' width={1} {...register('report')} />
        </div> */}
        <div className='row-report-button-add'>
          <Button title='Imprimir' />
        </div>
      </div>
    </form>
  )
}

export default ReportScreen
