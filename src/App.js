import './App.css';
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import RegularList from './components/lists/Regular';
import { authors } from './data/authors';
import { books } from './data/books';

function App() {
  return (
    <>
  <h2>Small authors list</h2>
  <RegularList items={authors} sourceName='author' ItemComponent={SmallAuthorListItem}/>
  <hr />
  <h2>Large authors list</h2>
  <RegularList items={authors} sourceName='author' ItemComponent={LargeAuthorListItem}/>
  <hr />
  <h2>Small books list</h2>
  <RegularList items={books} sourceName={'book'} ItemComponent={SmallBookListItem}/>
  <hr />
  <h2>Large books list</h2>
  <RegularList items={books} sourceName={'book'} ItemComponent={LargeBookListItem}/>
    </>
  );
}

export default App;
