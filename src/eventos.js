import React, { Component } from 'react'
import {
    Divider,
    Grid,
    Header,
    Image,
    Segment,
    Card,
} from 'semantic-ui-react'
import * as img from './img/contato.PNG'
import { Carousel } from 'antd';
import futsal from './img/futsal.jpeg'




class eventos extends Component {
    constructor(){
        super();
        this.state = {
          pictures: [],
          pictures_acao:[]
        };
      }
    componentDidMount() {

        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = `var i = 0;
        var txt = 'responsabilidade social.';
        var speed = 100;
        

        function typeWriter() {
              
                
                
                
                if (i < txt.length) {
                    
                    document.getElementById("demo").innerHTML += txt.charAt(i);
                    i++;
                    
                    setTimeout(typeWriter, speed);
                    
                  }
                 
            
         
        }
        
        typeWriter();`

        this.instance.appendChild(s);

        fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9d7a5b0433a378633e8211064edb4203&user_id=183133781%40N07&tags=integracao&format=rest&api_sig=61ab7905b107efbb36722f40a24be181')
            .then(function (response) {
                return response.json();
            })
            .then(function (j) {
                let picArray = j.photos.photo.map((pic) => {

                    // let srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_m.jpg';
                    let srcPath = 'https://live.staticflickr.com//' + pic.server + '//' + pic.id + '_' + pic.secret + '_z.jpg';
                    return (
                        <Image size='large' src={srcPath} />
                    )
                })
                this.setState({ pictures: picArray });
            }.bind(this))
        fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9d7a5b0433a378633e8211064edb4203&user_id=183133781%40N07&tags=acao-social&format=rest&auth_token=72157712713185326-095d827d17418012&api_sig=85b8d53620c0024f26468fb56e864db4')
            .then(function (response) {
                return response.json();
            })
            .then(function (j) {
                let picArray = j.photos.photo.map((pic) => {
                    
                    // let srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_m.jpg';
                    let srcPath = 'https://live.staticflickr.com//' + pic.server + '//' + pic.id + '_' + pic.secret + '_c.jpg';
                    // https://live.staticflickr.com//65535//49306474811_ec23d4ff80_m.jpg
                    return (
                        <Image  src={srcPath} />
                    )
                })
                this.setState({ picturesAcao: picArray });
            }.bind(this))
    }


    render() {
        return (

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row centered>
                        <div ref={el => (this.instance = el)} />
                        <Header centered id='demo' as='h3' style={{ fontSize: '2em', textTransform: 'uppercase' }}>

                        </Header>
                        <br />

                    </Grid.Row>
                    <Grid.Row>

                        <Header as='h2' style={{ fontSize: '2em',padding: '0em 1em' }}>
                            Ações Sociais e Eventos Esportivos
                                </Header>

                        <p style={{ fontSize: '1.33em', textAlign: 'justify',padding: '0em 1em' }}>
                            Resumidamente, uma atlética pode ser definida como uma organização estudantil que tem como objetivo promover o
                                esporte e a integração entre os estudantes. <strong>ESPORTE</strong>, essa é a palavra mais importante a ser destacada. Apesar de
                            muitos pensarem equivocadamente que as atléticas são criadas para promover festas, na verdade todas elas nasceram
                            em prol do esporte. As associações promovem treinos, campeonatos internos e externos às instituições que representam
                            e muitas outras ações. Sem os times das modalidades coletivas e a galera que dá o sangue nas individuais, uma atlética
                            se resumiria a uma empresa de eventos e definitivamente não foi para isso que elas nasceram.
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
                                <a href='#treino'>Campeonatos</a>
                            </Divider>




                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={futsal}
                            header='1º Torneio de Futsal Masculino'

                            description='Campeonato será realizado no dia 18 de Agosto de 2019 no Ginásio Municipal Osorinho'
                            extra='Mais Informações: Gustavo (94) 99166-9824'
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={img}
                            header='EM BREVE'

                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={img}
                            header='EM BREVE'

                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={img}
                            header='EM BREVE'

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
                                <a href='#galeria'>Integração com os Calouros 2019.2</a>
                            </Divider>

                        </Grid.Column>
                        <Grid.Column width={9} >

                            <Carousel autoplay adaptiveHeight>
                                {this.state.pictures}     
                            </Carousel>


                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Divider
                                as='h4'
                                className='header'
                                horizontal
                                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                            >
                                <a href='#galeria'>Ação Social do Dia das Crianças</a>
                            </Divider>

                        </Grid.Column>
                        <Grid.Column width={9} >
                            <Carousel autoplay >
                                {this.state.picturesAcao}     
                            </Carousel>


                        </Grid.Column>
                    </Grid.Row>


                </Grid>
            </Segment>
        )
    }
}
export default eventos