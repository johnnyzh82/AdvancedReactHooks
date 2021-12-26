import React from 'react'
import useExpanded from './useExpanded.js'
import useEffectAfterMount from './useEffectAfterMount.js'

import Header from './components/Header'
import Icon from './components/Icon'
import Body from './components/Body'

import './App.css'

function App () {
  const { expanded, toggle } = useExpanded()
  return (
    <div className='Expandable'>
      <Header toggle={toggle}>Awesome Hooks </Header>
      <Icon expanded={expanded} />
      <Body expanded={expanded}>React hooks are awesome!</Body>
    </div>
  )
}

export default App
