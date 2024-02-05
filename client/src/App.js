import './App.css';
import AddItemForm from './components/AddItemForm';
import DataTablePage from './components/DataTablePage';
import EditItemPage from './components/EditItemPage';
import SingleItemPage from './components/SingleItemPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<AddItemForm />} />
          <Route path="/items" element={<DataTablePage />} />
          <Route path="/items/:id" element={<SingleItemPage />} />
          <Route path="/items/:id/edit" element={<EditItemPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
