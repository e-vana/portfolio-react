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
    backgroundHighlight: '#0066FF',
    alt1: 'Morel Signin Figma Sketch',
    alt2: 'Morel Menu Figma Sketch',
    alt3: 'Morel Map Figma Sketch'
  },
  {
    url: '/images/LANLogo.svg',
    backgroundColor: '#8B91AD', 
    backgroundHighlight:'#C58D7B',
    alt1: 'orLANdo Figma sketch',
  },
  {
    url: '/images/Coffee404.svg',
    url2: '/images/GrandCanyon.svg',
    url3: 'images/OverDrive.svg',
    backgroundColor: '#674236', 
    backgroundHighlight:'#37427D',
    alt1: 'Coffee Site Figma Sketch',
    alt2: 'Grand Canyon Figma Sketch',
    alt3: 'Overdrive Figma Sketch',
  },
  {
    url: '/images/MortgageCalc.svg',
    url2: '/images/MortgageCalc2.svg',
    backgroundColor: '#74AF3F', 
    backgroundHighlight:'#AEDD84',
    alt1: 'Mortgage Calculator Figma Sketch',
    alt2: 'Mortgage Calculator Larger Figma Sketch'
  },
  {
    url: '/images/FastFileUI.svg',
    backgroundColor: '#191F32', 
    backgroundHighlight:'#526CCC',
    alt1: 'Fast File UI Figma Sketch',
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
