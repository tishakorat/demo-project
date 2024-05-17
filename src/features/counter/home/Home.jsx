import { useEffect } from "react"
import { getAllData } from "./HomeSlice"
import { useDispatch, useSelector } from "react-redux"
import "./Home.css"
import { Link, useNavigate } from "react-router-dom"
const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useSelector((state) => state.product.loading)
    const data = useSelector((state) => state.product.data)
    console.log({ loading, data });
    useEffect(() => {
        dispatch(getAllData())
    }, [])

    return (
        <>
            <h1>All Products</h1>
            <button
                onClick={() => navigate("/login")}
            >Login</button>
            <div className="main-wrapper">
                {loading ?
                    <p>Loading...</p>
                    :
                    data?.products?.length > 0 ?
                        data?.products?.map((product, idx) => (
                            <Link to={`/product/${product?.id}`}>
                                <div className="product-card">
                                    <div className="badge">Hot</div>
                                    <div className="product-tumb">
                                        <img src={product.thumbnail} alt="" />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory">Women,bag</span>
                                        <h4><a href="">{product.title}</a></h4>
                                        <p>{product?.description}</p>
                                        <div className="product-bottom-details">
                                            <div className="product-price"><small>${product?.price}</small>${(product?.price - ((product?.price * product?.discountPercentage) / 100)).toFixed(2)}</div>
                                            <div className="product-links">
                                                <a href=""><i className="fa fa-heart"></i></a>
                                                <a href=""><i className="fa fa-shopping-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                        : <div><center>No data found</center></div>
                }
            </div>
        </>
    )
}

export default Home