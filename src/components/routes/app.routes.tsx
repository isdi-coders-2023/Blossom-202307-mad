import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Detail } from '../details/detail';

const PagHome = lazy(() => import('../../pages/pag-home/pag-home'));
const PagError = lazy(() => import('../../pages/pag-error/pag-error'));
const PagForm = lazy(() => import('../../pages/pag-form/pag-form'));
const PagCharacters = lazy(
  () => import('../../pages/pag-characters/pag-characters')
);

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<PagHome></PagHome>}></Route>
        <Route path="/home" element={<PagHome></PagHome>}></Route>
        <Route path="*" element={<PagError></PagError>}></Route>
        <Route path="/form" element={<PagForm></PagForm>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
        <Route
          path="/simpsons"
          element={<PagCharacters></PagCharacters>}
        ></Route>
      </Routes>
    </Suspense>
  );
};
