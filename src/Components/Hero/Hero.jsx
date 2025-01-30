import Profile_img from '../../asserts/assets/profile-2-transformed.jpeg'
import './Hero.css'
const Hero = () => {
  const handleDownload = (e) => {
    e.preventDefault()
    const fileUrl = "https://drive.google.com/uc?export=download&id=1ulQufEsWfi8paZisOLjzaovRI1WNRXLy";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf"; // Name for the downloaded file
    link.click();
  };
  return (
<>
<section className="hero" id='page-1'>
    <div className="hero_img">
        <img src={Profile_img} alt="" className='hero-min-img' />
    </div>
    <div className="hero-text">
        <h1><span>I'm Saim Raza,</span> fronted developer based in Paksitan</h1>
        <p>Crafting beautiful and performant web experiences with modern  technologies like React, Next JS  etc.</p>
    </div>
    <div className="hero-btns">
        <button className='active'>
          <a href="#page-5" >Connect With Me</a> </button>
        <button className='disable' onClick={handleDownload}>Download Resume</button>
    </div>
</section>
</>
  )
}

export default Hero