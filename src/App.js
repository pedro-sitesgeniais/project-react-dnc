import Task from './Task';

function App() {
  
  const tasks = [
    'Lavar o carro',
    'Buscar o cachorro',
    'Ir no mercado'
  ];

  return <>
  <h1>TODO List</h1>
  {tasks.map((value) => {
    return <p><Task text={value}/></p>; 
  })}
  
  </>;
}

export default App;
