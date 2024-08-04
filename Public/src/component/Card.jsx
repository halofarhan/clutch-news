import { useNavigate } from 'react-router-dom'
import '../App.css'

function Card({ data }) {
    const navigate = useNavigate()

    function toDetail(id,category) {
        navigate(`/${category}/${id}`)
    }

    return (
        <>
            <div className="mb-7 card bg-base-100 group  w-80 rounded-md flex justify-start transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-black/30">
                <figure className="h-56">
                    <img
                        src={data.imgUrl}
                        alt="Shoes"
                        className="rounded-md h-48" />
                </figure>
                <div className="card-body pt-2">
                    <div className="mb-2 badge badge-secondary border-none p-3 bg-[#06a54b] text-white group-before:ease relative overflow-hidden border border-green-500  shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 group-hover:shadow-green-500 group-hover:before:-translate-x-40">{data.Category.name}</div>
                    <h2 className="truncate-2-lines card-title font-poppins group-hover:text-[#06a54b] transition duration-300 ease-in-out">
                        {data.title}
                    </h2>
                    <p className="truncate-4-lines">{data.content} </p>
                    <div className="">

                    </div>
                    <button onClick={() => toDetail(data.id, data.Category.name)} class="mt-2 rounded-md hover:before:bg-greenborder-green-500 relative h-[50px] w-full overflow-hidden border border-[#06a54b] bg-white px-3 text-[#06a54b] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#06a54b] before:transition-all before:duration-500 hover:text-white hover:shadow-[#06a54b] hover:before:left-0 hover:before:w-full"><span class="relative z-10">Read More</span></button>

                </div>
            </div>
        </>
    )
}

export default Card