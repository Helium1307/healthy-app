import React from 'react';

import { NativeRouter, Routes, Route } from 'react-router-native';
import HomePage from '../src/pages/Home/index';

const RoutesComponent = () => {
  return(
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </NativeRouter>
  )
}

export default RoutesComponent;