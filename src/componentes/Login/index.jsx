import React from 'react'
import "./login.css"
import marga from '../imagenes/logomarca.png'

export const Login = () => {

  return (
    <section>
    <div className='container'>
        <h1><img src={marga} alt='imagen del logo' /></h1>
       <div className='fondo'>
        <form>          
        <label htmlFor='User'>Usuario</label>
           <input type='text' placeholder='User' />

           <label htmlFor='password'>Password</label>
           <input  type='password' placeholder='Password'/>
           <button className='login' type='submit'>Entrar</button>
        </form>
        </div>
    </div>
    </section>
  )
}

