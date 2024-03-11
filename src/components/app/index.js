import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/index.js';
import RandomChar from '../randomChar/index.js';
import ErrorMessage from '../errorMessage/index.js';
import ItemPage from '../pages/index.js';
import gotService from '../../services/gotService.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { bookFields, charFields, houseFields } from '../../shared/fields.js';
import './styles.css';


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