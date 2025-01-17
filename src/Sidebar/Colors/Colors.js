import './Colors.css';
import Input from '../../components/Input';

export default function Colors({handleChange}) {
  return(
    <div>
      <h2 className="sidebar-title">Colors</h2>
      <div className="">
        <label className="sidebar-label-container">
            <input type="radio" value='' name='test1'/>
            <span className="chekmark all" ></span>All
        </label>

        <Input 
          handleChange={handleChange}
          value='black'
          title='Black'
          name='test1'
          color='black'
        />
        <Input 
          handleChange={handleChange}
          value='blue'
          title='Blue'
          name='test1'
          color='blue'
        />
        <Input 
          handleChange={handleChange}
          value='red'
          title='Red'
          name='test1'
          color='red'
        />
        <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value='white' name='test1'/>
            <span className="chekmark" style={{background: 'white', border: '2px solid black'}} ></span>White
        </label>
        <Input 
          handleChange={handleChange}
          value='green'
          title='Green'
          name='test1'
          color='green'
        />

      </div>
      
    </div>
  );
}