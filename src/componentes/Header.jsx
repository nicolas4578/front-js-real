import React from 'react'


const Header = ({Autor, titulo, ficha, centro}) =>{

        const headerStyles = {
            backgroundColor : 'black' ,
            color: 'white',
            height: "100%"
        }


  return (
    <header style={headerStyles}>
        <div className='container'>
            <p style={{color: 'blue'}}>titulo:{titulo}</p>
            <p>Autor:{Autor}</p>
            <p>ficha:{ficha}</p>
            <p>centro:{centro}</p>

        </div>
    </header>
  )
}

export default Header