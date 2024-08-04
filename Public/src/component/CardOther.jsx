import { useNavigate } from "react-router-dom"


function CardOther({ data }) {
  const navigate = useNavigate()

  function toDetail(id, category) {
    navigate(`/${category}/${id}`)
  }

  function toCategory(id,category) {
    navigate(`/${category}`)
}

  return (
    <div className="card rounded-md lg:card-side mx-48 mt-8 h-52 group hover:-translate-y-0.5 transition-all duration-300">
      <figure>
        <img
          className="h-56 w-96 rounded-xl"
          src={data.imgUrl}
          alt="Album" />
      </figure>
      <div className="card-body w-60 pt-4">
        <div className="badge badge-secondary border-none p-3 bg-[#06a54b] text-white group-before:ease relative overflow-hidden border border-green-500  shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 group-hover:shadow-green-500 group-hover:before:-translate-x-40" onClick={toCategory(data.Category.name)}>{data.Category.name}</div>
        <h2 className="card-title font-poppins group-hover:text-[#06a54b] transition duration-300 ease-in-out">{data.title}</h2>
        <div className="">
          <p className="truncate" >{data.content}</p>
        </div>
        <div onClick={() => toDetail(data.id, data.Category.name)} className="card-actions justify-end">
          <button class="mt-5 rounded-md hover:before:bg-greenborder-green-500 relative h-[50px] w-28 overflow-hidden border border-[#06a54b] bg-white px-3 text-[#06a54b] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#06a54b] before:transition-all before:duration-500 hover:text-white hover:shadow-[#06a54b] hover:before:left-0 hover:before:w-full"><span class="relative z-10">Read More</span></button>
        </div>
      </div>
    </div>
  )

}

export default CardOther