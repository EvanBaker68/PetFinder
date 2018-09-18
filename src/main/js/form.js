import React from 'react';
import elasticsearch from 'elasticsearch';

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


export default class Form extends React.Component {
    state = {
        petId: '',
        petName: '',
        petType: '',
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };



    onHandle = (e) => {
        e.preventDefault();

        fetch('/api/pets',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                id : this.state.petId,
                name: this.state.petName,
                type: this.state.petType,
            }),
        }).then(
            (response) => response.json()
        ).catch((error) => {
            console.log(error);
        });


    }

    render() {
        return (
            <form onSubmit={this.onHandle}>
                <input
                name='petId'
                placeholder='petId pwease'
                value={this.state.petId}
                onChange={e => this.change(e)}/>

                <input
                name='petName'
                placeholder='petName pwease'
                value={this.state.petName}
                onChange={e => this.change(e)}/>

                <input
                name='petType'
                placeholder='petType pwease'
                onChange={e => this.change(e)}/>
                >

                <br />
                <button onClick={e => this.onHandle(e)}>Submit</button>
            </form>
        );
    }
}