import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store';

// let lists = STORE.lists;

// let listsJSX = [];

// for (let i=0; i<lists.length; i++) {
//   let list = lists[i];
//   let title = list.header;
//   listsJSX.push(<List header={title} key={i}/>);
// }

ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));