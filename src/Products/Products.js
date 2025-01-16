import './Products.css';
import { IoStar, IoBagRemove } from "react-icons/io5";

export default function Products() {
  return(
    <section className="card-container">
      <section className="card">
        <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe" />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className='card-reviews'>
            <IoStar className='ratings-star' />
            <IoStar className='ratings-star' />
            <IoStar className='ratings-star' />
            <IoStar className='ratings-star' />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> $200
            </div>

            <div className="bag">
              <IoBagRemove className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}