import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { ColorModeContext,useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';



export default function App() {
  const [theme,colorMode]=useMode();
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
   <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className='app'>
      <Sidebar/>
    <main className='content'>
      <Topbar/>
      <Routes>
<Route path="/" element={<Dashboard/>}/>
      </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>)
// ReactDOM.render(<App/>,document.getElementById('root'));

