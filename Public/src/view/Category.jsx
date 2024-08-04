import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSkeleton from "../component/LoadingSkeleton";
import CardOther from "../component/CardOther";

function Category() {
    const [article, setArticle] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const { category } = useParams()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function fetchData() {
        try {
            setLoading(true)
            const { data } = await axios.get(`https://server.halofarhan.my.id/pub?search=${search}&page=${page}&sort=ASC&limit=&filter=${category}`)
            setArticle(data.pagination.data)

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [search,category])

    function backHome() {
        navigate('/')
    }

    return (
        <>
            {/* Path */}
            <div className="mx-48 flex gap-3 mb-3">
                <button><p className=" font-poppins font-semibold hover:text-[#06a54b] transition duration-300 ease-in-out" onClick={backHome}>Home</p></button>
                <div className=" w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path
                            style={{ fill: "#232326", stroke: "#232326", strokeWidth: 1 }}
                            d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                            data-name="Right"
                        />
                    </svg>

                </div>
                <p className="font-poppins font-semibold text-green-700">{category}</p>
            </div>

            <div className="mx-48">
                <p className="font-bebas text-6xl">{category} <span className='text-[#06a54b]'>News</span> </p>
            </div>

            {/* Start Search Box */}
            <div className='flex justify-start mt-5 ml-48'>
                <input
                    type="text"
                    placeholder="Find Your News Here"
                    className="input input-bordered w-full max-w-xl"
                    onChange={(e) => setSearch(e.target.value)} />

            </div>
            {/* End Search Box */}

            {loading ? (
                <div className='mx-48 mt-10'>
                    <LoadingSkeleton />
                </div>
            ) : (
                <div>
                    {article.map(el => {
                        return <CardOther key={el.id} data={el} />
                    })}
                </div>
            )}

        </>
    )

}

export default Category