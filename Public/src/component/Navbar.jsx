import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [category, setCategory] = useState()
    const navigate = useNavigate()

    async function fetchData() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJzdGFmZiIsImlhdCI6MTcyMTgyMDc0MX0.hVVQZt3JN7hRfj7Rop9sGAuQKKniSlC0g-bu0IHxKFU"

        try {
            const { data } = await axios.get("https://server.halofarhan.my.id/category",
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setCategory(data.data)

        } catch (error) {
            console.log(error);
        }
    }

    function toCategory(category) {
        navigate(`/${category}`)
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <div className="navbar z-50 bg-base-100 px-44 justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                    </div>
                    <a href="/" className="btn btn-ghost text-2xl font-bebas ">CLUTCH</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-7">

                    {category?.map(el => {
                        return (
                            <button key={el.id}>
                                <p onClick={() => toCategory(el.name)} className=" relative group">
                                    <span className="group-hover:text-green-700 duration-300 ">{el.name}</span>
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[0.15rem] bg-green-700 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-[0.15rem] bg-green-700 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                                </p>
                            </button>
                        )
                    })}



                </div>
            </div>
        </>
    )

}

export default Navbar