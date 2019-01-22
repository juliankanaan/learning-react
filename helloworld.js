
// stuff between the h1 tags is called "JSX"
// also how you declare a variable
const element = <h1>Hello, world!</h1>;

// declaring variables happen w/in curly brackets
const name = 'Julian';
const element = <h1>Hello, {name}</h1>;

// functions

function formatName(user){
  return user.firstName + '' + user.lastName;
}

// define what user is

const user = {
  firstName: "Julian",
  lastName: "Kanaan"
};

// use the function now

const element = <h1>Hello, {formatName(user)}!</h1>;


// render it for the browser

ReactDOM.render(
  element,
  document.getElementById('root')
);
