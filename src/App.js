import { useState, useEffect } from 'react';
import Header from './Header';
import SeachItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import list from './list';

function App() {
  const [items, setItems] = useState(localStorage.getItem('shoppinglist') ? (JSON.parse(localStorage.getItem('shoppinglist'))) : list);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [tasksRemaining, setTasksRemaining] = useState(0);

  useEffect(() => {
      localStorage.setItem('shoppinglist', JSON.stringify(items));
      setTasksRemaining(items.filter(task => !task.checked).length);
    }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <Header title="Grocery List" />
      <>Pending tasks ({tasksRemaining})</>
      <AddItem newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit} />
      <SeachItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );

}

export default App;
