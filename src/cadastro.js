import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios'
import login from './img/login.png'
const baseUrl = 'http://localhost:4000/user'
const initialState = {
  user: { nome: '', login: '', senha: '', confirmPassword: '' },
  list: []
}


class Cadastro extends Component {
  updateField(event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    // eslint-disable-next-line no-undef
    this.setState({ user })
  }

  state = { ...initialState }

  envio() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(resp => {
        this.setState({ user: initialState.user })
      })


  }
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={login}/> Log-in to your account
      </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input name='nome' fluid icon='user' iconPosition='left' placeholder='Name' value={this.state.user.nome} onChange={e => this.updateField(e)} />
              <Form.Input name='login' fluid icon='user' iconPosition='left' placeholder='E-mail address' value={this.state.user.login} onChange={e => this.updateField(e)} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='senha'
                placeholder='Password'
                type='password'
                value={this.state.user.senha}
                onChange={e => this.updateField(e)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='confirmPassword'
                placeholder='Confirm password'
                type='password'
                value={this.state.user.confirmPassword}
                onChange={e => this.updateField(e)}
              />

              <Button color='teal' fluid size='large' onClick={e => this.envio(e)}>
                Cadastrar
          </Button>

            </Segment>
          </Form>
          <Message>
            Ja possui cadastro? <a href='/login'>Sign</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}



export default Cadastro;