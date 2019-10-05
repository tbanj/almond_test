import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../common/nav';

class Developer extends Component {
    state = {
        checkActive: ''
    }

    componentDidMount() {
        this.setState({ checkActive: 'active' });
    }

    componentWillUnmount() {
        this.setState({ checkActive: '' })
    }
    render() {
        return (
            <React.Fragment>
                <NavBar beActive={this.props.history.location.pathname} />
                `    <div className="container">
                    <h2> Check back page is yet to be implemented</h2>
                    <div><Link to="/">Go back Home</Link></div>
                </div>`
        </React.Fragment>
        );
    }
}

export default Developer
