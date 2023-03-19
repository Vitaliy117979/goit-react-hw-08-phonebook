import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { MainWrapper } from 'components/MainWrapper.styled';

export const SharedLayout = () => {
  return (
    <MainWrapper>
      <Header />
      <Suspense fallback={null}>
        <main>
        <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </MainWrapper>
  );
};
