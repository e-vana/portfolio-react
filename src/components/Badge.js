import '../components/Badge.css'

function Badge(props){
  let style = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  }
  
  function scroll(){
    let scrollTo = document.getElementById(`${props.scrollTo}`);
    scrollTo.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  return (
    <div onClick={scroll}>
      <div className="badge" style={style}>{props.text}</div>
    </div>

  )
}
export default Badge;