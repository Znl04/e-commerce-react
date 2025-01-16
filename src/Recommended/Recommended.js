import './Recommended.css';

export default function Recommended() {
  return(
    <>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-btns">
        <button className='btns'>All products</button>
        <button className='btns'>Nike</button>
        <button className='btns'>Puma</button>
        <button className='btns'>Vans</button>
      </div>
    </>
  );
}