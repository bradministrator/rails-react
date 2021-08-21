import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const root = document.getElementById('cvi')

function FancyBorder(props){
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog(props){
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="DialogMessage">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

console.log('mounting component');


ReactDOM.render(
  <WelcomeDialog />,
  root
);