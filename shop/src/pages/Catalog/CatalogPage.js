import React,  {useEffect, useState }  from "react";
import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsListCatalog/ProductsListCatalog";
import styles from "./CatalogPage.module.css";
import { RadioGroup, Radio } from "react-radio-group";


const CatalogPage = ({product, isLoading, isError, fetchProductsWithRedux,radioManufacture}) => {

  useEffect(() => {
    fetchProductsWithRedux();
  }, [fetchProductsWithRedux]);

  const [name, searchName] = useState("");
  const [manufacture, searchManufacture] = useState("");


  const clearInput = () => {
    searchName('')
    searchManufacture('')

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
                    onChange={e => searchName(e.target.value)}
                />
              </div>
              <h4>Manufacturer</h4>
              <RadioGroup
                  name={manufacture}
                  onClick={event => {
                    if (event.target.value === undefined) {
                      searchManufacture("");
                    } else {
                      searchManufacture(event.target.value);
                    }
                  }}
              >
                <label className="radioLabel">
                  <Radio
                      value=""
                      readOnly
                      checked={manufacture === "" ? true : false}
                  />
                  All
                </label>

                {radioManufacture(product).map(i => (
                    <div key={i}>
                      <label className="radioLabel">
                        <Radio value={i.toString().toLowerCase()} />
                        {i}
                      </label>
                    </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className={styles.ColumnRight}>
            <ProductsList product={product} name={name} manufacture={manufacture} />
          </div>
        </div>
      </div>
 )

};

export default CatalogPage;
