import React, { Component } from 'react'
import {
    Divider,
    Grid,
    Header,
    Segment,
    Card} from 'semantic-ui-react'
import futsal from './img/produtos/camisa-futsal.jpg'
import torcedor from './img/produtos/camisa-torcedor.png'
import caneca from './img/produtos/caneca.jpg'
import copo from './img/produtos/copo.jpg'
import eports from './img/produtos/e-sports.jpeg'



class produtos extends Component {
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
        var txt = 'Produtos.';
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
                <Header centered id='demo2' as='h3' style={{ fontSize: '2em', textTransform: 'uppercase' }}>
                
                </Header>
                <br />
                
                </Grid.Row>
                <Grid.Row>
                
                <Header as='h3' style={{ fontSize: '2em',padding: '0em 1em', }}>
                Produtos Sistemáticos
                </Header>
                
                <p style={{ fontSize: '1.33em', textAlign: 'justify',padding: '0em 1em', }}>
                Temos trabalhado bastante na elaboração de nossos produtos, inclusive em breve teremos novidades :)
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
                <a href='#treino'>Produtos</a>
                </Divider>
                
                
                </Grid.Column>
                </Grid.Row>
                <Grid.Column centered width={8}>
                <Card centered={true} color='blue'
                image={futsal}
                header='Camisa oficial de futsal'
                
                //description='Campeonato será realizado no dia 18 de Agosto de 2019 no Ginásio Municipal Osorinho'
                //extra='Mais Informações: Gustavo (94) 99166-9824'
                />
                </Grid.Column>
                <Grid.Column width={8}>
                <Card centered={true} color='blue'
                image={torcedor}
                header='Camiseta Versão torcedor'
                
                />
                </Grid.Column>
                <Grid.Column width={8}>
                <Card centered={true} color='blue'
                image={caneca}
                header='Caneca e Tirante'
                
                />
                </Grid.Column>
                <Grid.Column width={8}>
                <Card centered={true} color='blue'
                image={copo}
                header='Copo Sistemático'
                
                />
                </Grid.Column>
                
                <Grid.Column width={8}>
                <Card centered={true} color='blue'
                image={eports}
                header='Camiseta e-Sports'
                
                />
                </Grid.Column>
                
                </Grid>
                </Segment>
                )
            }
        }
        export default produtos