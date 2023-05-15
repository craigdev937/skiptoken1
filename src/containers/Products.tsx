import React from "react";
import { Audio } from "react-loader-spinner";
import { TriggerAPI } from "../global/TriggerAPI";

export const Products = () => {
    const { error, isFetching, data } = 
        TriggerAPI.useAllQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    if (isFetching) {
        return (
            <Audio 
                height="100"
                width="100"
                color="#4c358e"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />
        );
    };

    return (
        <React.Fragment>
            {data!.products.map((product) => (
                <li key={product.id}>
                    {product.title}
                </li>
            ))}
        </React.Fragment>
    );
};


