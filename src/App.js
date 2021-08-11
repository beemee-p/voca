import './App.css';
import Hello from './component/Hello';


function App() {
  return (
    <div className="App">
      <h1>props:properties</h1>
      <Hello age={10} name={"Mike"} />
      <Hello age={20} name={"Julia"} />
      <Hello age={30} name={"Tom"} />
    </div>
  );
} 
export default App;
