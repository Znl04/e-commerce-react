import './Recommended.css';
import Buttons from '../components/Buttons';

export default function Recommended({handleClick}) {
  return(
    <>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-btns">
        <Buttons onClickHandler={handleClick} value="" title='All products'/>
        <Buttons onClickHandler={handleClick} value="Nike" title='Nike'/>
        <Buttons onClickHandler={handleClick} value="Adidas" title='Adidas'/>
        <Buttons onClickHandler={handleClick} value="Puma" title='Puma'/>
        <Buttons onClickHandler={handleClick} value="Vans" title='Vans' />
      </div>
    </>
  );
}