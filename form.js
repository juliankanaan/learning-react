// it's my 43rd minute learning React, so time to get overly-ambitious & create an html form


//

class Name extends React.Component {
  render() {
    return <h1>{this.props.firstName}</h1>
  }
}

// gonna need markup

function MakeForm() {
  return (
    <form>
      <input placeholder="Enter text here" type="text"></input>
      <button type="submit">Submit</button>
    </form>
  );
}


// apparently in practice app() goes at the top, idk how thi yet 
function App() {

  // stuff goes here
  return (
    <div>
      <h1>Here is a form</h1>
      <Name firstName="Julian" />
      <MakeForm />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
