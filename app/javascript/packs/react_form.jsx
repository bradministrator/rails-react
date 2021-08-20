import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const root = document.getElementById('react-form');

function ItWorks(props){
  return (
    <div>It Works</div>
  );
}

ReactDOM.render(
  <ItWorks />,
  root
)