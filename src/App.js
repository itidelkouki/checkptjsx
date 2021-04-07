
import './style.css';
import flowerImage from "./imageInSrc.jpg"

function App() {
  return (
<>
      
<div  className="head-page" style={{border :'solid 1px black', maxwidth:'100vw'}}>

<h1 className="title-red">Kouki Itidel</h1>

 <img className='image-flower' src={flowerImage} alt='myImage'  />

 <img className='image-flower' src="/imageInPublic.jpg" alt='image' className='image-flower'/>
 
</div>

<video width='320' height='240' controls  src="myVideo.mp4" type="video/mp4" >

</video>

</>
  );
}
export default App;
