import './App.css';
import Home from './partials/home'
import GlobalStyle from "./theme/injectGlobal";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
