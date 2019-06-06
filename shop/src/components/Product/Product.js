import React, {Component} from "react";
import styles from "./Product.module.css";



class Product extends Component {

    componentWillMount() {

       console.log(this.props)
    }


render () {
    const { isError,isLoading,name, image, amount } = this.props;


    if (isError) {
        return <h2>Error while loading... :(</h2>;
    }

    if (isLoading) {
        return <h2>Loading...</h2>;
    }


    return (

        <div className={styles.Product}>
            <img className={styles.Image} src={image} alt={name} />
            <p className={styles.Price}>${amount}</p>
            <h3>{name}</h3>
        </div>
    );
};

}

export default Product;
