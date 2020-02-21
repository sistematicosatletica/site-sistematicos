import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import 'antd/dist/antd.css';
import './body.css';
import { Carousel } from 'antd';
import escudo from './img/escudo.png';
import fundacao from './img/fundacao/01.jpg'
import fundacao2 from './img/fundacao/02.jpg'
import diretoria from './img/Diretoria.png'
import backInicial from './13.jpg';
import img from '../src/img/parceiros/01.png'
import img2 from '../src/img/parceiros/02.png'
import img3 from '../src/img/parceiros/03.png'
import img4 from '../src/img/parceiros/04.png'
import Map from './GoogleMaps'
import esporte from './img/esportes/17.jpeg'
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const HomepageHeading = ({ mobile }) => (

    <Container text>
        <Header
            as='h1'
            content='Atlética que te torna um profissional campeão'
            inverted
            style={{
                fontSize: mobile ? '5vw' : '4vw',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '7vw',
            }}
        />
        <Header
            as='h2'
            content='Conheça-nos'
            inverted
            style={{
                fontSize: mobile ? '5vw' : '2vw',
                fontWeight: 'normal',
                marginTop:'1.5vw',
            }}
        />
        <Button 
        style={{
            width:'15vw',
            height:'5vw',
            fontSize: mobile ? '1.5vw' : '1.7vw',
            fontWeight: 'normal',
            marginTop:'1.5vw',
        }}
        href="#aaasi" primary size='huge'>
            Let's go
        <Icon name='right arrow' />
        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        return (

            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'

                        style={{ background: `url(${backInicial})`, backgroundPosition: 'top', backgroundSize: "100%", backgroundRepeat: 'no-repeat', padding: '4vw 0em 10vw 0em' }}
                        vertical
                    >




                        <HomepageHeading />
                    </Segment>
                    <Segment style={{ padding: '4vw 0em' }} vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header id='aaasi' as='h3' style={{ fontSize: '2em' }}>
                                        Associação Atlética Acadêmica
                                    </Header>
                                    <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                        As A.A.A´s (Associação Atlética Acadêmica) são as entidades responsáveis em promover e coordenar a parte esportiva de cada faculdade, organizando treinos e campeonatos externos e
                                        internos na Unifesspa em diversas modalidades esportivas. Esta entidade também é responsável pela integração e interação dos alunos de cada faculdade através da organização de festas e
                                        na confecção e comercialização de produtos do seu curso (canecas, camisetas, etc).
                                            <br />
                                        A Associação Atlética Acadêmica de Sistemas de Informação, vulgo Sistemáticos, da Universidade Federal do Sul e Sudeste do Pará, constitui-se de uma Organização Estudantil sem fins lucrativos, sem filiação partidária, sendo entidade
                                        laica, livre e independente de orientações filosóficas, partidárias ou religiosas e uma entidade representativa dos estudantes da Universidade Federal do Sul e Sudeste do Pará.
                                        </p>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        O mascote mais barra pesada da Região
                                        </Header>
                                    <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                        A escolha do pinguim foi uma referência ao kernel Linux, que abrange vários Sistemas Operacionais. Os mesmos são os favoritos dos programadores e desenvolvedores, devido à segurança e
                                        fluidez que os S.O’s trazem, além disso, os pinguins são excelentes caçadores e bastante fiéis ao seu bando.
                                        </p>
                                </Grid.Column>
                                <Grid.Column floated='right' width={8}>
                                    <Image bordered rounded size='medium' centered src={escudo} />
                                    <Image bordered rounded size='large' src={fundacao} />
                                    <Image bordered rounded size='large' src={fundacao2} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                    <Button href="/produtos" size='huge'>Conheca os nossos produtos</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>

                    <Segment style={{ padding: '0em' }} vertical>
                        <Grid celled='internally' columns='equal' stackable>
                            <Grid.Row textAlign='center'>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        "É uma grande revolução para a Faculdade de Sistemas"
                                    </Header>
                                    <p style={{ fontSize: '1.33em' }}> <b>Presidente</b> Gustavao Soares</p>
                                </Grid.Column>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        "Daremos todo apoio possível a essa iniciativa."
                                    </Header>
                                    <p style={{ fontSize: '1.33em' }}>

                                        CA-SI
                                     </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>

                    <Segment style={{ padding: '8em 0em' }} vertical>
                        <Grid container stackable centered>
                            <Grid.Row centered>
                                <Header as='h3' id='parcerias' style={{ fontSize: '2em', textAlign:'center' }}>
                                    Parcerias
                                </Header>
                                <br></br>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column textAlign='center'>
                                <Carousel style={{align:'middle'}} autoplay > 
                                <div>
                                    <Image bordered rounded size='large' src={img} centered />
                                </div>
                                <div>
                                    <Image bordered rounded size='large' src={img2} centered />
                                </div>
                                <div>
                                    <Image bordered rounded size='large' src={img3} centered />
                                </div>
                                <div>
                                    <Image bordered rounded size='large' src={img4} centered />
                                </div>
                                
                            </Carousel>
                            </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                
                            </Grid.Row>
                        </Grid>
                        
                        <Container text>
                            
                        <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                A Atlética Sistemáticos sempre procura parceiros e patrocinadores que acreditam no nosso trabalho
                                e tem interesse em divulgar a sua marca.
                            </p>
                            <Button as='a' href='/contato' size='large'>
                                Seja nosso Parceiro
                            </Button>

                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                            >
                                <a href='#modalidades'>Modalidades Esportivas</a>
                            </Divider>

                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Compromisso com o Esporte
                            </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                Contamos com atletas de diversas modalidades, tais como: futsal, vôlei, basquete, handebol, judô e entre outras.
                                Além disso, apoiamos e incentivamos a prática do eSports, com atletas de Counter Strike Global Offensive, League of Legends
                            , Dota 2 e Free Fire.
                            </p>
                                <div>
                                    <Image bordered rounded size='very-large' src={esporte} centered /> <br></br><br></br>
                                </div>
                                
                            <Button href='/modalidades' as='a' size='large'>
                                Conheça nossas modalidades
                            </Button>

                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                            >
                                <a href='#'>Diretoria</a>
                            </Divider>

                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Diretoria 2019-2020
                            </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                Contamos com o apoio de estudantes do curso de Sistemas de Informação voluntários que são essenciais no processo de consolidação
                                e fortalecimento da Sistemáticos.
                            </p>
                               
                            <Image bordered rounded size='large' centered src={diretoria} />
                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                            >
                                <a href='#'>Localização</a>
                            </Divider>
                        </Container>
                    </Segment>

                    <Map />
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {

        return (

            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Segment
                    inverted
                    textAlign='center'

                    style={{ background: `url(${backInicial})`, backgroundPosition: 'top', backgroundSize: "100%", backgroundRepeat: 'no-repeat', padding: '2em 0em 2em 0em' }}
                    vertical
                >




                    <HomepageHeading />
                </Segment>
                <Segment style={{ padding: '4vw 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header id='aaasi' as='h2' style={{ fontSize: '1.5em' }}>
                                    Associação Atlética Acadêmica
                                </Header>
                                <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                    As A.A.A´s (Associação Atlética Acadêmica) são as entidades responsáveis em promover e coordenar a parte esportiva de cada faculdade, organizando treinos e campeonatos externos e
                                    internos na Unifesspa em diversas modalidades esportivas. Esta entidade também é responsável pela integração e interação dos alunos de cada faculdade através da organização de festas e
                                    na confecção e comercialização de produtos do seu curso (canecas, camisetas, etc).
                                            <br />
                                    A Associação Atlética Acadêmica de Sistemas de Informação, vulgo Sistemáticos, da Universidade Federal do Sul e Sudeste do Pará, constitui-se de uma Organização Estudantil sem fins lucrativos, sem filiação partidária, sendo entidade
                                    laica, livre e independente de orientações filosóficas, partidárias ou religiosas e uma entidade representativa dos estudantes da Universidade Federal do Sul e Sudeste do Pará.
                                        </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    O mascote mais barra pesada da Região
                                        </Header>
                                <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                    A escolha do pinguim foi uma referência ao kernel Linux, que abrange vários Sistemas Operacionais. Os mesmos são os favoritos dos programadores e desenvolvedores, devido à segurança e
                                    fluidez que os S.O’s trazem, além disso, os pinguins são excelentes caçadores e bastante fiéis ao seu bando.
                                        </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={8}>
                                <Image bordered rounded size='medium' centered src={escudo} />
                                <Image bordered rounded size='large' src={fundacao} />
                                <Image bordered rounded size='large' src={fundacao2} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Button href="/produtos" size='huge'>Conheca os nossos produtos</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    "É uma grande revolução para a Faculdade de Sistemas"
                                    </Header>
                                <p style={{ fontSize: '1.33em' }}> <b>Presidente</b> Gustavao Soares</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    "Daremos todo apoio possível a essa iniciativa."
                                    </Header>
                                <p style={{ fontSize: '1.33em' }}>

                                    CA-SI
                                     </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '8em 0em' }} vertical>
                                        
                    <Container text>
                        <Header as='h3'id='parcerias' style={{ fontSize: '2em' }}>
                            Parcerias
                        </Header>
                        <Carousel autoplay>
                            <div>
                                <Image bordered rounded size='large' src={img} centered />
                            </div>
                            <div>
                                <Image bordered rounded size='large' src={img2} centered />
                            </div>
                            <div>
                                <Image bordered rounded size='large' src={img3} centered />
                            </div>
                            <div>
                                <Image bordered rounded size='large' src={img4} centered />
                            </div>
                        </Carousel>
                        <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                            A Atlética Sistemáticos sempre procura parceiros e patrocinadores que acreditam no nosso trabalho
                            e tem interesse em divulgar a sua marca.
                            </p>
                        <Button as='a' href='/contato' size='large'>
                            Seja nosso Parceiro
                            </Button>

                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                        >
                            <a href='#modalidades'>Modalidades Esportivas</a>
                        </Divider>

                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Compromisso com o Esporte
                            </Header>
                        <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                            Contamos com atletas de diversas modalidades, tais como: futsal, vôlei, basquete, handebol, judô e entre outras.
                            Além disso, apoiamos e incentivamos a prática do eSports, com atletas de Counter Strike Global Offensive, League of Legends
                        , Dota 2 e Free Fire.
                            </p>
                            <div>
                                    <Image bordered rounded size='very-large' src={esporte} centered /> <br></br><br></br>
                             </div>
                        <Button href='/modalidades' as='a' size='large'>
                            Conheça nossas modalidades
                            </Button>

                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                        >
                            <a href='#'>Diretoria</a>
                        </Divider>

                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Diretoria 2019-2020
                            </Header>
                        <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                            Contamos com o apoio de estudantes do curso de Sistemas de Informação voluntários que são essenciais no processo de consolidação
                            e fortalecimento da Sistemáticos.
                            </p>
                        <Image bordered rounded size='large' centered src={diretoria} />
                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                        >
                            <a href='#'>Localização</a>
                        </Divider>
                    </Container>
                </Segment>

                <Map />
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}
export default ResponsiveContainer