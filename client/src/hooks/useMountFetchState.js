import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import axios from 'axios';

function useMountFetchState(initialValue, url) {
  const [state, setState] = useLocalStorage('mountFetchState', initialValue);

  useEffect(() => {
    if (state === initialValue) {
      axios.get(url).then(response => {
        setState(response.data);
      });
    }
  }, [url]);

  return [state, setState];
}
export default useMountFetchState;
