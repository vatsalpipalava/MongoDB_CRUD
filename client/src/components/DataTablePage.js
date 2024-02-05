import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../reducer/itemActions';
import { Link } from 'react-router-dom';

const DataTablePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.items);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <h2>Data Table Page</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/items/${item._id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Add Item</Link>
    </div>
  );
};

export default DataTablePage;
