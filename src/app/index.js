import "@babel/polyfill"; // Support for Async - Await in our app

import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App'
import data from './data.json';

const headings = ['When', 'Who', 'Description'];

render(
    <App 
        data={data} 
        title='OpenLibrary API'
        headings={headings}
    />,
    document.getElementById('app')
)