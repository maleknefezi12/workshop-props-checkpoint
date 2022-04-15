import './App.css';
import Welcome from './Profil/component';
import Hunter from './hunter.jpg';

function App() {
  const handelfullname=(name)=>alert(name);
  return (
    <div className="App">
      <Welcome name="Malek Nefzi"
          bio="Young Developer"
          profession="Studients"
          handelfullname={handelfullname}> 
        {Hunter}
   
      </Welcome>
    </div>
  );}
export default App;
