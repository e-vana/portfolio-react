import ImageCard from './ImageCard';
import Home from './Home';
import About from './About';
import './App.css';

const images = [
  {
    url: '/images/MorelSignIn.svg',
    url2: '/images/MorelMenu.svg',
    url3: '/images/MorelMap.svg',
    backgroundColor: '#32465E',
    backgroundHighlight: '#0066FF'
  },
  {
    url: '/images/LANLogo.svg',
    backgroundColor: '#8B91AD', 
    backgroundHighlight:'#C58D7B',
  },
  {
    url: '/images/Coffee404.svg',
    url2: '/images/GrandCanyon.svg',
    url3: 'images/OverDrive.svg',
    backgroundColor: '#674236', 
    backgroundHighlight:'#37427D',
  },
  {
    url: '/images/MortgageCalc.svg',
    url2: '/images/MortgageCalc2.svg',
    backgroundColor: '#74AF3F', 
    backgroundHighlight:'#AEDD84',
  },
  {
    url: '/images/FastFileUI.svg',
    backgroundColor: '#191F32', 
    backgroundHighlight:'#526CCC',
  }
]


function App() {
  return (
    <div className="App">
      <Home></Home>
      <h1 className="section-title">About</h1>
      <About></About>
      <h1 className="section-title">Figma Sketches / UI </h1>
      {images.map((image) => {
        return(
          <div>
            <ImageCard url={image.url} url2={image.url2} url3={image.url3} backgroundColor={image.backgroundColor} backgroundHighlight={image.backgroundHighlight}></ImageCard>
          </div>
        )
      })}

    </div>
  );
}

export default App;
