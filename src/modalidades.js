import React, { Component } from 'react'
import {
    Divider,
    Grid,
    Header,
    Image,
    Segment,
    Card
} from 'semantic-ui-react'
import * as img from './img/contato.PNG'
import { Carousel } from 'antd';
import handebol1 from './img/galeria/handebol/1.jpeg'
import handebol2 from './img/galeria/handebol/2.jpeg'
import futsal from './img/modalidades/futsal.jpg'
import basquete from './img/modalidades/basquete.jpg'
import handebol from './img/modalidades/handebol.jpeg'
import volei from './img/modalidades/volei.jpg'
import muay from './img/modalidades/muaythai.jpg'
import judo from './img/modalidades/judo.jpeg'
import league from './img/modalidades/league.jpg'
import cs from './img/modalidades/cs.jpg'
import truco from './img/modalidades/truco.jpg'
import sinuca from './img/modalidades/sinuca.jpg'
import free from './img/modalidades/free.jpg'
import xadrez from './img/modalidades/xadrez.jpg'
import esporte from './img/esportes/01.jpeg'
import esporte2 from './img/esportes/02.jpeg'
import esporte3 from './img/esportes/03.jpeg'
import esporte4 from './img/esportes/04.jpeg'
import esporte5 from './img/esportes/05.jpeg'
import esporte6 from './img/esportes/06.jpeg'
import esporte7 from './img/esportes/07.jpeg'
import esporte8 from './img/esportes/08.jpeg'
import esporte9 from './img/esportes/09.jpeg'
import esporte10 from './img/esportes/10.jpeg'
import esporte11 from './img/esportes/11.jpeg'
import esporte12 from './img/esportes/12.jpeg'
import esporte13 from './img/esportes/13.jpeg'
import esporte14 from './img/esportes/14.jpeg'
import esporte15 from './img/esportes/15.jpeg'
import esporte16 from './img/esportes/16.jpeg'
import esporte17 from './img/esportes/17.jpeg'



class associado extends Component {
    componentDidMount() {

        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = `var i = 0;
        var txt = 'venha se tornar um campeão.';
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

                        <Header as='h3' style={{ fontSize: '2em' ,padding: '0em 1em', textAlign: "center"}}>
                            Modalidades esportivas
                        </Header>

                        <p style={{ fontSize: '1.33em', textAlign: 'justify', padding: '0em 1em'}}>
                            Contamos com atletas de diversas modalidades, tais como: futsal, vôlei, basquete, handebol, judô e entre outras.
                            Além disso, apoiamos e incentivamos a prática do eSports, com atletas de Counter Strike Global Offensive, League of Legends
                            , Dota 2 e Free Fire.
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
                                <a href='#treino'>Modalidades</a>
                            </Divider>




                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={futsal}
                            header='Futsal'

                            description='O time de futsal treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={basquete}
                            header='Basquete'

                            description='O time de basquete treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={handebol}
                            header='Handebol'

                            description='O time de handebol treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={volei}
                            header='Vôlei'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={muay}
                            header='Muay Thai'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={judo}
                            header='Judo'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={league}
                            header='League of Legends'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={cs}
                            header='Counter Stricke Global Offensive'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                        
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={truco}
                            header='Truco'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={sinuca}
                            header='Sinuca'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={free}
                            header='Free Fire'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                            
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Card centered={true} color='blue'
                            image={xadrez}
                            header='Xadrez'

                            description='O time de vôlei treina as segundas no horario x, para mais informações entre em contato.'
                            
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
                                <a href='#galeria'>Galeria</a>
                            </Divider>

                        </Grid.Column>
                        <Grid.Column width={9}>

                            <Carousel autoplay>
                                <div>

                                    <Image src={handebol1} />
                                </div>
                                <div>
                                    <Image src={handebol2} />
                                </div>
                                <div>
                                    <Image src={esporte} />
                                </div>
                                <div>
                                    <Image src={esporte2} />
                                </div>
                                <div>
                                    <Image src={esporte3} />
                                </div>
                                <div>
                                    <Image src={esporte4} />
                                </div>
                                <div>
                                    <Image src={esporte5} />
                                </div>
                                <div>
                                    <Image src={esporte6} />
                                </div>
                                <div>
                                    <Image src={esporte7} />
                                </div>
                                <div>
                                    <Image src={esporte8} />
                                </div>
                                <div>
                                    <Image src={esporte9} />
                                </div>
                                <div>
                                    <Image src={esporte10} />
                                </div>
                                <div>
                                    <Image src={esporte11} />
                                </div>
                                <div>
                                    <Image src={esporte12} />
                                </div>
                                <div>
                                    <Image src={esporte13} />
                                </div>

                                <div>
                                    <Image src={esporte14} />
                                </div>
                                <div>
                                    <Image src={esporte15} />
                                </div>
                                <div>
                                    <Image src={esporte16} />
                                </div>
                                <div>
                                    <Image src={esporte17} />
                                </div>
                            </Carousel>


                        </Grid.Column>

                    </Grid.Row>


                </Grid>
            </Segment>
        )
    }
}
export default associado