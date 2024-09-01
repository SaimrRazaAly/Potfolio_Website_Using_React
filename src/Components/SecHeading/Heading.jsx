import Theme_Pattren from '../../asserts/assets/theme_pattern.svg'
import './Heading.css'
const Heading = ({title}) => {
  return (
    <div className='heading'>
    <div className="heading-title">
    <h1>{title}</h1>
    <img src={Theme_Pattren} alt="" />
    </div>
    </div>
  )
}

export default Heading