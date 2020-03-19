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


//Repasemos rápidamente lo que está sucediendo y el orden en que se llaman los métodos:

// 1.Cuando <Clock />se pasa a ReactDOM.render(), React llama al constructor del Clock componente. 
// Como Clock necesita mostrar la hora actual, se inicializa this.state con un objeto que incluye la hora actual.
//  Más tarde actualizaremos este estado.

// 2.React luego llama al método Clock del componente render(). 
// Así es como React aprende lo que se debe mostrar en la pantalla. 
// React luego actualiza el DOM para que coincida con la Clock salida de renderizado.

// 3.Cuando la Clock salida se inserta en el DOM, React llama al componentDidMount()método del ciclo de vida. 
// Dentro de él, el Clock componente le pide al navegador que configure un temporizador para llamar al tick()
// método del componente una vez por segundo.

// 4.Cada segundo el navegador llama al tick() método. En su interior, 
// el Clock componente programa una actualización de la IU llamando setState()
// con un objeto que contiene la hora actual. Gracias a la setState()llamada,
// React sabe que el estado ha cambiado y render()
// vuelve a llamar al método para saber qué debería estar en la pantalla. 
// Esta vez, this.state.dateen el render()método será diferente, 
// por lo que la salida del render incluirá el tiempo actualizado. React actualiza el DOM en consecuencia.

//5.Si el Clockcomponente alguna vez se elimina del DOM, 
//React llama al componentWillUnmount()método del ciclo de vida para que se detenga el temporizador.