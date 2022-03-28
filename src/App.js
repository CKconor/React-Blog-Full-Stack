import Home from './pages/Home'
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <div className="App dark:bg-darkmode bg-lightmode">
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
