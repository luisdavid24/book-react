// HTML simple, para evitar el comportamiento de enlace predeterminado al abrir una nueva página, puede escribir
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
//asi se seria en react
function ActionLink() {
    function handleClick(e) {
      e.preventDefault();//este hace la funcion del false.
      console.log('The link was clicked.');
    }
  
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
}

// ----------------------------------------------------------------------



class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }//Este enlace es necesario para que `this` funcione en la devolución de llamada
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn//en esta parte se analiza si a cambiado de on a off o  viceversa
        }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );