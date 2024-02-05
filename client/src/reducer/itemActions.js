import axios from 'axios';
import { addItem, removeItem, updateItem, setItems, setSingleItem } from './itemReducer';

export const addNewItem = (newItem) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/items', newItem);
    dispatch(addItem(response.data));
  } catch (error) {
    console.error('Error adding item:', error);
  }
};

export const fetchItems = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/items');
    dispatch(setItems(response.data));
  } catch (error) {
    console.error('Error fetching items:', error);
  }
};

export const fetchItemById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/items/${id}`);
    dispatch(setSingleItem(response.data));
  } catch (error) {
    console.error('Error fetching single item:', error);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/items/${id}`);
    dispatch(removeItem(id));
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};

export const updateItemById = (id, updatedItem) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/items/${id}`, updatedItem);
    dispatch(updateItem({ id, updatedItem: response.data }));
  } catch (error) {
    console.error('Error updating item:', error);
  }
};