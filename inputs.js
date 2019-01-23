
// Keep the DOM updated upon each input value change w/ a handleChange function 

class Field extends React.Component {
  // make sure React owns the field on load

  state = {value: ''}

  // handleChange
  handleChange = (e) => {
    this.setState( {value: e.target.value } )
  }

  render(){
    // define .state component of field

    const {value} = this.state

    // Field function
    return (
      <div>
        <input
          type={'text'}
          value={value}
          placeholder={'Enter text'}
          onChange={this.handleChange}
        />


      <h1>
      Value: {value}
      </h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Field />,
  document.getElementById('root')
)
