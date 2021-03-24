import React, { useState } from "react";

const Cadastrar = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) =>{
    console.log(user, pwd, email)
    event.preventDefault()
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={user}
            placeholder="João Silva"
            onChange={(event) => setUser(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            placeholder="joao@gamil.com.br"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={pwd}
            placeholder="******"
            onChange={(event) => setPwd(event.target.value)}
          ></input>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </article>
  );
};



export default Cadastrar;
