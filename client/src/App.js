
import './App.css';
import {routes} from './routes/routes';
import {Navigate, Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SuspenseLoader from './components/common/SuspenseLoader';

const ErrorComponent = lazy(() => import( './components/common/ErrorComponent'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>} />
      <Route path={routes.main.path} element={<routes.main.element />} >
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element/>} errorElement={<ErrorComponent/>} />
        <Route path={routes.view.path} element={<routes.view.element/>} errorElement={<ErrorComponent/>} />
      </Route>
      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>
    </Route>
  )
)

function App() {
  return (
    <Suspense fallback={<SuspenseLoader/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
