import React, { Component } from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Group,
    Responsive,
    Segment,
    Form,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import { Icon } from 'antd';
import img from './img/contato.PNG'
import Associado from './associado'
export class contato extends Component {
    render() {
        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Quer nos Conhecer?
                                    </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                As seguintes informações são direcionadas àqueles que querem abraçar o projeto da Associação Atlética Acadêmica de Sistemas de Informação da UNIFESSPA - SISTEMÁTICOS.  Procure-nos em:
                                <br />
                                <ul>
                                    <p><Icon type="environment" /> Endereço: Folha 31, Quadra 07, Lote Especial, s/n.º - Nova Marabá, Marabá - PA, 68507-590</p>
                                    <p><Icon type="instagram" /> Instagram: @sistematicosatletica</p>
                                    <p><Icon type="facebook" /> Facebook: Atletica Sistematicos</p>

                                </ul>
                            </p>
                            <br></br>
                            <Image bordered rounded size='large' src={img} centered />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Associado />
            </Segment>
        )
    }
};

export default contato;