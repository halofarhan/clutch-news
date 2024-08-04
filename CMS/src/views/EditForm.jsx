
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import ProductsForm from "../components/ProductForm";
import Toastify from 'toastify-js'

export default function EditForm() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams()
    async function fetchProduct() {
        try {
            const { data } = await axios.get(`https://server.halofarhan.my.id/article/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.access_token}` }
            })
            setProduct(data.Article)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    async function handleSubmit(e, title, content, imgUrl, categoryId) {
        e.preventDefault()
        try {
            const dataAdded = {title, content, imgUrl, categoryId }

            await axios.put(`https://server.halofarhan.my.id/article/${id}`, dataAdded, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            navigate('/')
        } catch (error) {
            console.log(error);
            Toastify({
                text: error.response.data.message,
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
                stopOnFocus: true,
                style: {
                    background: "#EF4C54",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold"
                }
            }).showToast();
        }
    }

    return (
        <>
            <ProductsForm handleSubmit={handleSubmit} article={product} nameProp="Edit" />
        </>
    )
}