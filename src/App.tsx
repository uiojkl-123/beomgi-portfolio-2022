import React, { ReactNode, useEffect, useRef } from 'react';
import logo from './logo.svg';
import { Routes, Route, } from 'react-router-loading';
import { topbar } from "react-router-loading";
import { Home } from './pages/Home';
import './App.scss';
import { About } from './pages/About';
import { FollowingComponent } from './components/FollowingComponent';
import { Stack } from './pages/Stack';
import { Projects } from './pages/Projects';
import { Odd } from './pages/Odd';
import { ProjectContent } from './pages/ProjectContent';
import { Thanks } from './pages/Thanks';


topbar.config({
  autoRun: false,
  barThickness: 4,
  barColors: {
    1.0: 'rgba(231, 76,  60,  .7)'
  },
  shadowBlur: 0,
  className: 'topbar'
});

const RoutePage = ({ path, element, loading }: { path: string, element: ReactNode, loading?: boolean }) => {
  return (
    /* @ts-ignore */
    < Route path={path} element={element} />
  );
}

function App() {

  return (
    <>
      <div className='App'>
        <FollowingComponent speed={0.07}></FollowingComponent>
        <FollowingComponent speed={0.05} style={{ width: '20px', height: '20px', background: 'transparent', border: '2px solid var(--primary-color)' }}></FollowingComponent>
        <Home></Home>
        <About></About>
        <Stack></Stack>
        <Projects></Projects>
        <ProjectContent></ProjectContent>
        <Thanks/>
      </div>
    </>
  );
}

export default App;
