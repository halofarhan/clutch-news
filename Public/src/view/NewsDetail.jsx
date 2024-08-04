import axios from "axios"
import SideNewsSwiper from "../component/SideNewsSwiper"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function NewsDetail() {
    const [data, setData] = useState()
    const [hotNews, setHotNews] = useState()

    const navigate = useNavigate()
    const { id } = useParams()

    async function fetchOneData() {
        console.log(id)
        try {
            const { data } = await axios.get(`https://server.halofarhan.my.id/pub/${id}`)

            setData(data.Article)
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchHotNews() {
        try {
            const { data } = await axios.get(`https://server.halofarhan.my.id/hot-news`)
            setHotNews(data.items)
        } catch (error) {

        }
    }

    function backHome() {
        navigate('/')
    }

    function backCategory() {
        navigate(`/${data.Category.name}`)
    }

    function toDetail(id, category) {
        navigate(`/${category}/${id}`)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchOneData()
        fetchHotNews()
    }, [])

    useEffect(() => {
        fetchOneData()
    }, [id])

    return (
        <div>

            {/*Start Path */}

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
                <button><p onClick={backCategory} className="font-poppins font-semibold hover:text-[#06a54b] transition duration-300 ease-in-out">{data?.Category.name}</p></button>
                <div className=" w-5 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path
                            style={{ fill: "#232326", stroke: "#232326", strokeWidth: 1 }}
                            d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                            data-name="Right"
                        />
                    </svg>

                </div>
                <p className="font-poppins font-semibold text-green-700">Article</p>
            </div>

            {/*End Path */}

            <div className="flex mx-48 ">
                <div className="w-[70%]">
                    {/* Title */}
                    <div className=" text-6xl font-bebas mb-7">
                        <p>{data?.title}</p>
                    </div>

                    {/* image */}
                    <div className=" w-[100vh] ">
                        <img className="rounded-md" src={data?.imgUrl} alt="" />
                        <p className="mt-3">Source: Google</p>
                    </div>

                    {/* content */}
                    <div className=" mt-7">
                        <p>
                            {data?.content}
                        </p>
                    </div>

                    {/* comment */}
                    <div className="mt-10">
                        <p className="font-poppins font-semibold">Comment:</p>
                    </div>
                </div>

                {/* Side News Start */}

                <div className="w-[30%]  pl-10">
                    <div>
                        <p className="font-bebas text-3xl mb-2">Hot Game <span className='text-[#06a54b]'>News</span></p>
                    </div>
                    <div className="divide-y divide-dashed overflow">
                        {hotNews?.map(el => {
                            return (
                                <div key={el.id} className="flex justify-between py-5 group">
                                    <div onClick={() => toDetail(el.id, el.Category.name)} className="text-base w-44 truncate-2-lines group-hover:text-[#06a54b] transition duration-300 ease-in-out">
                                        {el.title}
                                    </div>
                                    <div className="w-24">
                                        <img className="rounded-md" src={el.imgUrl} alt="" />
                                    </div>
                                </div>

                            )
                        })}
                        
                        <div className="mt-10">
                            <SideNewsSwiper />
                        </div>
                    </div>
                    {/* Side News End */}

                </div>
            </div>
        </div>
    )
}

export default NewsDetail