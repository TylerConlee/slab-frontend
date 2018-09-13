import React, { Component } from 'react';

class Health extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
          isLoading: false,
        };
      }
    
    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/api')
        .then(response => response.json())
        .then(data => {
            this.setState({ data, isLoading: false });
            console.log(data);
        });
    
    }
    render() {
        const { data,isLoading } = this.state;
        if (isLoading) {
            console.log(data)
            return <p>Loading...</p>;
        }
        return (
            <ul>
                <li>Uptime: {data.uptime}</li>
                <li>Version: {data.version}</li>
            </ul>
        )
    }
}

export default Health