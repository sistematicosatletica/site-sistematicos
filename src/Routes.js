import React, {Component} from 'react';
import { isAuthenticated } from './services/auth';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import parceiros from './parceiros';
import produtos from './produtos'
import Home from './Body';
import contato from './contato';
import associacao from './associacao';
import modalidades from './modalidades';
import login from './Login';
import Cadastro from './cadastro';
import associado from './associado';
import evento from './eventos'
import developers from './developers'
const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route
      {...rest}
      
      render={props =>
        
        isAuthenticated() ? (
          <Component { ... props}/>
      ) : (<Redirect to={{pathname: '/associado', state:{from:props.location}}}
      />)
      }
    />
  );

  const IsLogout = ({ component: Component, ...rest }) => (
    
    <Route
      {...rest}
      
      render={props =>
        
        !isAuthenticated() ? (
          <Component { ... props}/>
      ) : (<Redirect to={{pathname: '/', state:{from:props.location}}}
      />)
      }
    />
  );

export class Routes extends Component {
    render() {
        return (
          
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/parceiros' component={parceiros}/>
                    <Route path='/contato' component={contato}/>
                    <Route path='/produtos' component={produtos}/>
                    <Route path='/eventos' component={evento}/>
                    <Route path='/developers' component={developers}/>
                    <Route path='/modalidades' component={modalidades}/>
                    <PrivateRoute path='/associacao' component={associacao}/>
                    <IsLogout path='/login' component={login}/>
                    <IsLogout path='/cadastro' component={Cadastro}/>
                    <Route path='/associado' component={associado} />
                    <Redirect to="/" />

                </Switch>
            
            </main>
            
        )
    }   
};

export default Routes;