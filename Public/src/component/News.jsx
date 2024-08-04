import { useEffect, useState } from "react"
import CardOther from "./CardOther"
import axios from "axios"
import LoadingSkeleton from "./LoadingSkeleton"
import Pagination from "./Pagination"

function News({ }) {
    const [article, setArticle] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [totalpage, setTotalPage] = useState()
    const [sort, setSort] = useState('ASC')

    async function fetchData() {
        try {
            setLoading(true)
            const { data } = await axios.get(`https://server.halofarhan.my.id/pub?search=${search}&page=${page}&sort=${sort}&limit=`)
            setArticle(data.pagination.data);
            setTotalPage(data.pagination.totalPage)
            setPage(data.pagination.page)


        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    function toCategory(id,category) {
        navigate(`/${category}`)
    }

    useEffect(() => {
        fetchData()
    }, [search, page,sort])

    console.log(sort);
    


    return (
        <>
            <div className='px-48 pt-7'>
                <p className='font-bebas text-4xl '>GAME <span className='text-[#06a54b]'>News</span></p>
            </div>

            {/* Start Search Box */}
            <div className='flex justify-between mt-5 mx-48'>
                <input
                    type="text"
                    placeholder="Find Your News Here"
                    className="input input-bordered w-full max-w-xl"
                    onChange={(e) => setSearch(e.target.value)} />

                <div className="">
                    <button onClick={() => setSort("DESC")} className="btn mr-5 border-green-700 bg-white text-green-700 hover:bg-green-700 hover:text-white"> Lastest</button>
                    <button onClick={() => setSort("ASC")} className="btn border-green-700 bg-white text-green-700 hover:bg-green-700 hover:text-white">Oldest</button>
                </div>

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
                    <div className="flex justify-center mt-8">
                        <Pagination totalPage={totalpage} setPage={setPage} paged={page} />
                    </div>
                </div>
            )}
        </>
    )
}

export default News