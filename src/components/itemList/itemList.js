import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';
import PropTypes from 'prop-types';
import uniqid from "uniqid";

import './itemList.css';

const ItemList = ({ getData, renderItem, onItemSelected }) => {
    const [itemList, setItemList] = useState(null);

    useEffect(() => {
        getData()
            .then(itemList => {
                setItemList(itemList);
            });
    }, [getData]);

    const renderItems = arr => {
        return arr.map(item => {
            const { id } = item;
            const label = renderItem(item);

            return (
                <li
                    key={uniqid()}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    };

    if (!itemList) {
        return <Spinner />;
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

ItemList.propTypes = {
    getData: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    onItemSelected: PropTypes.func
};

ItemList.defaultProps = {
    onItemSelected: () => { }
};

export default ItemList;
