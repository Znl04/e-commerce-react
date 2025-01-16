import './Price.css';

export default function Price() {
  return(
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>$0 - $50
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>$50 - $100
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>$100 - $150
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>Over $150
        </label>
    </div>
  );
}