import './App.css';
import ParentComp from './components/ParentComp';
import ChildComp from './components/ChildComp';

function App() {
  return (
    <div className="App">
      <ParentComp>
        <ChildComp></ChildComp>
      </ParentComp> 
    </div>
  );
}

export default App;
