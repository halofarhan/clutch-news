import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js'

let token = localStorage.access_token;
export default function Home() {
    const [product, setProducts] = useState([]);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    if (!localStorage.access_token) {
        navigate("/login");
    }

    async function fetchProducts() {

        try {
            const { data } = await axios.get(`https://server.halofarhan.my.id/article?limit=99`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProducts(data.product);

        } catch (error) {
            console.log(error);
            Toastify({
                text: error.response.data.error,
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
    
    function handleFileChange(event) {
        setFile(event.target.files[0]);
        
      };
    async function handlePatch(id) {
        try {
            const formData = new FormData();            
            formData.append('file', file); 
                       

            const { data } = await axios.patch(`https://server.halofarhan.my.id/article/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            
            fetchProducts()

        } catch (error) {
            console.log(error);
        }
    }


    async function deleteArticle(id) {
        try {
            let { data } = await axios.delete(`https://server.halofarhan.my.id/article/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate("/");
            fetchProducts()
        } catch (error) {
            console.log(error);
        }
    }

    function navigateEditArticle(id) {
        navigate(`/edit-article/${id}`);
    }

    function navigateAddArticle() {
        navigate(`/add-article`);
    }


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="bg-gray-100 h-auto pt-10">
                <section className="container px-4 mx-auto pt-10">
                    <div className="flex items-center gap-x-3 justify-between">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                            Product
                            <div>
                                <span className=" px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                                    Total Product : {product?.length}
                                </span>
                            </div>
                        </h2>
                        <div className="flex gap-3">
                            <div className="pt-4">
                                <button
                                    onClick={() => navigateAddArticle()}
                                    className="btn bg-slate-800 text-white"
                                >
                                    Add Product
                                </button>
                            </div>
                            <div className="pt-4">
                                {role === 'admin' && (
                                    <button
                                        onClick={() => { navigate('/add-user') }}
                                        className="btn bg-slate-800 text-white"
                                    >
                                        Add User
                                    </button>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block w-screen py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    <div className="flex items-center gap-x-3">
                                                        <input
                                                            type="checkbox"
                                                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                                        />
                                                        <span>Photo</span>
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                >
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Title</span>
                                                    </button>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 "
                                                >
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Content</span>
                                                    </button>
                                                </th>
                                                <th scope="col" className="relative py-3.5 px-4">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {product?.map((product, index) => {
                                                return (
                                                    <tr key={product?.id}>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3 bg">
                                                                <a className="pr-5">{product?.id}</a>
                                                                <div className="flex items-center gap-x-2">
                                                                    <img
                                                                        className="object-cover w-15 h-10 rounded-md"
                                                                        src={product?.imgUrl}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className=" py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            {product?.title}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap h-2">
                                                            {product?.content.slice(0, 20)}...
                                                        </td>

                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-x-6">
                                                                <button
                                                                    onClick={() => deleteArticle(product.id)}
                                                                    className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                                <button onClick={() => navigateEditArticle(product.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                                <div>
                                                                <input type="file" onChange={handleFileChange} />
                                                                <button   onClick={() => handlePatch(product.id)} className="text-gray-500 dark:text-white  dark:hover:text-yellow-500 hover:text-yellow-500 btn p-2">
                                                                    update
                                                                </button>
                                                                </div>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}
