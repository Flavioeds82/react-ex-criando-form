import React, { useState } from "react";
const App = () => {


  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState(0);

  function typingName(event: React.ChangeEvent<HTMLInputElement>){
    return setName(event.target.value);
  }
  function typingLastName(event: React.ChangeEvent<HTMLInputElement>){
    return setLastName(event.target.value);
  }
  function typingAge(event: React.ChangeEvent<HTMLInputElement>){
    return setAge( parseInt(event.target.value));
  }


  return (
    <div className="container">
      <div className="headline">
        Formulário
      </div>
      <div>
        Nome: <br />
        <input className="input" type="text" value={name} onChange={typingName} />
      </div>

      <div>
        Sobrenome: <br />
        <input className="input" type="text" value={lastname} onChange={typingLastName} />
      </div>

      <div>
        Idade: <br />
        <input className="input" type="text" value={age} onChange={typingAge} defaultValue='0' />
      </div>

      <hr/>
      <div className="texto">
        Olá {name} {lastname}, tudo bem?<br/>
        Você tem {age} anos.
      </div>
      
    </div>
  );
}

export default App;