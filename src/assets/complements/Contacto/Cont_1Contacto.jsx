import React from 'react'

const Cont_1Contacto = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Estoy listo para llevar tus ideas al siguiente nivel.</p>
      <form action="">
            <fieldset>
              <label htmlFor="Nombre">Nombre</label>
              <input type="text" name='Nombre' id='Nombre' placeholder='Ingresa tu Nombre:' required />
              <label htmlFor="Email">Email</label>
              <input type="email" name='email' id='email' placeholder='Ingresa tu Email:' required />
              <label for="mensaje">Mensaje</label>
              <textarea class="input" name="mensaje" id="mensaje" cols="30" rows="10" 
              placeholder="Escribe aqui tu Mensaje" maxlength="150" required></textarea>

              <input class="botones" type="submit" value="Enviar"/>
              <input class="botones" type="reset" value="Borrar" />      
            </fieldset>
      </form>
    </div>
  )
}

export default Cont_1Contacto