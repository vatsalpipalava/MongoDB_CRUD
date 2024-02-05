import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemById, updateItemById } from '../reducer/itemActions';

const EditItemPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const singleItem = useSelector((state) => state.items.singleItem);
  const [itemName, setItemName] = useState(singleItem.name || '');
  const [itemDescription, setItemDescription] = useState(singleItem.description || '');

  useEffect(() => {
    // Fetch the single item by ID if not available
    if (!singleItem || singleItem._id !== id) {
      dispatch(fetchItemById(id));
    }
  }, [dispatch, id, singleItem]);

  const handleUpdateItem = () => {
    const updatedItem = {
      name: itemName,
      description: itemDescription,
    };

    dispatch(updateItemById(id, updatedItem))
      .then(() => {
        // Navigate to SingleItemPage after editing
        navigate(`/items/${id}`);
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  const handleCancel = () => {
    // Navigate to SingleItemPage without updating
    navigate(`/items/${id}`);
  };

  return (
    <div>
      <h2>Edit Item Page</h2>
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
      <button type="button" onClick={handleUpdateItem}>
        Update Item
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default EditItemPage;


