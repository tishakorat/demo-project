import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./productDetail.css"
const ProductDetail = () => {
    const { productId } = useParams()
    const [data, setData] = useState()
    const [image, setImage] = useState("")
    useEffect(() => {
        if(productId) {
            getProductDetail(productId)
        }
    }, [productId])
    const getProductDetail = async (id) => {
        let res = await axios.get(`${process.env.REACT_APP_ENDPOINT}/products/${id}`)
        if(res && res.status == 200) {
            setImage(res.data.images[0])
            setData(res.data)
        }
    }
    return (
        <>
        <section id="services" className="services section-bg">
            <div className="container-fluid">
                <div className="col-sm-12 text-center mb-4">
                <a className="btn btn-primary" target="_blank" href="http://paypal.me/skd1996"> Donate Now <i className="fa fa-dollar"></i></a>
                </div>
                <div className="row row-sm">
                    <div className="col-md-6 _boxzoom">
                        <div className="zoom-thumb">
                        <ul className="piclist">
                            {data?.images?.map((im, i) => (
                                <li onClick={() => setImage(im)}><img src={im} alt="" className={im == image ? 'border' : ''} /></li>
                            ))}
                        </ul>
                        </div>
                        <div className="_product-images">
                            <img className="my_img" src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="_product-detail-content">
                        <p className="_p-name"> {data?.title} </p>
                        <div className="_p-price-box">
                            <div className="p-list">
                                <span> M.R.P. : <i className="fa fa-inr"></i> <del> {data?.price}  </del>   </span>
                                <span className="price"> Rs. {(data?.price - (data?.price * data?.discountPercentage / 100)).toFixed(2)} </span>
                            </div>
                            <div className="_p-add-cart">
                                <div className="_p-qty">
                                    <span>Add Quantity</span>
                                    <div className="value-button decrease_" id="" value="Decrease Value">-</div>
                                    <input type="number" name="qty" id="number" value="1" />
                                    <div className="value-button increase_" id="" value="Increase Value">+</div>
                                </div>
                            </div>
                            <div className="_p-features">
                                <span> Description About this product:- </span>
                                Solid color polyester/linen full blackout thick sunscreen floor curtain
                                Type: General Pleat
                                Applicable Window Type: Flat Window
                                Format: Rope
                                Opening and Closing Method: Left and Right Biparting Open
                                Processing Accessories Cost: Included
                                Installation Type: Built-in
                                Function: High Shading(70%-90%)
                                
                                Material: Polyester / Cotton
                                Style: Classic
                                Pattern: Embroidered
                                Location: Window
                                Technics: Woven
                                Use: Home, Hotel, Hospital, Cafe, Office
                                Feature: Blackout, Insulated, Flame Retardant
                                Place of Origin: India
                                Name: Curtain
                                Usage: Window Decoration
                                Keywords: Ready Made Blackout Curtain                        
                            </div>
                            <form action="" method="post" accept-charset="utf-8">
                                <ul className="spe_ul"></ul>
                                <div className="_p-qty-and-cart">
                                    <div className="_p-add-cart">
                                    <button className="btn-theme btn buy-btn" tabindex="0">
                                    <i className="fa fa-shopping-cart"></i> Buy Now
                                    </button>
                                    <button className="btn-theme btn btn-success" tabindex="0">
                                    <i className="fa fa-shopping-cart"></i> Add to Cart
                                    </button>
                                    <input type="hidden" name="pid" value="18" />
                                    <input type="hidden" name="price" value="850" />
                                    <input type="hidden" name="url" value="" />    
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="sec bg-light">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 title_bx">
                    <h3 className="title"> Recent Post   </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 list-slider mt-4">
                    <div className="owl-carousel common_wd  owl-theme" id="recent_post">
                    <div className="item">
                        <div className="sq_box shadow">
                            <div className="pdis_img"> 
                                <span className="wishlist">
                                <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                                </span>
                                <a href="#">
                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" /> 
                                </a>
                            </div>
                            <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                            <div className="price-box mb-2">
                                <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                            </div>
                            <div className="btn-box text-center">
                                <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sq_box shadow">
                            <div className="pdis_img"> 
                                <span className="wishlist">
                                <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                                </span>
                                <a href="#">
                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" /> 
                                </a>
                            </div>
                            <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                            <div className="price-box mb-2">
                                <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                            </div>
                            <div className="btn-box text-center">
                                <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sq_box shadow">
                            <div className="pdis_img"> 
                                <span className="wishlist">
                                <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                                </span>
                                <a href="#">
                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" /> 
                                </a>
                            </div>
                            <h4 className="mb-1"> <a href="#"> Milton Bottle </a> </h4>
                            <div className="price-box mb-2">
                                <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                            </div>
                            <div className="btn-box text-center">
                                <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sq_box shadow">
                            <div className="pdis_img"> 
                                <span className="wishlist">
                                <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                                </span>
                                <a href="#">
                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" /> 
                                </a>
                            </div>
                            <h4 className="mb-1"> <a href="#"> Milton Bottle </a> </h4>
                            <div className="price-box mb-2">
                                <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                            </div>
                            <div className="btn-box text-center">
                                <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sq_box shadow">
                            <div className="pdis_img"> 
                                <span className="wishlist">
                                <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                                </span>
                                <a href="#">
                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" /> 
                                </a>
                            </div>
                            <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                            <div className="price-box mb-2">
                                <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                            </div>
                            <div className="btn-box text-center">
                                <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sq_box shadow">
                            <div className="pdis_img"> 
                                <span className="wishlist">
                                <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                                </span>
                                <a href="#">
                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" /> 
                                </a>
                            </div>
                            <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                            <div className="price-box mb-2">
                                <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                            </div>
                            <div className="btn-box text-center">
                                <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="sq_box shadow">
                            <div className="pdis_img"> 
                                <span className="wishlist">
                                <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                                </span>
                                <a href="#">
                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" /> 
                                </a>
                            </div>
                            <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                            <div className="price-box mb-2">
                                <span className="price"> Price <i className="fa fa-inr"></i> 200 </span>
                                <span className="offer-price"> Offer Price <i className="fa fa-inr"></i> 120 </span>
                            </div>
                            <div className="btn-box text-center">
                                <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Add to Cart </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default ProductDetail