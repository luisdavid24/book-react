class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }// Como Clock necesita mostrar la hora actual, se inicializa this.statecon un objeto que incluye la hora actual

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    }); //implementaremos un método llamado tick()que el Clock componente se ejecutará cada segundo.
  }//Se utilizará this.setState()para programar actualizaciones para el estado local del componente

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
