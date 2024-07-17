import { palavras }  from '../../palavrasLista'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../services/api';

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

const Imagem = styled.img`
height: 500px;
width: 500px;
`

function HeaderComponent(){
    const [frase, setFrase] = useState('');
    const [cat, setCat] = useState();

    useEffect(() => {
      api
        .get()
        .then((response) => setCat(response.data[0]))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    const gerarFrase = () => {
      const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
      setFrase(`Que foi, ${palavraAleatoria}`);
    };

    const  gerarConteudo = () => {
      api
      .get('/')
      .then((response) => {
        setCat(response.data[0]);
        gerarFrase();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
    };

    

    return (
        <Header>
        <h1>Gerador de Frases</h1>
        <Botao onClick={gerarConteudo}>Gerar Frase</Botao>
        {frase && <p>{frase}</p>}      
        {frase && <Imagem src = { cat?.url }></Imagem>}
        <br></br>        
      </Header>    
    )
}

export default HeaderComponent;