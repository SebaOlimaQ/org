import Colaborador from "../Colaborador";
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
    //Destruccturacion
    const {colorPrimario, colorSecundario, titulo,id } = props.datos
    const estiloTitulo = {borderColor: colorPrimario}
    const { colaboradores, eliminarColaborador,actualizarColor,like} = props

    

    return <>
    {
        colaboradores.length > 0 &&( <section className="equipo" style={{backgroundColor:hexToRgba(colorPrimario,0.6)}}>
            <input
                type="color"
                className="input-color"
                value={hexToRgba(colorPrimario,0.6)}
                //onChange es un tipo de evento en el cual hay que indicarle una funcion y esa funcion se va a ejecutar cada vez que exista un cambio en el input
                onChange={(evento) =>{
                    actualizarColor(evento.target.value,id)
                    
                }}
            />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">

        {
            colaboradores.map((colaborador,index) => <Colaborador
             datos={colaborador} 
             key={index} 
             colorPrimario={colorPrimario}
             eliminarColaborador={eliminarColaborador}
             like={like}
            /> )
        }
        </div>
    </section> )
    }
</>;
}
 
export default Equipo;