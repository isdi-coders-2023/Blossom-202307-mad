import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { AppRouter } from './components/routes/app.routes';

function App() {
  return (
    <div>
      <WebContextProvider>
        <Header></Header>
        <AppRouter></AppRouter>
        <Footer></Footer>
      </WebContextProvider>
    </div>
  );
}

export default App;
