import React from "react";
import { Audio } from "react-loader-spinner";
import { TriggerAPI } from "../global/TriggerAPI";
import { IProducts } from "../models/Interfaces";

export const Skip = () => {
    const [products, setProducts] = React.useState<IProducts>();
    const [isNotOK, setIsNotOK] = React.useState(true);
    const [category, setCategory] = React.useState("all");

    const { isFetching, data } = 
    TriggerAPI.useProCatQuery(category, {
        skip: isNotOK,
    });

    React.useEffect(() => {
        if (data) {
            setProducts(data);
        }
        console.log("Products Data", data);
    }, [data]);

    const handleCategoryData = () => {
        setIsNotOK(false);
        setCategory("furniture");
    };

    return (
        <React.Fragment>
            <h1>RTK Query with Skip Token</h1>
            <p>
                This Query depends on query parameter Category Name.  But the initial one has to be "All", but there is no API endpoint named "All".  I had to Skip the first load with Skip Token.  Manually feeding the category paramety ("skincar") via an onClick handler.
            </p>
            <hr />
            {isFetching && (
                <Audio 
                    height="100"
                    width="100"
                    color="#4c358e"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
            )}
            <ul>
                {products && products.products.map((product) => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </ul>
            <button
                onClick={handleCategoryData}
                >Fetch Data
            </button>
        </React.Fragment>
    );
};


