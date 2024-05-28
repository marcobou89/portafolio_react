import React, { useState } from 'react'
import './App.css'
import Cont_1Inicio from './assets/complements/Inicio/Cont_1Inicio'
import Cont_2Inicio from './assets/complements/Inicio/Cont_2Inicio'
import Cont_3Inicio from './assets/complements/Inicio/Cont_3Inicio'
import Cont_1Habilidades from './assets/complements/Habilidades/Cont_1Habilidades'
import Cont_2Habilidades from './assets/complements/Habilidades/Cont_2Habilidades'
import Cont_3Habilidades from './assets/complements/Habilidades/Cont_3Habilidades'
import Cont_1Contacto from './assets/complements/Contacto/Cont_1Contacto'
import Cont_2Contacto from './assets/complements/Contacto/Cont_2Contacto'
import Cont_3Contacto from './assets/complements/Contacto/Cont_3Contacto'
import Cont_1Portafolio from './assets/complements/Portafolio/Cont_1Portafolio'
import Cont_2Portafolio from './assets/complements/Portafolio/Cont_2Portafolio'
import Cont_3Portafolio from './assets/complements/Portafolio/Cont_3Portafolio'
import Cont_1Testimonio from './assets/complements/Testimonio/Cont_1Testimonio'
import Cont_2Testimonio from './assets/complements/Testimonio/Cont_2Testimonio'
import Cont_3Testimonio from './assets/complements/Testimonio/Cont_3Testimonio'





function App() {
  
  const [op_nav, setOp_nav] = useState(<Cont_1Inicio/>)
  const [op2_nav, setOp2_nav] = useState(<Cont_2Inicio/>)
  const [op3_nav, setOp3_nav] = useState(<Cont_3Inicio/>)
  const [op_img, setOp_img] = useState(1)

  
  const HandleInicio = () => {
    
    setOp_nav(<Cont_1Inicio/>)
    setOp2_nav(<Cont_2Inicio/>)
    setOp3_nav(<Cont_3Inicio/>)
    setOp_img(1)
  }

  const HandleHabilidades = () => {
    
    setOp_nav(<Cont_1Habilidades/>)
    setOp2_nav(<Cont_2Habilidades/>)
    setOp3_nav(<Cont_3Habilidades/>)
    setOp_img(2)
  }
  
  const HandlePortafolio = () => {
    
    setOp_nav(<Cont_1Portafolio/>)
    setOp2_nav(<Cont_2Portafolio/>)
    setOp3_nav(<Cont_3Portafolio/>)  
  }

  const HandleContacto = () => {
    
    setOp_nav(<Cont_1Contacto/>)
    setOp2_nav(<Cont_2Contacto/>)
    setOp3_nav(<Cont_3Contacto/>)

  }

  const HandleTestimonio = () => {
    
    setOp_nav(<Cont_1Testimonio/>)
    setOp2_nav(<Cont_2Testimonio/>)
    setOp3_nav(<Cont_3Testimonio/>)
  }

  // const imgFondo={
  //   backgroundImage: `url(../img/fondo${op_img}.jpg)`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundAttachment: 'fixed',
  // }

  return (

<div className='totalApp'>

         <div className='app' /*style={imgFondo}*/> 
              <div className='content_principal'>
                  <div className='content_1'>  
                      <div className='content_left'>
                              {op_nav}
                      </div>
                      <div className='content_right'>
                              {op2_nav}
                      
                      </div>
                      <div className='content_2'>
                          {op3_nav}
                      </div>

                  </div>
                  <div className='content_nav'>
                        <nav className='nav'>

                            <a onClick={HandleInicio}>Inicio</a>
                            <a onClick={HandleHabilidades} >Habilidades</a>
                            <a onClick={HandlePortafolio} >Portafolio</a>
                            <a onClick={HandleContacto}>Contacto</a>
                            <a onClick={HandleTestimonio}>Testimonio</a>
                          
                        </nav>
                        <div>
                            <img className='logo' src="" alt="Logo" />
                        </div>
                  </div>
                  
              </div>
        </div>
</div>
  )
}

export default App
