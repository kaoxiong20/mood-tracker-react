import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Moods from './components/Moods';
import Subtitle from './components/Subtitle';
import SubmitButton from './components/SubmitButton';
import Button from './components/Button';


function App() {
  return (
    <div>
       <style>{'body { background-color: #F2F1EF; }'}</style>
      <img src="/images/pexels-vie-studio-7004950.jpg" alt=""/>
      <Title/>
      <Subtitle/>
      <Header/>
      <Moods/>
      <SubmitButton/>
      <Button/>
    </div>
  );
}

export default App;