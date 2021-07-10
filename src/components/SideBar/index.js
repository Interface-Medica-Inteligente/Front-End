import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { Actions as DoctorActions } from '../../reducers/doctor'

import './styles.css'

const SideBar = ({ children }) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(DoctorActions.entities.logout())
  }

  return (
    <div className='container-side-bar'>
      <div className='side-bar'>
        <div className='content-side-bar'>
          <div className='logo' />
          <div className='container-buttons'>
            <Item name='record' title='Prontuário' />
            <Item name='recipe' title='Receita' />
            <Item name='report' title='Laudo' />
          </div>
        </div>
        <div onClick={handleLogout} className='logout'>
          Sair
        </div>
      </div>
      {children}
    </div>
  )
}

const Item = ({ name, title }) => {
  const history = useHistory()
  const { pathname } = useLocation()

  const active = `/${name}` === pathname

  const handlePush = () => {
    history.push(name)
  }

  return (
    <div onClick={handlePush} className={`container-button ${active ? 'active' : ''}`}>
      <p className='button-title'>{title}</p>
    </div>
  )
}

export default SideBar
