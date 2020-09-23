import React from 'react';
import './Home.css';
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTU0NGZhYWQt/MTU0NGZhYWQt-Mzc1NDBkNTct-w1500._CB405104207_.jpg"
                alt="front-page"
            />

            <div className="home__row">
                <Product
                    id="12323"
                    title="The lean start"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MjhiNzdlMmIt-w379._SY304_CB406527685_.jpg">

                </Product>

                <Product
                    id="12323"
                    title="The lean start"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MjhiNzdlMmIt-w379._SY304_CB406527685_.jpg">

                </Product>
            </div>
            <div className="home__row">
                <Product
                    id="12323"
                    title="The lean start"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MjhiNzdlMmIt-w379._SY304_CB406527685_.jpg">

                </Product>
                <Product
                    id="12323"
                    title="The lean start"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MjhiNzdlMmIt-w379._SY304_CB406527685_.jpg">

                </Product>
                <Product
                    id="12323"
                    title="The lean start"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MjhiNzdlMmIt-w379._SY304_CB406527685_.jpg">

                </Product>
            </div>
            <div className="home__row">
                <Product
                    id="12323"
                    title="The lean start"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MjhiNzdlMmIt-w379._SY304_CB406527685_.jpg">

                </Product>
            </div>
        </div>
    )
}

export default Home;
