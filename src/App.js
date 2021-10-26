import CreatePost from './components/form/CreatePost';
import ListPost from './components/post/ListPost';

function App() {
  return (
    <div className="flex justify-center h-screen">
      <header className="App-header">Todo List</header>
      <ListPost />
      <CreatePost />
    </div>
  );
}

export default App;
