//Reemplazar this.props.datecon this.state.dateen el render()método
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }


// Aqui se agrega un constructor que asigne la inicial this.state
//super es usada para acceder y llamar funciones del padre de un objeto.
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

// Tenga en cuenta cómo pasamos props al constructor base
constructor(props) {
    super(props);
    this.state = {date: new Date()};
}
//Los componentes de clase siempre deben llamar al constructor base con props
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
//Luego agregaremos el código del temporizador al componente mismo.
//Aqui termino el paso de funcion a clase en react.
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );