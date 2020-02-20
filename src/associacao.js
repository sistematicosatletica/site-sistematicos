import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Segment } from 'semantic-ui-react'
import axios from 'axios'


const baseUrl = 'http://localhost:4000/associado'
const initialState = {
    user: { telefone: '', curso: '', cpf: '', rg: '', universidade: '', data_nascimento: '', orgao_expedidor: '', endereco: '', complemento: '', bairro: '', munic: '', uf: '', cep: '' },
    associacao: { tipo_associacao: '', status_associacao: 0 }
}


class FormExampleFieldControl extends Component {


    state = { ...initialState }
    updateField(event) {
        const user = { ...this.state.user }
        const associacao = { ...this.state.associacao }
        associacao[event.target.name] = event.target.value
        user[event.target.name] = event.target.value
        // eslint-disable-next-line no-undef
        this.setState({ user })
        this.setState({ associacao })
    }
    envio() {
        const user = this.state.user
        const associacao = this.state.associacao
        //const method = user.id ? 'put' : 'post'
        //const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        /*Associação*/

        axios.post("http://localhost:4000/associacao", associacao)
            .then(res => {
                this.setState({ associacao: initialState.associacao })
                //console.log(resp)
            })
        /*Enviando os parametros do associado apos os parametros da tabela associação*/
        axios.post('http://localhost:4000/associado', user)
            .then(resp => {
                this.setState({ user: initialState.user })
                //console.log(resp)
            })



    }
    //handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Form>
                <Segment>
                    <label>Curso</label>
                    <Form.Input name='curso' placeholder='Curso' value={this.state.user.curso} onChange={e => this.updateField(e)} />
                    <label>Universidade</label>
                    <Form.Input name='universidade' placeholder='Universidade' value={this.state.user.universidade} onChange={e => this.updateField(e)} />
                    <Form.Group inline >
                        <label>RG</label>
                        <Form.Input name='rg' placeholder='RG' value={this.state.user.rg} onChange={e => this.updateField(e)} required />
                        <label>Órgão Expedidor</label>
                        <Form.Input name='orgao_expedidor' placeholder='Órgão Expedidor' value={this.state.user.orgao_expedidor} onChange={e => this.updateField(e)} />
                        <label>Data de Nascimento</label>
                        <Form.Input type='date' name='data_nascimento' placeholder='dia/mês/ano' value={this.state.user.data_nascimento} onChange={e => this.updateField(e)} required />
                        <label>CPF</label>
                        <Form.Input name='cpf' placeholder='CPF' value={this.state.user.cpf} onChange={e => this.updateField(e)} />
                    </Form.Group>

                    <label>Endereço</label>
                    <Form.Input name='endereco' placeholder='Endereço' value={this.state.user.endereco} onChange={e => this.updateField(e)} />
                    <label>Complemento</label>
                    <Form.Input name='complemento' placeholder='Complemento' value={this.state.user.complemento} onChange={e => this.updateField(e)} />
                    <Form.Group inline>
                        <label>Bairro</label>
                        <Form.Input name='bairro' placeholder='Bairro' value={this.state.user.bairro} onChange={e => this.updateField(e)} />
                        <label>Cidade</label>
                        <Form.Input name='munic' placeholder='Cidade' value={this.state.user.municipio} onChange={e => this.updateField(e)} />
                        <label>Estado</label>
                        <select name='uf' value={this.state.user.uf} onChange={e => this.updateField(e)}>
                            <option value="estado">Selecione o Estado</option>
                            <option value="ac">Acre</option>
                            <option value="al">Alagoas</option>
                            <option value="am">Amazonas</option>
                            <option value="ap">Amapá</option>
                            <option value="ba">Bahia</option>
                            <option value="ce">Ceará</option>
                            <option value="df">Distrito Federal</option>
                            <option value="es">Espírito Santo</option>
                            <option value="go">Goiás</option>
                            <option value="ma">Maranhão</option>
                            <option value="mt">Mato Grosso</option>
                            <option value="ms">Mato Grosso do Sul</option>
                            <option value="mg">Minas Gerais</option>
                            <option value="pa">Pará</option>
                            <option value="pb">Paraíba</option>
                            <option value="pr">Paraná</option>
                            <option value="pe">Pernambuco</option>
                            <option value="pi">Piauí</option>
                            <option value="rj">Rio de Janeiro</option>
                            <option value="rn">Rio Grande do Norte</option>
                            <option value="ro">Rondônia</option>
                            <option value="rs">Rio Grande do Sul</option>
                            <option value="rr">Roraima</option>
                            <option value="sc">Santa Catarina</option>
                            <option value="se">Sergipe</option>
                            <option value="sp">São Paulo</option>
                            <option value="to">Tocantins</option>
                        </select>
                    </Form.Group>
                    <Form.Group inline>
                        <label>CEP</label>
                        <Form.Input name='cep' placeholder='CEP' value={this.state.user.cep} onChange={e => this.updateField(e)} />
                        <label>Telefone</label>
                        <Form.Input type='tel' name='telefone' placeholder='Telefone' value={this.state.user.telefone} onChange={e => this.updateField(e)} />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Associação</label>
                        <select name='tipo_associacao' value={this.state.associacao.tipo_associacao} onChange={e => this.updateField(e)}>
                            <option value="fullstack">FullStack</option>
                            <option value="senior">Sênior</option>
                            <option value="master">Master</option>
                            <option value="junior">Junior</option>
                        </select>
                    </Form.Group>
                    {/*<Form.Group inline>
                        <label>Associação</label>
                        <Form.Field
                            control={Radio}
                            label='Full Stack'
                            value='1'
                            //checked={value === '1'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Sênior'
                            value='2'
                            //checked={value === '2'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Master'
                            value='3'
                            //checked={value === '3'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Junior'
                            value='4'
                            //checked={value === '4'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>*/}
                    <Form.Group inline>
                        <label>Eu concordo com os Termos e Condições</label>
                        <Input type='checkbox' required value='on' />

                    </Form.Group>

                    <Button onClick={e => this.envio(e)}>Concluir</Button>
                </Segment>
            </Form >
        )
    }
}

export default FormExampleFieldControl