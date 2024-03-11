import React, { useState, useEffect } from 'react';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

const ItemPage = ({ fields, page }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const handleError = () => {
            setError(true);
        };

        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);

    const gotServiceInstance = new gotService();

    const getListData = () => {
        if (page === 'books') {
            return gotServiceInstance.getAllBooks
        }

        if (page === 'characters') {
            return gotServiceInstance.getAllCharacters
        }

        return gotServiceInstance.getAllHouses
    };

    const getDetailsData = () => {
        if (page === 'books') {
            return gotServiceInstance.getBook
        }

        if (page === 'characters') {
            return gotServiceInstance.getCharacter
        }

        return gotServiceInstance.getHouse
    };

    const onItemSelected = (id) => {
        setSelectedItem(id);
    };

    if (error) {
        return <ErrorMessage />;
    }

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={getListData()}
            renderItem={({ name }) => name}
        />
    );

    const itemDetails = (
        <ItemDetails
            itemId={selectedItem}
            getData={getDetailsData()}
        >
            {fields.map((item) =>
                <Field
                    key={item.id}
                    field={item.field}
                    label={item.label}
                />
            )}
        </ItemDetails>
    );

    return (
        <RowBlock
            left={itemList}
            right={itemDetails}
        />
    );
};

export default ItemPage;
