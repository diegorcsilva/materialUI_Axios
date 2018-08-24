import React from 'react';
const axios = require('axios');

class HttpContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: null};
    }

    componentDidMount() {
        // axios.get('http://localhost:1337/provas/5')
        //     .then((response) => console.log(response.data) /*this.setState({content: response.data})*/)
        //     .catch((error) => console.log(error));

        axios({
            method:'get',
            url:'http://localhost:3002',
            header: { 'Content-Type': 'application/json' ,
                'X-Requested-With': 'XMLHttpRequest',
                'mode': 'cors',
                'Access-Control-Allow-Origin': '*' ,
                'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
            },
        })
            .then((response) => console.log(response.data) /*this.setState({content: response.data})*/)
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state.content}
            </div>
        )
    }
}

export default HttpContent;