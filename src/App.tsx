import { AppRoutes } from './components/app.routes/app.routes';
import { Characters } from './components/characters/charaters';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
function App() {
  return (
    <div>
      <Header></Header>
      <Characters></Characters>
      <AppRoutes></AppRoutes>
      <Footer />
    </div>
  );
}

export default App;
