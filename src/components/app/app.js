import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import ItemPage from '../pages/index.js';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './app.css';
import { bookFields, charFields, houseFields } from '../../shared/fields';


export default class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false,      
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }
    
    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }         
        
        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                {this.state.showRandomChar && (
                                    <RandomChar onClose={this.toggleRandomChar} />
                                )}
                            </Col>
                        </Row>

                        <Switch>
                            <Route path='/characters'>
                                <ItemPage
                                    fields={charFields}
                                    page="characters"
                                />
                            </Route>
                            <Route path='/houses'>
                                <ItemPage
                                    fields={houseFields}
                                    page="houses"
                                />
                            </Route>
                            <Route path='/books'>
                                <ItemPage
                                    fields={bookFields}
                                    page="books"
                                />
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
};