import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Moods from './components/Moods';
import Subtitle from './components/Subtitle';
import SubmitButton from './components/SubmitButton';
import ShareButton from './components/ShareButton';
import Greeting from './components/Greeting';
import Dropdown from './components/Dropdown';
import EntryCard from './components/EntryCard';
import EntryList from './components/EntryList';
import InputMessage from './components/InputMessage';

function App() {
  return (
    <div>
      <Dropdown/>
      <Greeting/>
       <style>{'body { background-color: #F2F1EF; }'}</style>
      <center><img src="/images/pexels-vie-studio-7004950.jpg" alt=""/></center>
      <Title/>
      <Subtitle/>
      <div>
      <Moods/>
      </div>
      <EntryList/>
      <InputMessage/>
    </div>
  );
}

export default App;