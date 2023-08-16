import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const PagError = lazy(() => import('../../pages/error.pages/pag-error'));
export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="*" element={<PagError></PagError>}></Route>
      </Routes>
    </Suspense>
  );
};
