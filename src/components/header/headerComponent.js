import { palavras }  from '../../palavrasLista'
import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
 background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Botao = styled.button`
background: #bf3f00 ;
  border-radius: 3px;
  border: 2px solid #bf3f00;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function HeaderComponent(){
    const [frase, setFrase] = useState('');

    const gerarFrase = () => {
      const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
      setFrase(`Que foi, ${palavraAleatoria}`);
    };

    return (
        <Header>
        <h1>Gerador de Frases</h1>
        <Botao onClick={gerarFrase}>Gerar Frase</Botao>
        {frase && <p>{frase}</p>}      
        {frase && <img src = 'https://classic.exame.com/wp-content/uploads/2023/11/CarlosAlbertoNobrega.jpg?quality=70&strip=info&w=1200'></img>}
        <br></br>
        
      </Header>    
    )
}

export default HeaderComponent;