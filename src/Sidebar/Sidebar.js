import './Sidebar.css';
import { FaShoppingCart } from "react-icons/fa";
import Categery from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

export default function Sidebar() {
  return(
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Categery/>
        <Price/>
        <Colors/>
      </section>


    </>
  );
}