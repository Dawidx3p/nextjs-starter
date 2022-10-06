import React, { useState, useEffect } from 'react';
import { getCommentsBySession } from '../utils/api';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await getCommentsBySession('123')).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;