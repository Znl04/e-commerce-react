import './Colors.css';

export default function Colors() {
  return(
    <div>
        <label className="sidebar-label-container color-title">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>Black
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>White
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>Blue
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>Red
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test2'/>
          <span className="chekmark"></span>Green
        </label>
    </div>
  );
}