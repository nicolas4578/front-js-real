import {React, useState} from 'react'

const ComentarioItem = ({calificacion, comentario}) => {

    //manejo de estado de un comentario 
    //comentario y calificacion como atributos
    //mediante el uso de estados 
    const [comment,setComentario] = useState(comentario)
    const [rating, setRating] = useState(calificacion)
    const cambiarRating = () =>{
        setRating((prev)=> prev + 1)
    }
  return (
    <div className="card">
        <p><div className='num-display'>{rating}</div></p>
        <div className='text-display'>{comment}</div>
        <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px' }} onClick={cambiarRating}>cambiar calificación</button>

    </div>
  )
}

export default ComentarioItem