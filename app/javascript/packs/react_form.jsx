import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const root = document.getElementById('react-form');

// class NameForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { value: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event){
//     alert(`A name was submitted ${this.state.value}`);
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   root
// )


// class EssayForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value: 'Please write an essay about your favorite DOM element.'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event){
//     alert(`An essay was submitted --> ${this.state.value} <--`);
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Essay
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <EssayForm />,
//   root
// );


// class FlavorForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event){
//     alert(`Your favorite flavor is ${this.state.value}`);
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//           <input type="submit" value="Submit" />
//         </label>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,
//   root
// );




// class Reservation extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event){
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render(){
//     return(
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of Guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <Reservation />,
//   root
// );



// ReactDOM.render(
//   <input value="hi" />,
//   root
// );

// setTimeout(function() {
//   ReactDOM.render(<input value={null} />, root);
// }, 10000);


function toCelcius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celcius){
  return (celcius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if (Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props){
  if(props.celcius >= 100){
    return <p>The water would boil</p>;
  }else{
    return <p>The water would not boil</p>;
  }
}

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return(
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelciusChange(temperature){
    console.log(temperature);
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature){
    console.log(temperature);
    this.setState({scale: 'f', temperature});
  }

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onTemperatureChange={this.handleCelciusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celcius={parseFloat(celcius)} />
      </div>
    );
  }
}


ReactDOM.render(
  <Calculator />,
  root
)