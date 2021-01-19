import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../error/errorMessage';

export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSeleceted = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
            this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSeleceted={this.onCharSeleceted} />
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}