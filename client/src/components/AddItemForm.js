import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../reducer/itemActions';
import { Link } from 'react-router-dom';

const AddItemForm = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');

    const handleAddItem = () => {
        const newItem = {
            name: itemName,
            description: itemDescription,
        };

        dispatch(addNewItem(newItem));

        setItemName('');
        setItemDescription('');
    };

    return (
        <div>
            <h2>Add New Item</h2>
            <form>
                <label>
                    Item Name:
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Item Description:
                    <textarea
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleAddItem}>
                    Add Item
                </button>
                <Link to={`/items`}>View Items List</Link>
            </form>
        </div>
    );
};

export default AddItemForm;
