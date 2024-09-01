import Profile_img from '../../asserts/assets/profile-2-transformed.jpeg'
import './Hero.css'
const Hero = () => {
  return (
<>
<section className="hero" id='page-1'>
    <div className="hero_img">
        <img src={Profile_img} alt="" className='hero-min-img' />
    </div>
    <div className="hero-text">
        <h1><span>I'm Saim Raza,</span> fronted developer based in Gilgit</h1>
        <p>fronted developer from Nagar colony,Gilgit with 2 years of experience in multiple companines like 3D-GB Google etc.</p>
    </div>
    <div className="hero-btns">
        <button className='active'>
          <a href="#page-5">Connect With Me</a> </button>
        <button className='disable'>Download Resume</button>
    </div>
</section>
</>
  )
}

export default Hero