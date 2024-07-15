import React, { useState } from 'react';
import './App.css';

const palavras = [
  'amigo', 'mãe', 'pai', 'irmão', 'irmã', 'vizinho', 
  'colega', 'professor', 'médico', 'engenheiro', 'artista', 
  'atleta', 'escritor', 'cientista', 'advogado', 'ator', 
  'atriz', 'cantor', 'dançarino', 'chefe', 'gerente', 
  'diretor', 'secretário', 'enfermeiro', 'motorista', 
  'piloto', 'policial', 'bombeiro', 'soldado', 'arquiteto', 
  'carpinteiro', 'pintor', 'jornalista', 'fotógrafo', 
  'editor', 'designer', 'programador', 'contador', 
  'economista', 'psicólogo', 'consultor', 'analista', 
  'vendedor', 'representante', 'corretor', 'promotor', 
  'juiz', 'bibliotecário', 'tradutor', 'intérprete', 
  'guia', 'recepcionista', 'porteiro', 'segurança', 
  'garçom', 'cozinheiro', 'padeiro', 'cabeleireiro', 
  'maquiador', 'manicure', 'esteticista', 'personal trainer', 
  'coach', 'consultor', 'terapeuta', 'cirurgião', 'dentista', 
  'veterinário', 'psiquiatra', 'nutricionista', 'fisioterapeuta', 
  'assistente social', 'professor de yoga', 'professor de pilates', 
  'babá', 'governanta', 'cuidador', 'acompanhante', 'orientador', 
  'instrutor', 'treinador', 'mentor', 'voluntário', 
  'ambientalista', 'ativista', 'filantropo', 'empresário', 
  'investidor', 'acionista', 'parceiro', 'colaborador', 
  'cliente', 'consumidor', 'usuário', 'paciente', 
  'mecânico', 'eletricista', 'encanador', 'jardineiro', 
  'zelador', 'caseiro', 'vigia'
];


function App() {
  const [frase, setFrase] = useState('');

  const gerarFrase = () => {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setFrase(`que foi, ${palavraAleatoria}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerador de Frases</h1>
        <button onClick={gerarFrase}>Gerar Frase</button>
        {frase && <p>{frase}</p>}
        <img src = 'https://classic.exame.com/wp-content/uploads/2023/11/CarlosAlbertoNobrega.jpg?quality=70&strip=info&w=1200'></img>
      </header>
    
    </div>
  );
}

export default App;
