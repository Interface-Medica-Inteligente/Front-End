// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const RevenueScreen = (): React.Node => {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const onSubmit = data => alert(JSON.stringify(data))
  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container-revenue'>
      <form className='card-revenue' onSubmit={handleSubmit(onSubmit)}>
        <div className='row-revenue'>
          <Input label='Paciente' width={1} {...register('name')} />
        </div>

        <p className='title'>Prescrição:</p>
        <div className='row-revenue'>
          <Input label='Medicamento' width={0.3} {...register('medicines')} />
          <Input label='Quantidade' width={0.2} {...register('quantity')} />
          <Input label='Uso' width={0.2} {...register('use')} />
        </div>

        <div className='row-revenue'>
          <Input label='Descrição' width={1} height={2} {...register('description')} />
        </div>

        <div className='row-revenue-select'>
          <div>
            <Input data={[{ label: '1ª Via Farmácia', value: 'FIRST' }, { label: '2ª via Paciente', value: 'SECOND' }]} inputType='radio' name='via' {...register('via')} />
          </div>
          <Input label='Data' width={0.3} {...register('revenueDate')} />
        </div>

        <div className='row-buttons'>
          <Button title='Buscar Receita' color='#142585' onClick={handleSearch} />
          <Button title='Cadastrar' />
        </div>
      </form>
    </div>
  )
}

export default RevenueScreen
