import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const root = document.getElementById('root');

// function tick(){
//   const element =(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is now {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render() {
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
      </div>
    )
  }
}


class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState( prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render(){
    return(
      <button onClick={this.handleClick} className='btn btn-primary'>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// )




// function UserGreeting(props){
//   return <h1>Welcome Back!</h1>;
// }

// function GuestGreeting(props){
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreeting />;
//   }else{
//     return <GuestGreeting />;
//   }
// }

// function LoginButton(props){
//   return(
//     <button onClick={props.click}>
//       Login
//     </button>
//   )
// }

// function LogoutButton(props){
//   return(
//     <button onClick={props.click}>
//      Logout
//     </button>
//   )
// }

// class LoginControl extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick(){
//     this.setState({
//       isLoggedIn: true
//     });
//   }

//   handleLogoutClick(){
//     this.setState({
//       isLoggedIn: false
//     });
//   }

//   render(){
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn){
//       button = <LogoutButton click={this.handleLogoutClick} />;
//     }else{
//       button = <LoginButton click={this.handleLoginClick} />;
//     }

//     return(
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );






// function WarningBanner(props){
//   if(!props.warn){
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick(){
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }

//   render(){
//     return(
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// )




// function NumberList(props){
//   const numbers = props.numbers;
//   const listItems = numbers.map( (number) => {
//     return <li key={number.toString()}>{number}</li>;
//   });

//   return(
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];


// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   root
// );


function Blog(props){
  const sidebar = (
    <ul>
      {
        props.posts.map( (post) => 
          <li key={post.id}>
            {post.title}
          </li>
        )
      }
    </ul>
  );

  const content = props.posts.map( (post) => 
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>

  );
}


const backend_data = document.getElementById('backend');
const raw_data = backend_data.getAttribute('data');
const posts = JSON.parse(raw_data);
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm'}
// ];

ReactDOM.render(
  <Blog posts={posts} />,
  root
)