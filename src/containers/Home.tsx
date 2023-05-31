import React from "react";
import { Dna } from "react-loader-spinner";
import { TriggerAPI } from "../global/TriggerAPI";

export const Home = () => {
    const [postId, setPostId] = React.useState(1);
    const [postCat, setPostCat] = React.useState("");

    const [getAllProd, {
        isFetching: isFetchingAllProducts, 
        data: AllProducts 
    }] = TriggerAPI.useLazyAllQuery();

    const [getOneProd, {
        isFetching: isFetchingOneProd, 
        data: singleProd 
    }] = TriggerAPI.useLazyOneQuery();

    const [getCategory, {
        isFetching: isFetchingCategory, 
        data: prodsCategory 
    }] = TriggerAPI.useLazyProCatQuery();

    const handleAllProd = () => {
        getAllProd();
    };

    const handleOneProd = () => {
        getOneProd(postId);
    };

    const handleCategory = () => {
        getCategory(postCat);
    };

    const handlePostID = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostId(Number(event.target.value));
    };

    const handlePostCat = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostCat(event.target.value)
    };

    return (
        <React.Fragment>
            <h1>RTK Query Examples</h1>
            <button
                onClick={handleAllProd}
                >Get All Products
            </button>
            <aside>
                {isFetchingAllProducts && (
                    <Dna 
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-landing"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                )}
            </aside>
            <hr />
            <aside>
                {AllProducts && (
                    <ul>
                        {AllProducts.products.map((product) => (
                            <li key={product.id}>
                                {product.id} {product.title}
                            </li>
                        ))}
                    </ul>
                )}
            </aside>
            <aside>
                <input 
                    type="text" 
                    onChange={handlePostID}
                />
                <p>
                    <small>Insert ID from 1 to 100</small>
                </p>
                <button
                    onClick={handleOneProd}
                    >Get Single Data
                </button>
                <hr />
                {isFetchingOneProd && (
                    <Dna 
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                )}
                {singleProd && (
                    <ul>
                        <li>
                            <span>ID: {singleProd.id}</span>
                            <span>Title: {singleProd.title}</span>
                            <img 
                                alt={singleProd.title}
                                src={singleProd.thumbnail} 
                            />
                            <h6>
                                <span>Brand:</span>{" "}
                                <span>{singleProd.brand}</span>
                            </h6>
                            <h6>
                                <span>Category:</span>
                                <span>{singleProd.category}</span>
                            </h6>
                        </li>
                    </ul>
                )}
            </aside>
            <aside>
                <input 
                    type="text" 
                    onChange={handlePostCat}
                />
                <p>
                    <small>
                        insert skincare, 
                        tops, laptops, 
                        automotive, smartphones
                    </small>
                </p>
                <button
                    onClick={handleCategory}
                    >Data by Category
                </button>
                <hr />
                {isFetchingCategory && (
                    <Dna 
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapping"
                    />
                )}
                {prodsCategory && (
                    <ul>
                        {prodsCategory.products.map((product) => (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt="" />
                                {product.title}
                                <h6>Category: {product.category}</h6>
                            </li>
                        ))}
                    </ul>
                )}
            </aside>
        </React.Fragment>
    );
};




