import useLocalStorage from './hookes/useLocalStorage';
import './hookes/style.css';

function App() {
 
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleThemeChange (){
      setTheme(theme === 'light' ? "dark" : 'light'); 
  }

  // console.log(theme);

  return (
    <div data-theme={theme} className='container'>
        
        <h1>Theme switcher !</h1>
        <button onClick={handleThemeChange}
        className='border p-1 shadow m-2 btn'>Change theme</button>
    </div>
  )
}

export default App
