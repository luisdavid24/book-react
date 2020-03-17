//Este el contacto con las clases solamente convertimos una funcion en un clase.
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//se esta usando un setInterval para que se actualice el contenido cada segundo.
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('app')
  );
}

setInterval(tick, 1000);