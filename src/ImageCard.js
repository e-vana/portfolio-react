import './ImageCard.css'


function ImageCard(props) {
  const styles = {
    backgroundImage: `linear-gradient(to bottom right, ${props.backgroundColor}, ${props.backgroundHighlight})`
  }
  
  return (
    <div className='container' style={styles}>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={props.url} alt={props.alt1}></img>
          {
            props.url2 && <img src={props.url2} alt={props.alt2}></img>
          }
          {
            props.url3 && <img src={props.url3} alt={props.alt3}></img>
          }
        </div>
      </div>
    </div>
  );
}

export default ImageCard;