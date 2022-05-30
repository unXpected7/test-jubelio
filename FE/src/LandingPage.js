
import React, { useContext } from 'react'
import Nav from './reusableComponents/NavComponent';
import './App.css'
import { observer } from 'mobx-react'

import { CardComponent } from "./reusableComponents/Widgets";
import { Container } from 'react-bootstrap'
import FormGetProductElevenia from "./view/product/form/FormGetProductElevenia"
import ProductStore from './store/ProductStore'
import { useDidMount } from './utils/componentLifeCycle'

const App = observer(() => {
  const { getProduct, product } = useContext(ProductStore)

  useDidMount(() => {
    getProduct()
  })

  return (
    <>
      <Nav />
      <Container>
        <FormGetProductElevenia />
        <CardComponent
          data={product}
        />
      </Container>
    </>
  )
})
export default App
