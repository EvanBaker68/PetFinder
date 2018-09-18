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
    // state = {
    //     petId: '',
    //     petName: '',
    //     petType: '',
    // };

    handleChangeName = (e) => {
        this.setState({
            petName: e.target.value
        });
    };

    handleChangeId = (e) => {
        this.setState({
            petId: e.target.value
        });
    };

    handleChangeType = (e) => {
        this.setState({
            petType: e.target.value
        });
    };

    onHandle = (e) => {
        e.preventDefault();

        const pet = {
            id: this.state.id,
            name: this.state.name,
            type: this.state.type,
        };


        axios.post('/api/pets', {pet}).then(
            res => {
              console.log(res);
              console.log(res.data);
            )};
    };

    render() {
        return (
            <form onSubmit={this.onHandle}>
                <input
                name='petId'
                placeholder='petId pwease'
                value={this.state.petId}
                onChange={e => this.handleChangeId(e)}/>

                <input
                name='petName'
                placeholder='petName pwease'
                value={this.state.petName}
                onChange={e => this.handleChangeName(e)}/>

                <input
                name='petType'
                placeholder='petType pwease'
                onChange={e => this.handleChangeType(e)}/>
                <br />
                <button onClick={e => this.onHandle(e)}>Submit</button>
            </form>
        );
    }
}