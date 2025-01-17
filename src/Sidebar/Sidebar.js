import './Sidebar.css';
import { FaShoppingCart } from "react-icons/fa";
import Categery from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

export default function Sidebar({handleChange}) {
  return(
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Categery handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>


    </>
  );
}