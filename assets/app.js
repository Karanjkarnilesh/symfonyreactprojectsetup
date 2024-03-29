import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { ColorModeContext,useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Invoice from './scenes/invoices';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Header from './components/Header';
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Calendar  from './scenes/calendar';
import  Bar  from './scenes/bar';
export default function App() {
  const [theme,colorMode]=useMode();
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
   <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className='app' style={{display:'flex'}}>
      <Sidebar/>
    <main className='content' style={{width:'100vw'}} >
      <Topbar/>
      <div style={{paddingLeft: '16px'}}>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/bar" element={<Bar/>}/>
      </Routes>
      <Header/>
      </div>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>)
// ReactDOM.render(<App/>,document.getElementById('root'));

