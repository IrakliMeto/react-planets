import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Root from './Root.jsx';
import Planet from './Pages/Planet';

import './reset.scss';
import './App.css';

export const routItems = [
  {
    name: 'tatoine',
    id: 1,
  },
  {
    name: 'avin-IV',
    id: 3,
  },
  {
    name: 'Alderaan',
    id: 2,
  },
];

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/react-planets' element={<Root />}>
        {routItems.map((item) => (
          <Route
            key={item.id}
            path={item.name}
            loader={async () => {
              return await fetch(`https://swapi.dev/api/planets/${item.id}`);
            }}
            element={<Planet />}
          />
        ))}
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
