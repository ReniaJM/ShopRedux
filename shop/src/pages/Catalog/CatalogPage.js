import React,  {useEffect, useState }  from "react";

import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsList/ProductsList";
import styles from "./CatalogPage.module.css";


import { RadioGroup, Radio } from "react-radio-group";


const CatalogPage =({product,isError,isLoading,fetchProductsWithRedux})=> {

    useEffect(() => {
        fetchProductsWithRedux();
    }, []);

    const [name, searchInput] = useState("");
    const [manufacture, changeInput] = useState("");


    const clearInput = () => {
        searchInput('')
        changeInput('')

    }

    if (isError) {
        return <h2>Error while loading... :(</h2>;
    }

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

        return (
            <div>
                <HeaderBig>Catalog</HeaderBig>
                <div className={styles.Catalog}>
                    <div className={styles.ColumnLeft}>
                        <div >
                            <div className={styles.Header}>
                                <h4>Search</h4>
                             <button className={styles.Clear} onClick={clearInput} >
                                 Clear</button>
                            </div>
                            <div>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="search..."
                                    value={name}
                                    onChange={e => searchInput(e.target.value)}
                                />
                            </div>
                            <h4>Manufacturer</h4>
                            <RadioGroup
                                name={manufacture}
                                onClick={event => changeInput(event.target.value)}>
                                <label className="radioLabel">
                                    <Radio
                                        value="manufacture"
                                        readOnly
                                        checked={manufacture === "" ? true : false}
                                    />
                                    All
                                </label>
                                <label className="radioLabel">
                                    <Radio value="apple" />
                                    Apple
                                </label>
                                <label className="radioLabel">
                                    <Radio value="dell" />
                                    Dell
                                </label>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className={styles.ColumnRight}>
                        <ProductsList product={product}   name={name}
                                      manufacture={manufacture} />
                    </div>
                </div>
            </div>

        );

};

export default CatalogPage;
