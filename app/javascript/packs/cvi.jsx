import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// for syling:
import './styles/cvi.scss'


const root = document.getElementById('cvi')

function ItWorks(props){
  return (
    <h1>It Works!</h1>
  );
}

ReactDOM.render(
  <ItWorks />,
  root
);
