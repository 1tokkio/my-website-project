import './Background.css'
import video from '../../assets/video.mp4'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'


const Background = ({playStatus, heroCount}) => {
  if(playStatus){
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={video} type='video/mp4'/>
      </video>
    )
  }
  else if (heroCount===0){
    return <img src={image1} className='background fade-in' alt=''/>  
   }
   else if (heroCount===1){
    return <img src={image2} className='background fade-in' alt=''/>  
   }
   else if (heroCount===2){
    return <img src={image3} className='background fade-in' alt=''/>  
   }
   else if (heroCount===3){
    return <img src={image4} className='background fade-in' alt=''/>  
   }
   else if (heroCount===4){
    return <img src={image5} className='background fade-in' alt=''/>  
   }
}

export default Background