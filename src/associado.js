import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
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
import carteira_frente from '../src/img/carteira_frente.png'
import carteira_verso from '../src/img/carteira_verso.png'
class associado extends Component {
    render() {
        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Nossos Planos de Associação
                                    </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                As seguintes informações são direcionadas àqueles que querem se associar à Associação Atlética Acadêmica de Sistemas de Informação da UNIFESSPA - SISTEMÁTICOS. Os afiliados
                                à A.A.A.S.I.U - SISTEMÁTICOS terão direito a:
                                <ul>
                                    <li>Descontos em produtos, eventos e nos locais parceiros da Sistemáticos ;</li>
                                    <li>Carteirinha de sócio;</li>
                                    <li>Participação em sorteios;</li>
                                    <li>Participar de forma ativa das equipes esportivas se aprovados nos processos seletivos;</li>
                                    <li>Usufruir dos espaços disponíveis pela A.A.A.S.I.U - SISTEMÁTICOS.</li>
                                </ul>
                                <Form.Group inline>
                                <Image bordered rounded size='large' src={carteira_frente} centered/>
                                <p style={{ fontSize: '1.33em', textAlign: 'center' }}>Frente</p>
                                <Image bordered rounded size='large' src={carteira_verso} centered/>
                                <p style={{ fontSize: '1.33em', textAlign: 'center' }}>Verso</p>
                                <br/>
                                </Form.Group>
                                Afiliando-se, você garante descontos e facilidades por 1 ano!
                                Obs: após o recebimento dos seus dados, a Diretoria da SISTEMÁTICOS entrará em contato para finalizar sua adesão.
                                        <br />

                            </p>
                            <Header as='h4' style={{ fontSize: '2em' }}>
                                Plano Junior
                                    </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                Associação Júnior (Carteira de Associação) no valor de R$ 50.00.
                            </p>
                            <Header as='h4' style={{ fontSize: '2em' }}>
                                Plano Sênior
                                    </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                Associação Sênior (Carteira de Associação+Caneca+Tirante) no valor de R$ 80.00
                            </p>
                            <Header as='h4' style={{ fontSize: '2em' }}>
                                Plano FullStack
                                    </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                Associação Full Stack( Carteira de Associação e Meia Estudante MEP Brasil+Caneca+Tirante) no valor de R$ 110.00
                            </p>
                            <Header as='h4' style={{ fontSize: '2em' }}>
                                Plano Master
                                    </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                Associação Master ( Carteira de Associação + meia entrada (MEP Brasil)) no valor de R$ 75.00
                            </p>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}
export default associado