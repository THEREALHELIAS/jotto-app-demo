import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Input success={success} secretWord={secretWord}/>
      <Congrats success={false}/>
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
