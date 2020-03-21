function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}//Este elemento se muestra cuando ya te logiaste como ejemplo.

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}//Este elemento se muestra cuando todavia no te logiaste como ejemplo.

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  //Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
  //el isLoggein puede ser true o false segun el caso y muestra 
);





