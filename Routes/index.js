import React from 'react';

import { NativeRouter, Routes, Route } from 'react-router-native';
import HomePage from '../src/pages/Home';

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