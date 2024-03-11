import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';


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

                        <Route path='/characters' component={CharacterPage} />                       
                        <Route path='/houses' exact component={HousesPage} />
                        <Route path='/books' component={BooksPage} />
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                        return <BooksItem bookId={id}/>}}/>                         
                    </Container>
                 </div>
            </Router>
        );
    }
};