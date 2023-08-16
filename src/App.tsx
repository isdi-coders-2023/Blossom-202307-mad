import { Characters } from './components/characters/charaters';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { WebContextProvider } from './context/app-context-provider';
function App() {
  return (
    <div>
      <WebContextProvider>
        <Header></Header>
        <Characters></Characters>
        <Footer />
      </WebContextProvider>
    </div>
  );
}

export default App;
