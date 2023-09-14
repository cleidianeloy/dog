import { useEffect, useState } from 'react';
import './style.css';
function App() {
  const [link, setLink] = useState('');
  const [click, setClick] = useState(0);
  const [isloading, setIsLoading] = useState(true);
  useEffect(()=>{
    fetch("https://random.dog/woof.json?ref=apilist.fun")
    .then(res => res.json())
    .then((result) => {
        setIsLoading(false);
        setLink(result.url);
    })
  },[click])
  const changeDog = () =>{
    setClick(prev => prev + 1);
    setIsLoading(true);
  }
  return (
      !isloading ? (
          <div>
              <img src={link} 
                      alt="cachorro aleatorio"
                      width="auto" 
                      height="500"/>
              <button onClick={(changeDog)}>Clique para outro cachorro aleatório</button>
        </div>) 
     : <p>carregando...</p>
  );
}

export default App;
