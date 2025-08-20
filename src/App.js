import './App.css';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestor de Tarefas</h1>
        <p>
          Um projeto simples, utilizando Python e React!
        </p>
        <TaskList />
      </header>
    </div>
  );
}

export default App;
