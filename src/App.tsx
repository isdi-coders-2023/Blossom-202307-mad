import { Footer } from './components/footer/footer';
import { Form } from './components/form/form';
import { Header } from './components/header/header';
import { AppRouter } from './components/routes/app.routes';

function App() {
  return (
    <div>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer />
    </div>
  );
}

export default App;
