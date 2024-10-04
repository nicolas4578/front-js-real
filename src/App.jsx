import {React, useState} from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';
function App() {

    const [commments, setCommments] = useState(comentarios)

    const titulo = "App de comentarios";
    const Autor = "Nicolas Fandiño"
    const ficha = 2902093
    const centro = "Centro de gestion de la tecnologia informatica"
    
    
    const loading = false;
    const showComments = true;
    if(loading === true) return (<h1>Cargando comentarios ...</h1>)
  return (
    <div className='container'>

        <Header titulo={titulo}  Autor={Autor} ficha={ficha} centro={centro}/>
        <div>{titulo}</div>
        <div>{Autor}</div>
        {showComments &&
            (<div className='commentarios'>
                <h3>Comentarios: {comentarios.length} </h3>
                <ul>
                    {
                        commments.map(comentario => 
                          <ComentarioItem 
                            key={comentario.id}
                            comentario={comentario.comentario}
                            calificacion={comentario.calificacion} />
                        )
                    }
                </ul>
            </div>
        )
        
        }
        

    </div>
    
  )
}

export default App