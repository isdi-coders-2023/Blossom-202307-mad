import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const PagError = lazy(() => import('../../pages/pag-error/pag-error'));
const PagForm = lazy(() => import('../../pages/pag-form/pag-form'));
const PagHome = lazy(() => import('../../pages/pag-home/pag-home'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="*" element={<PagError></PagError>}></Route>
        <Route path="/form" element={<PagForm></PagForm>}></Route>
        <Route path="/home" element={<PagHome></PagHome>}></Route>
      </Routes>
    </Suspense>
  );
};
