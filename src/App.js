import Quiz from './Layout/Quiz/Quiz';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Quiz/>
      </div>
    </Provider>
  );
}

export default App;
