
import Carousel from 'react-bootstrap/Carousel';
import profile from '../Assets/images/prof.jpg'
import crous from '../Assets/images/Group 130.png'
function HeroSection () {
    return(

        <>
           <div className="container heroSection">
               <div className="row">
                   <div className="col col-sm-12 col-md-6 col-lg-6">
                        <h1 className='title' >
                            Muhammad Asfandyar
                        </h1>
                        <p className='paragraph'>
                            Hello I am a Software Engineer
                        </p>
                   </div>

                   <div className="col col-sm-12 col-md-6 col-lg-6">
                   <img src={profile} alt='image'/>
                   </div>
                    
             </div>
           </div>
             


             <div>
 <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crous}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crous}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
             </div>
        
        </>
    );
}
export default HeroSection;