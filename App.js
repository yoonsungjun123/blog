import './App.css';
import { useState } from 'react';
import { likebutton } from 'react';

function App() {
  let [용품, product] = useState(['아기 용품 추천', '산모 용품 추천', '아빠 용품 추천']);
  let [likebutton, plus] = useState([0, 0, 0]);
  let [modal, setModal] = useState(true);

  return (
    <div className="App">

      <div className="nave">
        <h2>J&M</h2>
      </div>

      {
        용품.map(function (a, i) {
          return (
            <div key={a}>
              <h3 onClick={ function(){
                if (modal == true) {
                  setModal(false)
                } else if (modal == false){
                  setModal(true)
                }
              }}>{a}</h3>
              <p className='month'>12월 22일{" "}
              <span className='좋아요' onClick={ () => {
                let copy = [...likebutton]
                copy[i] = copy[i] + 1;
                plus(copy);
              } }>❤{likebutton[i]}</span>
              </p> 
            </div>)
        })
      }
      {
        modal == true ? <Modal product={product} 용품={용품}></Modal> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.용품[0]}</h4>
      <p>날짜 : </p>
      <p>상세내용</p>
      <button onClick={ ()=>{props.product(['가족 용품 추천', '산모 용품 추천', '아빠 용품 추천']
      )}}>글수정</button>
    </div>
  )
}

export default App;