class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
    }//método se ejecuta después de que la salida del componente se haya procesado en el DOM.
  
    componentWillUnmount() {
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
// ---------------------------------------------------
componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}
//Este es un buen lugar para configurar un temporizador
//Observe cómo guardamos la ID del temporizador directamente en this( this.timerID).