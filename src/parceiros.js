import React, { Component } from 'react';
import img from '../src/img/parceria1.jpg'
import img2 from '../src/img/parceria2.jpg'
import {
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react'
export class parceiros extends Component {
    render() {
        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Parcerias
                            </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                No caso das atléticas é legal buscar parcerias com comércio local e academias para fazer um esquema de sócio-torcedor da atlética. A pessoa que se filia ao sócio-torcedor paga uma taxa,
                                e assim tem direito a descontos em vários estabelecimentos que a atlética tem parceria. Tá vendo? É uma maneira indireta da grana entrar, mas que ajuda bastante, principalmente por ser um
                                valor mais fixo. <br/><br/>Outra maneira é conseguir desconto com os estabelecimentos que a atlética precisa consumir o produto, como loja de artigos esportivos, clubes em que se alugam quadras, etc.
                        Ao combinar direitinho com o dono e se comprometer a sempre comprar/dispor do serviço dele, rola de conseguir um preço melhor.</p>
                            
                        </Grid.Column>
                        <Grid.Column floated='right' width={8}>
                            <Image bordered rounded size='large' src={img} centered/>
                            <p style={{ fontSize: '1.33em' , textAlign: 'center' }}>Super Strong Academia</p>
                            <Image bordered rounded size='large' src={img2} centered />
                            <p style={{ fontSize: '1.33em' , textAlign: 'center' }}>English Academy</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
};

export default parceiros;



