import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PagError } from './components/pag-error/pag-error';
function App() {
  return (
    <div>
      <Header></Header>
      <PagError />
      <Footer />
    </div>
  );
}

export default App;
