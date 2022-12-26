import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="us" category="general"/>} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category="general"/>} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health"/>} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology"/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}