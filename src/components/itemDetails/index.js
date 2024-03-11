import React, { useState, useEffect } from 'react';
import './styles.css';

const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span className="description">{item[field]}</span>
        </li>
    );
};

const ItemDetails = ({ itemId, getData, children, page }) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        setItem(null);
    }, [page])

    useEffect(() => {
        const updateItem = async () => {
            if (!itemId) {
                return;
            }

            const newItem = await getData(itemId);
            setItem(newItem);
        };

        updateItem();
    }, [itemId]);

    if (!item) {
        return <span className='select-error'>Please select an item in the list</span>;
    }

    const { name } = item;

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {React.Children.map(children, child => {
                    return React.cloneElement(child, { item });
                })}
            </ul>
        </div>
    );
};

export { Field };
export default ItemDetails;
