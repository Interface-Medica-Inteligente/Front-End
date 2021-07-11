// @flow
import * as React from 'react'
import './styles.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Actions as DialogActions } from '../../reducers/dialog'
import { Actions as RecipeActions } from '../../reducers/recipe'
import useRecord from '../../hooks/useRecord'
import useRecipe from '../../hooks/useRecipe'

const RevenueScreen = (): React.Node => {
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue } = useForm()
  const onSubmit = data => dispatch(RecipeActions.ui.requestRegisterRecipe(data))

  useRecord({ setValue })
  useRecipe({ setValue })

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(DialogActions.ui.openDialog('RECIPE'))
  }

  return (
    <div className='container-revenue'>
      <form className='card-revenue' onSubmit={handleSubmit(onSubmit)}>
        <div className='row-revenue'>
          <Input label='Nome completo do paciente' width={1} {...register('name')} />
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
          <Input data={[{ label: '1ª Via Farmácia', value: 'FIRST' }, { label: '2ª via Paciente', value: 'SECOND' }]} inputType='radio' name='via' {...register('via')} />
        </div>

        <div className='row-revenue'>
          <Button title='Gerar PDF' />
          <div className='row-buttons'>
            <Button title='Buscar Receita' color='#142585' onClick={handleSearch} />
            <Button title='Cadastrar' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default RevenueScreen
