import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dialogSelector from '../../selectors/dialogSelector'
import { Actions as DialogActions } from '../../reducers/dialog'
import { Actions as RecordActions } from '../../reducers/record'
import { Actions as RecipeActions } from '../../reducers/recipe'

import './styles.css'
import Input from '../Input'
import Button from '../Button'
import { useForm } from 'react-hook-form'
import recipeSelector from '../../selectors/recipeSelector'
import RecipeItem from '../RecipeItem'

const Dialog = ({ children }) => {
  const dispatch = useDispatch()
  const isVisible = useSelector(dialogSelector.isVisible)
  const type = useSelector(dialogSelector.getType)

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(DialogActions.ui.closeDialog())
    }
  }

  return (
    <div className='container-dialog'>
      {children}
      {isVisible && (
        <div onClick={handleClose} className='shadow-dialog'>
          <div className='content-dialog'>
            <DialogComponent type={type} />
          </div>
        </div>
      )}
    </div>
  )
}

const DialogComponent = ({ type }) => {
  const recipes = useSelector(recipeSelector.getRecipes)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    dispatch(RecipeActions.ui.requestRecipes())
  }, [])

  if (type === 'RECORD') {
    const onSubmit = data => {
      dispatch(RecordActions.ui.requestSearchRecord(data))
    }

    return (
      <form className='form-cpf' onSubmit={handleSubmit(onSubmit)}>
        <Input label='CPF' {...register('cpf')} />
        <Button title='Buscar' />
      </form>
    )
  }

  if (type === 'RECIPE') {
    const onSubmit = data => {
      dispatch(RecipeActions.ui.requestFilterRecipe(data))
    }

    return (
      <div className='container-recipes'>
        <div className='recipes'>
          {recipes.map((recipe) => {
            const handleSelectedRecipe = () => {
              dispatch(RecipeActions.entities.setSelectedRecipe(recipe))
              dispatch(DialogActions.ui.closeDialog())
            }

            return <RecipeItem key={String(recipe.id)} onClick={handleSelectedRecipe} {...recipe} />
          })}
        </div>
        <form className='form-cpf' onSubmit={handleSubmit(onSubmit)}>
          <Input label='Medicamento' {...register('medicines')} />
          <Button title='Filtrar' />
        </form>
      </div>
    )
  }

  return <p>dialog</p>
}

export default Dialog
