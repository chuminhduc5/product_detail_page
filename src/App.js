import './App.css';
import BottomHeader from './Components/Header/BottomHeader/BottomHeader';
import TopHeader from './Components/Header/TopHeader/TopHeader';
import TechnicalComponent from './Components/ProductDetail/Technical.jsx';
import SubmitEmailComponent from './Components/SubmitEmail/SubmitEmail.jsx';
import EvaluateComponent from './Components/ProductDetail/Evaluate.jsx';
import Footer from './Components/Footer/Footer.jsx';
import SliderProduct from './Components/ProductDetail/SliderProduct.jsx';
import ProductDetail from './Components/ProductDetail/ProductDetail.jsx';
import NewsData from '../src/Data/NewsData.jsx'
import NewsComponent from './Components/ProductDetail/News.jsx';
import NewSimilarProduct from './Components/SimilarProduct/NewSimilarProduct.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <BottomHeader />
      </header>

      <div className='container'>
        <SliderProduct />
        <ProductDetail />
      </div>

      <div className='evaluate'>
        <EvaluateComponent />
        <TechnicalComponent />
      </div>

      <div className='news-product'>
        <div className='news-contents'>
          <h1>Tin tức mới nhất</h1>
          <div className="news-grid">
            {NewsData.map((news, index) => (
              <NewsComponent
                key={index}
                title={news.title}
                description={news.description}
                imageUrl={news.imageUrl}
                link={news.link}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <NewSimilarProduct />
      </div>

      <div className='SubmitEmail'>
        <SubmitEmailComponent />
      </div>

      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
