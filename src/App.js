import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import BoardProducts from './components/BoardProducts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <BoardProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
