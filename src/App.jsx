import { useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'
import Input from './components/input'
import Button from './components/button'
import './App.css'

function App() {

  return (
    <>
      <div className="nav">
        <Navbar />

      </div>

      <div className="container">

          <div className="grid-item-1">
            <Card 
              text="Cole a sua URL ao lado e experiemente nossa tecnologia:" 
              img="./src/assets/imagemOlho.jpg"

            />
          </div>
        
          <div className="grid-item-2">
            <Card 
              text="Cole a URL da sua imagem abaixo"
              input= {<Input tittle="Digite sua URL" />}
              button= {<Button tittle="Analisar"/> }
            />

          </div>

          <div className="grid-item-3"><Card /></div>


      </div>

    </>
  )
}

export default App
