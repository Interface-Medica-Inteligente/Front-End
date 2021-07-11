import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { Actions as DoctorActions } from '../../reducers/doctor'
import attendanceSelector from '../../selectors/attendanceSelector'

import './styles.css'

const SideBar = ({ children }) => {
  const attendanceId = useSelector(attendanceSelector.getAttendanceId)
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
            <Item name='recipe' disabled={!attendanceId} title='Receita' />
            <Item name='report' disabled={!attendanceId} title='Laudo' />
          </div>
        </div>
        <div onClick={handleLogout} className='logout'>
          Sair
        </div>
      </div>
      <div className='container-children'>
        {children}
      </div>
    </div>
  )
}

const Item = ({ name, title, disabled = false }) => {
  const history = useHistory()
  const { pathname } = useLocation()

  const active = `/${name}` === pathname

  const handlePush = () => {
    if (!disabled) {
      history.push(name)
    }
  }

  return (
    <div onClick={handlePush} className={`container-button ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}>
      <p className='button-title'>{title}</p>
    </div>
  )
}

export default SideBar
