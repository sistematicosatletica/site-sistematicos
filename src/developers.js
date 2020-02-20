import React, { Component } from 'react'
import {
    Divider,
    Grid,
    Header,
    Segment,
    Card,
    Image
} from 'semantic-ui-react'
import * as img from './img/contato.PNG'
import { Carousel } from 'antd';
import futsal from './img/futsal.jpeg'
import react from './img/frameworks/react.png'
import express from './img/frameworks/express.png'
import node from './img/frameworks/nodejs.jpg'
import postgres from './img/frameworks/postgres.png'
import victor from './img/developers/Victor.jpg'
import luan from './img/developers/LuanR.JPEG'
import leandro from './img/developers/Leandro.jpg'
import ej from './img/logo-ej.png'
import cs from './img/cs.jpeg'
import insta from './img/instagram.png'
import linkedin from './img/linkedin.png'
import lattes from './img/lattes.png'
class eventos extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }
    componentDidMount() {

        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = `var i = 0;
        var txt = 'Developers and frameworks.';
        var speed = 100;
        
        
        function typeWriter() {
            
            
            
            
            if (i < txt.length) {
                
                document.getElementById("demo2").innerHTML += txt.charAt(i);
                i++;
                
                setTimeout(typeWriter, speed);
                
            }
            
            
            
        }
        
        typeWriter();`

        /*this.instance.appendChild(s);
        fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b5649a12d5ad2418b2c646abe9c9f8c3&user_id=183133781%40N07&tags=integracao&format=json&nojsoncallback=1&auth_token=72157710073127551-20d5aab18592bc4f&api_sig=736a3e34b0aa30cd368328c5650f8dc9')
        .then(function (response) {
            return response.json();
        })
        .then(function (j) {
            let picArray = j.photos.photo.map((pic) => {
                
                let srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
                return (
                    // <img alt="dogs" src={srcPath}></img>
                    <Image bordered rounded src={srcPath} />
                    )
                })
                this.setState({ pictures: picArray });
            }.bind(this))*/
        this.instance.appendChild(s);
    }


    render() {
        return (

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row centered>
                        <div ref={el => (this.instance = el)} />
                        <Header centered id='demo2' as='h2' style={{ fontSize: '2em', textTransform: 'uppercase' }}>

                        </Header>
                        <br />

                    </Grid.Row>
                    <Grid.Row>

                        <Header as='h3' style={{ fontSize: '2em',padding: '0em 1em' }}>
                            Frameworks utilizados
                        </Header>

                        <p style={{ fontSize: '1.33em', textAlign: 'justify',padding: '0em 1em' }}>
                            Nos últimos anos, talvez por culpa da revolução Ajax, o JavaScript deixou de ser uma toy language e ganhou muita força.
                            Foi nessa expansão dos horizontes da linguagem que surgiu o Node, um ambiente de execução JavaScript baseado na engine V8 da Google.
                            Agora temos JavaScript também no lado do servidor! Node.js segue o paradigma de programação orientada a eventos e non-blocking I/O,
                            resultando em ótima performance para determinados cenários de aplicações real-time.
                        </p>
                        <p style={{ fontSize: '1.33em', textAlign: 'justify',padding: '0em 1em' }}>
                            Utilizamos a stack mais utilizada no mercado atualmente: React, Node JS, Express JS e futuramente com integração com banco de dados PostgreSQL.
                        </p>


                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column id='treino' width={16}>

                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                            >
                                <a href='#treino'>Stack JavaScript</a>
                            </Divider>




                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={react}
                            header='React'

                        //description='Campeonato será realizado no dia 18 de Agosto de 2019 no Ginásio Municipal Osorinho'
                        //extra='Mais Informações: Gustavo (94) 99166-9824'
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={node}
                            header='Node JS'

                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={postgres}
                            header='PostgreSQL'

                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={express}
                            header='Express JS'

                        />
                    </Grid.Column>

                    <Grid.Row id='galeria' centered>
                        <Grid.Column width={16}>
                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                            >
                                <a href='#galeria'>Developers</a>
                            </Divider>

                        </Grid.Column>
                        <Grid.Column width={12} style={{ padding: '10px' }}>

                            <Grid columns={2} relaxed='very' padded='horizontally'>
                                <Grid.Column width={4} style={{ padding: '10px' }}>
                                    <Image src={victor} centered size={"medium"} style={{ borderRadius: '50%', border: '5px solid rgb(37, 40, 57)' }} />
                                </Grid.Column>
                                <Grid.Column width={12}>

                                    <Card fluid color='blue'>
                                        <Card.Content>
                                            
                                            <Grid.Row >
                                                <Grid.Column width={2}>
                                                <Image src={insta} width="25" height="25"href="https://www.instagram.com/victor.souza_sys/" style={{padding:"10px"}}/>
                                                <Image src={linkedin} width="25" height="25"href="https://www.linkedin.com/in/victor-souza-b5003314b/" style={{padding:"10px"}}/> 
                                                <Image src={lattes} width="25" height="25"href="http://lattes.cnpq.br/4358955266390766" style={{padding:"10px"}}/> 
                                                </Grid.Column>
                                                
                                            </Grid.Row>
                                                
                                             
                                            <Card.Header>Victor Sousa</Card.Header>
                                            <Card.Meta>victoor.souza@gmail.com</Card.Meta>
                                            <Card.Description>
                                                <p style={{ fontSize: '1.1em', textAlign: 'justify' }}>
                                                    Graduação em andamento no curso de Sistemas de Informação na Universidade Federal do Sul e Sudeste do Pará,
                                                    Atualmente é monitor da Universidade Federal do Sul e Sudeste do Pará.
                                                </p>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>

                            </Grid>


                            <br />
                            <Divider />
                            <br />

                            <Grid columns={2} relaxed='very' padded='horizontally'>
                                <Grid.Column width={4} style={{ padding: '10px' }}>
                                    <Image src={luan} centered size={"medium"} style={{ borderRadius: '50%', border: '5px solid rgb(37, 40, 57)' }} />

                                </Grid.Column>
                                <Grid.Column width={12}>


                                    <Card fluid color='blue'>
                                        <Card.Content>
                                        <Grid.Row >
                                                <Grid.Column width={2}>
                                                <Image src={insta} width="25" height="25"href="https://www.instagram.com/luan.silva_7/" style={{padding:"10px"}}/>
                                                <Image src={linkedin} width="25" height="25"href="https://www.linkedin.com/in/luan-silva-649010144/" style={{padding:"10px"}}/> 
                                                <Image src={lattes} width="25" height="25"href="http://lattes.cnpq.br/7893890557809352" style={{padding:"10px"}}/> 
                                                </Grid.Column>                                                
                                        </Grid.Row>
                                            <Card.Header>Luan Oliveira</Card.Header>
                                            <Card.Meta>luansilvatec@gmail.com</Card.Meta>
                                            <Card.Description>
                                                <p style={{ fontSize: '1.1em', textAlign: 'justify' }}>
                                                Graduando em Bacharelado em Sistemas de Informação na Universidade Federal do Sul e Sudeste do Pará - UNIFESSPA. 
                                                Associado a Sociedade Brasileira de Computação - SBC. Entusiasta e Pesquisador da área de Deep Learning, trabalhando 
                                                com algoritmos supervisionados aplicados no reconhecimento de imagens de raio X. Já atuou como bolsista do Centro de 
                                                Registro e Controle Acadêmico - CRCA da Universidade Federal do Sul e Sudeste do Pará. Foi bolsista de Iniciação Científica 
                                                no Laboratório de Computação Científica - LCC, trabalhando com Mineração de Dados e Inteligência Artificial. Possui certa 
                                                experiência com programação, nas linguagens C, SQL, Java, Python, Javascript (React e Node.JS) e R. Possui experiência com 
                                                tratamento de Bases de Dados Públicos Abertos (Enem, DATASUS, CNES, SAEB, Censo Escolar e entre outros). Possui experiência
                                                em projetos de ensino e extensão, sendo monitor das disciplinas de Programação 1 e Programação 2 para as turmas de Sistemas de 
                                                Informação e Engenharia da Computação, além de instrutor no Programa de Inclusão Digital - PID UNIFESSPA e atualmente no Projeto 
                                                de Ensino de Lógica de Programação nas Escolas Públicas e Infocentros de Marabá. Desenvolvedor Android.
                                                </p>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>

                                </Grid.Column>

                            </Grid>
                            <br />
                            <Divider />
                            <br />
                            <Grid columns={2} relaxed='very' padded='horizontally'>
                                <Grid.Column width={4} style={{ padding: '10px' }}>
                                    <Image src={leandro} centered size={"medium"} style={{ borderRadius: '50%', border: '5px solid rgb(37, 40, 57)' }} />
                                </Grid.Column>
                                <Grid.Column width={12}>

                                    <Card fluid color='blue'>
                                        <Card.Content>
                                        <Grid.Row >
                                                <Grid.Column width={2}>
                                                <Image src={insta} width="25" height="25"href="https://www.instagram.com/euleandroaraujo/" style={{padding:"10px"}}/>
                                                <Image src={linkedin} width="25" height="25"href="https://www.linkedin.com/in/leandro-dos-santos-araujo/" style={{padding:"10px"}}/> 
                                                <Image src={lattes} width="25" height="25"href="http://lattes.cnpq.br/9722104301140835" style={{padding:"10px"}}/> 
                                                </Grid.Column>                                                
                                        </Grid.Row>
                                            <Card.Header>Leandro Araujo</Card.Header>
                                            <Card.Meta>leandronetlink@gmail.com</Card.Meta>
                                            <Card.Description>
                                                <p style={{ fontSize: '1.1em', textAlign: 'justify' }}>
                                                    Tem experiência na área de Desenvolvimento para Web, Machine Learning aplicado ao Mercado de Ações e Desenvolvimento Mobile.
                                                    Participou de projetos que envolveram a produção e manutenção de aplicações web e mobile.
                                                </p>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>

                            </Grid>



                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={16}>
                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                            >
                                <a href='#galeria'>Recomendações</a>
                            </Divider>

                        </Grid.Column>
                        <Header as='h3' style={{ fontSize: '2em',padding: '0em 1em' }}>
                            We are with Exception Jr and CS Design.
                        </Header>

                        <p style={{ fontSize: '1.33em', textAlign: 'justify',padding: '0em 1em' }}>
                            Como amantes da tecnologia e das boas práticas profissionais, recomendamos que possíveis empresas interessadas em quaisquer
                            inovações tecnológicas procurem a Exception Jr e a CS Design. <br></br>
                            <br></br>A Exception Jr é a empresa júnior do curso de Sistemas de Informação da UNIFESSPA,
                            que possui como objetivo oferecer soluções em software para gestão da informação, pondo em prática todo o conteúdo que é adquirido durante o curso.
                        </p>

                        <Grid.Column width={16} style={{ padding: '10px',padding: '0em 1em' }}>
                            <Image src={ej} centered size={"medium"} style={{ borderRadius: '50%', border: '5px solid rgb(37, 40, 57)' }} />
                            <br></br>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                            <strong>Para mais informações</strong>, <a href="https://www.instagram.com/exception.jr/">clique aqui</a>
                            </p>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>


                        <p style={{ fontSize: '1.33em', textAlign: 'justify',padding: '0em 1em' }}>
                        Cleber Soares fundador da CS Creations antes chamada CS Design, surgiu em 2019 com a ideia de oferecer o que tem de melhor no Design.
                        Nosso objetivo é oferecer serviço de Design para empresas e micro-empreendedores que queiram se destacar no mercado com um ótimo trabalho 
                        de Design, ou simplesmente divulgar seu evento com uma ótima campanha de design marketing, nosso foco é em trabalhos para as Mídias Digitais. 
                        <br/><br/>Se você pretende aprender Design Gráfico, temos as melhores opções de aprendizado. São 3 cursos. 
                        
                        <br/><br/><strong>DG Essential</strong>: Focado para os verdadeiros iniciantes, um curso para inciar bem no Design Gráfico. 
                        <br/><strong>Acesse</strong>: <a href="http://bit.ly/curso-DG-Essencial">http://bit.ly/curso-DG-Essencial</a>
                        
                        <br/><br/><strong>Profissão Criativo</strong>: Se você sofre de bloqueio criativo esse é para você, destrave sua criatividade. Um curso para qualquer nível de conhecimento. 
                        <br/><strong>Acesse</strong>: <a href="http://bit.ly/criatividade-iniciantes">http://bit.ly/criatividade-iniciantes</a> 
                        
                        <br/><br/><strong>DG Pro</strong>: Um curso avançado que irá te ensinar a criar um portfólio de destaque. Se você deseja ter uma vida financeira dependendo apenas de Design, esse curso é para você. Aprenda as principais estratégias de marketing e se destaque no mercado. 
                        <br/><strong>Acesse</strong>: <a href="http://bit.ly/dg-pro">http://bit.ly/dg-pro</a>
                        <br/><br/><strong>Entre em contato</strong>: (94) 9.8196-5090
                        <br/><strong>Siga-nos na redes sociais</strong>: csdesign.artes
                        <br/><strong>Mais informações</strong>: <a href="http://bit.ly/cscreations">bit.ly/cscreations</a>
                        </p>

                        <Grid.Column width={16} style={{ padding: '10px' }}>
                            <Image src={cs} centered size={"medium"} style={{ borderRadius: '50%', border: '5px solid rgb(37, 40, 57)' }} />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>
        )
    }
}
export default eventos