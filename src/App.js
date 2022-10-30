
/*import './App.css';
import Header from './Header';

function App(props) {
  return (
    <div className="App">
      <Header/>
    
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';



export default function App() {

  // Declare uma nova variável de state, a qual chamaremos de "count"

  const [count, setCount] = useState(0);



  return (

    <div>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>

        Click me

      </button>

    </div>

  );

}*/



/*
  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
  },[count]);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );*/


/*   return(
     (nome =="Chaiane")?
     <div>
       <p>{nome}</p>
     </div>:
     <div>
       <p>Preciso do nome Deivid!</p>
     </div>
     )
 */

import React, { useState, useEffect } from 'react';

export default function App() {
  // const [count, setCount] = useState(0);
  //const [nome, setNome] = useState("Deivid");
  const [hora, setHora] = useState(23);
  const [minuto, setMinuto] = useState(58);
  const [segundo, setSegundo] = useState(58);

  useEffect(() => {

  
      const interval = setInterval(() => {
      return( 
        setSegundo(segundo+1)
       (segundo) <= 59 ?
        segundo :
       ( setSegundo(0),
        setMinuto(minuto+1)),
        (minuto) <= 59 ?
         minuto :
        (setMinuto(0),
         setHora(hora+1)),
        (hora) < 24 ?
         hora :
        setHora(1)
        )
      }, 1000); 

      return () => clearInterval(interval);
    });



  return (
    <div>
      <h2>{hora}:{minuto}:{segundo}</h2>
    </div>
  );

}
