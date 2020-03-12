import React from 'react'
import { navigate } from '@reach/router'
import { Button, Select } from 'antd'
import ts from '../../translate'

import './Header.css'

export default ({ onChangeLang, isAuthorized, logout, lang }) => {
  const gotoMain = () => {
    navigate('/')
  }

  const register = () => {
    navigate('/register')
  }

  return (
    <div className="navbar">
      <div id="title" onClick={gotoMain}>
        Hypertube
      </div>
      {isAuthorized ? (
        <div id="button">
          <Select onChange={onChangeLang} value={lang}>
            <Select.Option value="eng">En</Select.Option>
            <Select.Option value="fr">Fr</Select.Option>
          </Select>
          <Button onClick={logout}>
            {ts.navbar.logout[lang]}
          </Button>
        </div>
      ) : (
        <Button id="button" color="primary" onClick={register}>
          Register
        </Button>
      )}
    </div>
  )
}
