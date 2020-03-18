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