import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = "김병준"
  const list = ['우유', '딸기', '바나나', '요거트', '초콜릿']

  return (
    <>
       <h1 className='cheong'>EggPotato</h1>
       <h1>{name}</h1>
       <ul>
          {
            list.map((item) => 
              <li>{item}</li>
            )
          }
       </ul>
       <img
          style={{ width: '200px', height: '200px'}}
          src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt='열공!!'
       />
    </>
  );
}

export default AppJSX;
