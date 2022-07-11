import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ApplicationDefault from './router/index'

const root = document.getElementById("root")

ReactDOM.render(
  <HashRouter>
    <ApplicationDefault />
  </HashRouter>,
  root
)