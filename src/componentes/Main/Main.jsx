import './Main.css'
import Rutinasretadoras from '../imagenes/Rutinasretadoras.png'
import Programaspersonalizados from '../imagenes/Programaspersonalizados.png'
import Alimentacion from '../imagenes/Alimentacion.png'


const Main = ()=> {
    return <>
    <main className='Main'>
        <div className='presentacion-alex'>
            <h2>Quien soy?</h2>
            <p>Soy Alex, y estoy aquí hoy como su apasionado coach de fitness.
            Mi misión es guiarlos hacia un estilo de vida más saludable, lleno de energía y vitalidad.</p>
        </div>
        
        <div className='servicios'>
            <div id='servicios-card'>
                <img  className='servicios-img' src={Rutinasretadoras} alt="Rutina.png" />
                <div id='servicios-titulo-texto'>
                <h3 id='servicios-titulo'>Sesiones de entrenamientos retadoras</h3>
                <p id='servicios-parrafo' >Sumérgete en sesiones de entrenamiento que desafiarán tus límites y te impulsarán hacia un nuevo nivel de excelencia. 
                <br />Cada repetición, cada gota de sudor, te acercará un paso más a la versión más fuerte y resistente de ti mismo!</p>
                </div>
            </div>
            <div id='servicios-card-centro'>
                <img className='servicios-img-centro' src={Programaspersonalizados} alt="Personasentrenando.png" />
                <div id='servicios-titulo-texto-centro'>
                <h3 id='servicios-titulo-centro'>Entrenamientos personalizados</h3>
                <p id='servicios-parrafo-centro' >"Tu cuerpo, tu transformación, brindamos Entrenamientos personalizados con resultados garantizados y de acorde a tus prioridades
                ya sean perder peso o ganancia de masa muscular"</p>
                </div>
            </div>
            <div id='servicios-card'>
                <img  className='servicios-img' src={Alimentacion} alt="alimentos.png" />
                <div id='servicios-titulo-texto'>
                <h3 id='servicios-titulo'>Alimenta tu exito</h3>
                <p id='servicios-parrafo' >Aliméntate para brillar, Tu viaje hacia la mejor versión de ti comienza con nuestra Dieta Fitness, diseñada para transformar tu cuerpo y energizar tu vida. ¡Vive bien, come bien, sé bien</p>
                </div>
            </div>
            
        </div>
    </main>
    
    </>
}




export default Main