import './Category.css';

export default function Category() {
  return(
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div className="">
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="chekmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="chekmark"></span>Sneakers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="chekmark"></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="chekmark"></span>Sandals
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="chekmark"></span>Heels
        </label>
      </div>
    </div>
  );
}