import './App.css';
import Title from './components/Title';
import Moods from './components/Moods';
import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import EntryList from './components/EntryList';
import NewInput from './components/NewInput';

function App() {
  return (
    <div>
      <NavBar/>
      <Greeting/>
       <style>{'body { background-color: #F2F1EF; }'}</style>
      <center><img src="/images/pexels-vie-studio-7004950.jpg" alt=""/></center>
      <Title/>
      <div>
      {/* <Moods/> */}
      </div>
      {/* <EntryList/> */}
      <NewInput/>
    </div>
  );
}

export default App;