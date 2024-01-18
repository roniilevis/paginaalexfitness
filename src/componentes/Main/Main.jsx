import './Main.css'
import Rutinasretadoras from '../imagenes/Rutinasretadoras.png'
import Programaspersonalizados from '../imagenes/Programaspersonalizados.png'
import Alimentacion from '../imagenes/Alimentacion.png'


const Main = ()=> {
    return <>
    <main className='Main'>
        <div className='presentacion-alex'>
            <h2>Quien soy?</h2>
            <p>Soy Alex, y estoy aquí hoy como su apasionado coach de fitness. <br />
            Mi misión es guiarlos hacia un estilo de vida más saludable, lleno de energía y vitalidad.</p>
        </div>
        
        <div className='servicios'>
            <div id='servicios-card'>
                <img src={Rutinasretadoras} alt="Rutina.png" />
                <div>
                <h3 id='servicios-parrafo'>Sesiones de entrenamientos retadoras</h3>
                <p id='servicios-parrafo-rutinasretadoras' >"Sumérgete en sesiones de entrenamiento que desafiarán tus límites y te impulsarán hacia un nuevo nivel de excelencia. <br />Cada repetición, cada gota de sudor, te acercará un paso más a la versión más fuerte y resistente de ti mismo. <br />Enfrenta el desafío con determinación, porque en la dificultad es donde descubrimos nuestra verdadera fortaleza. Estas sesiones no son solo físicas, son una oportunidad para transformarte, superar obstáculos y alcanzar metas que nunca imaginaste posibles. ¡Prepárate para desafiar tus límites y descubrir el increíble potencial que reside en ti!"</p>
                </div>
                
            </div>
            <div id='servicios-card'>
                <h3 id='servicios-parrafo'>Programas Personalizados</h3>
                <img src={Programaspersonalizados} alt="Personasentrenando.png" />
            </div>
            <div id='servicios-card'>
                <img src={Alimentacion} alt="alimentos.png" />
                <h3 id='servicios-parrafo'>Alimenta tu exito</h3>
            </div>
            
        </div>
    </main>
    
    </>
}




export default Main