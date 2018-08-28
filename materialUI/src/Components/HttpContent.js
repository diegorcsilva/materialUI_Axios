import React from 'react';
import ProvaCard from './ProvaCard'
const axios = require('axios');

class HttpContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: {categoria: "Masculino"}};
    }

    componentDidMount() {
        // axios.get('http://localhost:1337/provas/5')
        //     .then((response) => console.log(response.data) /*this.setState({content: response.data})*/)
        //     .catch((error) => console.log(error));

        axios({
            method:'get',
            url:'http://localhost:3005/api/provas',
            header: { 'Content-Type': 'application/json' ,
                'X-Requested-With': 'XMLHttpRequest',
                'mode': 'cors',
                'Access-Control-Allow-Origin': '*' ,
                'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
            },
        })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    content: response.data
                })
            } /*this.setState({content: response.data})*/)
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                <ProvaCard prova={this.state.content[0]}/>
            </div>
        )
    }
}

export default HttpContent;