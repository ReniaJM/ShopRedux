import React,{ useEffect } from "react";
// import styles from "./Product.module.css";



const Product = ({ product, isLoading, isError, fetchProductsWithRedux }) =>{

    useEffect(() => {
        fetchProductsWithRedux();
    }, []);


    if (isError) {
        return <h2>Error while loading... :(</h2>;
    }

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>

            {product.map((pro, i) =>
                <p key ={pro.id}>
                Name: {pro.title} {pro.id}
            </p>
            )}

        </div>
    );
};



export default Product;




