import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = (e) => {
    
    setLinea1(e.target.value);
    
  }


  const onChangeLinea2 = (e) => {
    
    setLinea2(e.target.value);
    
  }

  const onChangeImagen = (e) => {
    
    setImagen(e.target.value);
    
  }

  const onClickExportar = (e) => {
    html2canvas(document.querySelector('#meme'))
    .then(canvas => { 
      let img = canvas.toDataURL('imagen/png');

      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
    
    
  }
  return (
    <div className="App">
      
      
      <select onChange={onChangeImagen}>
        <option value='Meme2'>Viejo Riendo</option>
        <option value='Meme1'>Nena en llamas</option>
        <option value='Meme3'>Nicolas Cage</option>
        <option value='Meme4'>Vamo Chtm</option>
      </select>
      
      <br />
      <input onChange={onChangeLinea1} type='text' placeholder='Linea 1'/> <br />
      <input onChange={onChangeLinea2} type='text' placeholder='Linea 2'/> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span className='span1'>{linea1}</span> <br />
        <span className='span2'>{linea2}</span>
        <img src={'/img/' + imagen + '.png'} />
      </div>

    </div>
  );
}

export default App;
