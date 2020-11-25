import React from 'react'
import { useSelector } from 'react-redux'
import { store, remove, clear, inc } from '../../store/index'
import { ProductItem } from '../../store/state'
import './Basket.css'
import { Link } from 'react-router-dom'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../index';

export default function Basket() {
    const products = useSelector((state: ProductItem[]) => state)
    return (
        <>
            <div className='text-center mt-5'>
                {products.filter(product => product.added).length === 0 ? (
                    <>
                        <h1 style={{ color: "grey" }}>Basket</h1>
                        <span>Your Basket is Empty</span>
                        <br />
                        <Link to='/'><button className='btn btn-success mt-5'>Go to buy</button>
                        </Link>
                    </>)
                    :
                    ''
                }
            </div>
            {products.filter(product => product.added).length === 0 ? ' ' :
                <div>
                    <table >
                        <thead >
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>T.Price</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {products.filter(product => product.added).map((product: ProductItem, i) => (
                                <tr key={i.toString()}>
                                    <td>
                                        <img className='img-flued' src={product.src} alt={product.name} height='100px' width='100px' />
                                    </td>
                                    <td>{product.name} </td>
                                    <td>{product.quantity}</td>
                                    <td>${product.price}</td>
                                    <td>{product.price * product.quantity}</td>
                                    <td>
                                        <button
                                            className='btn btn-outline-warning btn-sm mr-2 mb-1'
                                            onClick={() => store.dispatch(inc(product))}>
                                            <PlusCircleIcon width={"20px"} />
                                        </button>
                                        {
                                            product.quantity > 1 &&
                                            <button
                                                onClick={() => store.dispatch(remove(product))}
                                                className="btn btn-outline-danger btn-sm mb-1">
                                                <MinusCircleIcon width={"20px"} />
                                            </button>
                                        }
                                        {
                                            <button
                                                onClick={() => store.dispatch(clear(product))}
                                                className="btn btn-danger btn-sm mb-1">
                                                <TrashIcon width={"20px"} />
                                            </button>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {
                        <div className="text-center col-sm-12 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Payment</p>
                                <h3 className='m-0 txt-right'>Total : ${products.reduce((total, pro) => total + (pro.price) * pro.quantity, 0)}</h3>
                                <hr className="my-4" />
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}