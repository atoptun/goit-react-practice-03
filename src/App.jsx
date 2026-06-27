import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const CountryPage = lazy(() => import('./pages/CountryPage'));
const SearchCountryPage = lazy(() => import('./pages/SearchCountryPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<SearchCountryPage />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </>
  );
};
