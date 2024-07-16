import { palavras }  from '../../palavrasLista'
import React, { useState } from 'react';


function HeaderComponent(){
    const [frase, setFrase] = useState('');

    const gerarFrase = () => {
      const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
      setFrase(`que foi, ${palavraAleatoria}`);
    };
    
    return (
        <header className="App-header">
        <h1>Gerador de Frases</h1>
        <button onClick={gerarFrase}>Gerar Frase</button>
        {frase && <p>{frase}</p>}
        <br></br>
        <img src = 'https://classic.exame.com/wp-content/uploads/2023/11/CarlosAlbertoNobrega.jpg?quality=70&strip=info&w=1200'></img>
      </header>    
    )
}

export default HeaderComponent;