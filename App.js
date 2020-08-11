import React from 'react';
import CloudServantStackDrawer from './components/CloudServantStackDrawer';
import { Provider as PaperProvider } from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <CloudServantStackDrawer />
    </PaperProvider>
  )
}
export default App;