php bin/console doctrine:database:create  // create database
composer require symfony/webpack-encore-bundle   //create webpack encore  file and assets folder
enable react in webpack.config.js 
------------------------------------
.enableReactPreset()

packeg manager 
npm install @symfony/webpack-encore --save-dev

install twig
------------
composer require twig

create controller
-------------------
php bin/console make:controller controllename

install react and react-DOM
---------------------------------
npm install react react-dom prop-types --save

npm run watch  //Do live changes in build folder 
npm install @babel/preset-react@^7.0.0 --save-dev 

encore css and script in base.html.twig   IMP
{{ encore_entry_script_tags('app') }}
-------------------
app.js
---------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
export default class App extends Component {
  render() {
    return (
      <div>app</div>
    )
  }
}
createRoot(document.getElementById('root')).render(<h1>Your App</h1>)
// ReactDOM.render(<App/>,document.getElementById('root'));


write axios call to get the API response

axios.get(url)
.then(response=>{setuseState.data})
.catch(error=>{console.log(error)});