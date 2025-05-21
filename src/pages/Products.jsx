import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../features/productSlice";
import { FaRupeeSign } from "react-icons/fa";


const Products = () => {
    const { product, loading, error } = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <div className="container">
                <div className="row g-3">
                    {
                        product.map((item) => (
                            <div className="col-sm-3" key={item.id}>
                                <div className="single_product">
                                    <div className="card">
                                        <div className="product_img">
                                            <img src={item.image} className="img-fluid" alt="" />
                                        </div>
                                        <div className="product_info">
                                            <h4>{item.title}</h4>
                                            <p>
                                                <FaRupeeSign /> {item.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products