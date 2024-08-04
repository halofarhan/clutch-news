import { useEffect, useState } from "react"
import Card from "./Card"
import axios from "axios"

function HotGameNews() {
  const [article, setArticle] = useState([])

  async function fetchData() {
    try {
      const { data } = await axios.get("https://server.halofarhan.my.id/hot-news")
      setArticle(data.items)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='pt-10'>
        <div className='px-48'>
          <p className='font-bebas text-4xl '>Hot Game <span className='text-[#06a54b]'>News</span></p>
        </div>


        <div className='mx-48 pt-5 flex gap-4 carousel rounded-box static'>
          {article.map(el => {
            return (
              <div className="carousel-item">
                <Card key={el.id} data={el} />
              </div>)
          })}

        </div>
        <div className='flex justify-between mx-52 '>
          <button className='btn border-green-700 text-green-700 hover:bg-white hover:border-green-700 ' onClick={() => document.querySelector('.carousel').scrollLeft -= 300}>
            Prev
          </button>
          <button className='btn border-green-700 text-green-700 hover:bg-white hover:border-green-700' onClick={() => document.querySelector('.carousel').scrollLeft += 300}>
            Next
          </button>
        </div>
      </div>
    </>
  )

}

export default HotGameNews