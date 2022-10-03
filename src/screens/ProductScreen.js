import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

const ProductScreen = (props) => {
    console.log(data.products);
    const id = useParams()//recuper l'id sur le params c'est une id de type object
    const product = data.products.find(({_id} ) => _id === id.id);
    if(!product){
        return (<div>Product Not Found</div>)
    }else return (
            <div> 
                <Link to="/">Back to result</Link>
                <div className='row top' >
                    <div className="col-2">
                        <img heigth={"400px"} width={"400px"} className="large" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>{product.name}</li>
                            <li><Rating
                                rating={product.numReviews}
                                numReviews={product.numReviews}
                            />
                            </li>
                            <li>Price: ${product.price}</li>
                            <li>Description:
                                <p>{product.description}</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-1">
                        <div className='card card-body'>
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">${product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>{product.contInstock > 0
                                        ? (<span className='success'>In stock</span>)
                                        : (<span className='error'> Unavaible</span>)}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className='primary block'>Add to card</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ProductScreen;