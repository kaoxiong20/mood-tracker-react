import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Moods from './components/Moods';
import Subtitle from './components/Subtitle';
import SubmitButton from './components/SubmitButton';


function App() {
  return (
    <div>
      <Title/>
      <Subtitle/>
      <Header/>
      <Moods/>
      <SubmitButton/>
    </div>
  );
}

export default App;