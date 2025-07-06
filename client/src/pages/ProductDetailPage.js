import React, { useEffect, useState } from "react";
import Layout from "../commponets/Layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const { slug } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/product/${slug}`);

                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProduct();
    }, [slug]);


    if (!product) return <div>Loading...</div>;

    return (
        <Layout title={product.name}>
            <div className="container">
                <h1 className="mt-4">{product.name}</h1>
                <img src={product.image} alt={product.name} className="img-fluid" />
                <p className="mt-4">{product.description}</p>
                <h3>Price: ${product.price}</h3>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </Layout>
    );
};

export default ProductDetailPage;
