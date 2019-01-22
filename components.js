
// components can accept properties (appended to them)

// you can create components using functions:

function wholeName(user){
  return <h1>Hello, {user.firstName}</h1>;
}

// or classes

class wholeName extends React.Component {
  render() {
    return <h1>Hello, {this.user.firstName}</h1>;
  }
}




// Then define the component

const user = { firstName: "Julian"};


// or like this

const element = <wholeName name="Julian" />;
