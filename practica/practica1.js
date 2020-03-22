import React from "react";
import "./styles/practica1.css";
class Practica1 extends React.Component{
    constructor(props){
    super(props);
    this.buttonLogin=this.buttonLogin.bind(this);
    this.buttonLogout=this.buttonLogout.bind(this);
    this.state={isLogin:false};
    }
    buttonLogin(){
        this.setState({isLogin:true})
    }
    buttonLogout(){
        this.setState({isLogin:false})
    }

    render(){
        const isLogin=this.state.isLogin;
        let Boton;
        if(isLogin){
            Boton=<BotonDespues onClick={this.buttonLogout}/>
        }else{
            Boton=<BotonAntes onClick={this.buttonLogin}/>
        }
        return(
            <div className="container">
                <h1>Hello, this is my first practice</h1>
                {validacionText}
                <Boton />
            </div>

        );
    }
}
function validacionText(props){
    const isLogin=props.isLogin;
    if(isLogin){
        return <textDespues/>;
    }else{
        return<textAntes/>;
    }

}
function BotonAntes(){
    return(
        <div>
            <button onClick={this.props.onClick}> Touch me,please</button>
        </div>
    )
}
function BotonDespues(){
    return(
        <div>
            <button onClick={this.props.onClick}> GOOD.</button>
        </div>
    )
}
function textAntes(){
    return(
        <div>
            <p>Por favor toca el boton para empezar</p>
        </div>
    )
}

function textDespues(){
    return(
        <div>
            <p>Excelente,si tocaste</p>
        </div>
    )
}
export default Practica1;