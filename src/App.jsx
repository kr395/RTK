import React from 'react'
import Counter from './Components/Counter'
import Stats from './Components/Stats'

const App = () => {
  return (
    <>
      <Counter/>
      <Counter/>
      <Stats totalCount={"10"}/>
    </>
  )
}

export default App