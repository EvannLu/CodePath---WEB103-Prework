import './App.css';
import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';

const App = () => {

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />
    },
    {
      path: "/edit/:id",
      element: <EditCreator />
    },
    {
      path: "/new",
      element: <AddCreator />
    },
    {
      path: "/view/:id",
      element: <ViewCreator />
    }
  ]);

  return (
    <div className="App">
      <header className="container">
        <nav>
          <ul>
            <li><h1>Creatorverse 💫</h1></li>
          </ul>
          <ul>
            <li><Link to="/" role="button" className="secondary">View All Creators</Link></li>
            <li><Link to="/new" role="button">Add a Creator</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        {element}
      </main>
    </div>
  );
}

export default App;