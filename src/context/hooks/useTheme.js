import { useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(false);

  function changeTheme() {
    setTheme((prevState) => (prevState !== true));
    // console.log(`mudou o thema para: ${theme}`);
  }

  return { changeTheme, theme };
}
