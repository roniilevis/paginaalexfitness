import './Header.css'
import logomarca from '../imagenes/logomarca.png'
import whatsapp from '../imagenes/whatsapp.png'
import facebook from '../imagenes/facebook.png'

const Header = () => {
    return <>
    <header>
        <div id='redes-icono'>
            <a href="https://wa.me/c/18099621689"><img src={whatsapp} alt="logowhatsapp" /></a>
            <a href="https://www.facebook.com/railinalexander.polanco"> <img src={facebook} alt="logofacebook" /></a>
           
        </div>
        <nav className='navegacion-home'>
            <ol>
                    <li><a href="#">Quien Soy</a></li>
                    <li><a href="#">Planes</a></li>
                    <li><img src= {logomarca} alt='logoalexfitness' /></li>
                    <li><a href="#">Mercancia</a></li>
                    <li><a href="#">Ubicacion</a></li>
           </ol>
        </nav>
        <div id='presentacion-home'>
                <h1>Que estarias dispuesto a sacrificar para lograr tus objetivos?</h1>
                <img src="" alt="" />
        </div>
    </header>
    
    
    </>
}


export default Header