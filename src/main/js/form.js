import React from 'react';
import elasticsearch from 'elasticsearch';
import axios from 'axios';
/*
var client = new elasticsearch.Client({
    hosts: ['000.0.0.0:9200']
});


client.ping({
     requestTimeout: 30000,
 }, function(error) {
     if (error) {
         console.error('elasticsearch cluster is down!');
     } else {
         console.log('Everything is ok');
     }
 });

client.indices.create({
      index: 'users'
  }, function(err, resp, status) {
      if (err) {
          console.log(err);
      } else {
          console.log('create', resp);
      }
 });
*/

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
                value={this.state.name}
                onChange={e => this.change(e)}/>
                >

                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}