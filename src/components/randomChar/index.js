import React, { useState, useEffect } from 'react';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import { number } from 'prop-types';
import './styles.css';

const View = ({ char, onClose }) => {
    const { name, gender, born, died, culture } = char;

    return (
        <>
            <div className="randomTitle">
                <h4>Random Character: {name}</h4>
                <div
                    type="button"
                    className='closeButton'
                    onClick={() => onClose()}
                >
                    X
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between randomRows">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between randomRows">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between randomRows">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
};

const RandomChar = ({ interval, onClose }) => {
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const gotServiceInstance = new gotService();

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, interval);

        return () => {
            clearInterval(timerId);
        };
    }, [interval]);

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    };

    const onError = (err) => {
        setError(true);
        setLoading(false);
    };

    const updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        gotServiceInstance.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    };

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} onClose={onClose} /> : null;

    return (
        <div className="random-block rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
};

RandomChar.prototyps = {
    interval: number,
};

RandomChar.defaultProps = {
    interval: 1500,
};

export default RandomChar;
