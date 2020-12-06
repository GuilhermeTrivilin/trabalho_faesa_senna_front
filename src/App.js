import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap'
import { handleChangeText } from './helpers/inputChanges';
import { login } from './services/auth';

import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    window.history.pushState("", "", `/login?email=${email}&password=${password}`);
    const response = await login({ email, password })
    toast(response.data.message);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{width: "100vw", height: '100vh'}}>

        <Card
          bg={"light"}
          text={"liight"}
          className="w-50"
        >
          <Card.Header>Entrar</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" onChange={item => handleChangeText(item, setEmail)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" onChange={item => handleChangeText(item, setPassword)} />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleLogin}>
                Enviar
      </Button>
            </Form>
          </Card.Body>
        </Card>



      </div>

      <ToastContainer />
    </>
  );
}

export default App;
