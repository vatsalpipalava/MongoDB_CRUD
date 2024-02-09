import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemById, deleteItem } from '../reducer/itemActions';
import { useParams, Link, useNavigate } from 'react-router-dom';

const SingleItemPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchItemById(id));
    }, [dispatch, id]);

    const singleItem = useSelector((state) => state.items.singleItem);

    // Render nothing until data is available
    if (!singleItem) {
        return null;
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            dispatch(deleteItem(id));
            navigate(`/items`);
        }
    };

    return (
        <div>
            <h2>Single Item Page</h2>
            <div>
                <h3>Name: {singleItem.name}</h3>
                <p>Description: {singleItem.description}</p>
                <Link to={`/items/${id}/edit`}>Edit Item</Link>
                <button onClick={handleDelete}>Delete Item</button>
                <Link to={`/items`}>View item List</Link>
            </div>
        </div>
    );
};

export default SingleItemPage;