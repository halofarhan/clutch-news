import { useNavigate } from 'react-router-dom'
import '../App.css'

function Hero({data}) {
    const navigate = useNavigate()

    function toDetail(id,category) {
        navigate(`/${category}/${id}`)
    }

    return (
        <>
            <div onClick={() => toDetail(data.id, data.Category.name)} className=" px-8 sm:px-6 lg:px-48 pt-5 group">
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12">
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <img
                            className="w-full rounded-md h-96"
                            src={data?.imgUrl}
                            alt="Hero Image"
                        />
                    </div>
                    <div className="lg:col-span-3 ">
                        <div className="mb-3 badge badge-secondary border-none p-3 bg-[#06a54b] text-white group-before:ease relative overflow-hidden border border-green-500  shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 group-hover:shadow-green-500 group-hover:before:-translate-x-40">{data.Category.name}</div>
                        <h1 className=" font-bebas leading-tight block text-[50px] font-medium text-gray-800  dark:text-white group-hover:text-[#06a54b] transition duration-300 ease-in-out">
                            {data.title}
                        </h1>
                        <p className="mt-5 text-lg text-gray-800 dark:text-neutral-400 truncate-2-lines">
                            {data.content} 
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero