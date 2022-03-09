import React from 'react';
import { cocktailAPI } from './lib/api';

function App() {
  const [state, setState] = React.useState('null');

  React.useEffect(() => {
    const getData = async () => {
      const resp = await cocktailAPI();
      console.log('resp', resp);
      setState(resp);
    };
    getData();
  }, []);

  console.log('state', state);

  return (
    <>
      <h1>Hello world!!!</h1>
      <p>Welome to our project!</p>
    </>
  );
}

export default App;
