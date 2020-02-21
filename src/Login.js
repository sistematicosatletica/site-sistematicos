import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import api from "./services/api";
import { loginUser } from "./services/auth";
import imgLogin from './img/login.png'
class LoginForm extends Component {
  state = {
    login: '',
    senha: '',
    redirect:false
  }
  handleSignIn = async e => {
    e.preventDefault();
    const { login, senha } = this.state;
    console.log(login)
  
    if (!login || !senha) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
       
        const response = await api.post("/signin", { login, senha });
       
        loginUser(response.data);
        
        this.props.history.push("/associacao");
        } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };


  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={imgLogin} /> Log-in to your account
        </Header>
          <Container>
            <Form size='large' onSubmit={this.handleSignIn}>
              <Segment stacked>
                
                <Form.Input value={this.state.login} fluid icon='user' name='login' onChange={e => this.setState({ login: e.target.value })} iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  name='senha'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Senha'
                  type='password'
                  onChange={e => this.setState({ senha: e.target.value })}
                  value={this.state.senha}
                />

                <Button color='teal' fluid size='large'>
                  Login
            </Button>
              </Segment>
            </Form>
          </Container>
          <Message>
            Não tem cadastro? <a href='/cadastro'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}


export default withRouter(LoginForm)