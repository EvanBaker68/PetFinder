import React from 'react';
import elasticsearch from 'elasticsearch';
import axios from 'axios';

export function authenticate(pet){
    return axios.post('/api/pets');
}


export default class Form extends React.Component {
    state = {
        id: '',
        name: '',
        type: '',
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };




    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        const pet = {
            id: this.state.id,
            name: this.state.name,
            type: this.state.type,
        };

        axios.post('/api/pets', { pet })
            .then(res => {
                console.log(res);
                console.long(res.data);
            });


    }

    render() {
        return (
            <form>
                <input
                name='id'
                placeholder='petId pwease'
                value={this.state.id}
                onChange={e => this.change(e)}/>

                <input
                name='name'
                placeholder='petName pwease'
                value={this.state.name}
                onChange={e => this.change(e)}/>

                <input
                name='type'
                placeholder='petType pwease'
                value={this.state.type}
                onChange={e => this.change(e)}/>
                >

                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}