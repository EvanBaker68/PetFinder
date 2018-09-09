import axios from 'axios';
import React from 'react';


export default class Message extends React.Component {
    state = {
        message: '',
    };

    componentDidMount(){
        axios.get('api/')
    }
}