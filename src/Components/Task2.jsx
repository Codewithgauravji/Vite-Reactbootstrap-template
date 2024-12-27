import React from 'react'
import './Task2.css'
import Header from './Header'
function Task2() {
    return (
        <div className='task2'>
            <Header/>
            <div class="card-container">
                {/* <!-- Card 1 --> */}
                <div class="card">
                    <img src="https://th.bing.com/th?id=OIP.4SI_eucIPHRUQ0cZqCsaBQAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Wood Sofa set-3" class="card-image"/>
                        <div class="card-content">
                            <h3>Wood Sofa set-3</h3>
                            <p class="price">$550</p>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="guarantee"><span>✔</span> 2 Years Guarantee</p>
                            <div class="card-buttons">
                                <button class="wishlist-button">Add to Wishlist</button>
                                <button class="cart-button">Add to Cart</button>
                            </div>
                        </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div class="card">
                    <img src="https://th.bing.com/th?id=OIP.kwEYk6gukNfFjz4mLfxB5wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Wood Sofa set-3" class="card-image"/>
                        <div class="card-content">
                            <h3>Wood Sofa set-3</h3>
                            <p class="price">$600</p>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="guarantee"><span>✔</span> 1 Year Guarantee</p>
                            <div class="card-buttons">
                                <button class="wishlist-button">Add to Wishlist</button>
                                <button class="cart-button">Add to Cart</button>
                            </div>
                        </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div class="card">
                    <img src="https://th.bing.com/th/id/OIP.kXxskmLB8ZKeSSKC6vMSXQHaEo?w=284&h=180&c=7&r=0&o=5&pid=1.7" alt="Wood Sofa set-2" class="card-image"/>
                        <div class="card-content">
                            <h3>Wood Sofa set-2</h3>
                            <p class="price">$1,000</p>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="guarantee"><span>✔</span> 4 Years Guarantee</p>
                            <div class="card-buttons">
                                <button class="wishlist-button">Add to Wishlist</button>
                                <button class="cart-button">Add to Cart</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Task2