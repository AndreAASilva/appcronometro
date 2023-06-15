import React, {Component} from 'react';
import './style.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0
    }
  }

  render(){
    return(
      <div className='container'>
        <img src={require('./assets/cronometro.png')} className='img'/> {/*Inserindo a imagem de fundo do cronômetro */}
        <a className='timer'>{this.state.numero.toFixed(1)}</a>{/*Com  o uso da javascript inserimos a quantidade de casas decimais que desejamos, neste caso apenas uma */}

        {/*Inserindo os botões */}
        <div className='areaBtn'>
          <a className='botao'>VAI</a>
          <a className='botao'>LIMPAR</a>
        </div>
      </div>
    )
  }
}


export default App;