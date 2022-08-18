import React from 'react';
import MainNavigation from './src/Navigation';
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <>
      <MainNavigation />
      <FlashMessage position="top" />
    </>
  );
}
