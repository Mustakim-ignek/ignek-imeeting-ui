import React from 'react'
import { Button, ModalBase } from 'ignek-imeeting-ui'
import 'ignek-imeeting-ui/dist/index.css'

const App = () => {
  return (
    <>
      <Button label='hellow' styleType='primary' />
      <ModalBase title='new Modal'>
        <h1>hellow</h1>
      </ModalBase>
    </>
  )
}

export default App
