import React, {Component} from 'react';
import './style.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    }

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    let state = this.state

    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      state.botao = 'VAI'
      
    }else{
       
      this.timer = setInterval(()=>{
      let state = this.state
      state.numero += 0.1
      this.setState(state)

    },100)
      state.botao = 'PAUSAR'
    }
    this.setState(state)
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
    }else{
      let state = this.state
      this.state.numero = 0
      state.botao = 'VAI'
      this.setState(state)
    }
  }

  render(){
    return(
      <div className='container'>
        <img src={require('./assets/cronometro.png')} className='img'/> {/*Inserindo a imagem de fundo do cronômetro */}
        <a className='timer'>{this.state.numero.toFixed(1)}</a>{/*Com  o uso da javascript inserimos a quantidade de casas decimais que desejamos, neste caso apenas uma */}

        {/*Inserindo os botões */}
        <div className='areaBtn'>
          <a className='botao' onClick={this.vai}>{this.state.botao}</a>
          <a className='botao' onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    )
  }
}


export default App;