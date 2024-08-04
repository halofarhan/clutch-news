import { useEffect, useState } from "react";
import axios from "axios";
// import Toastify from 'toastify-js'

export default function ProductsForm({handleSubmit, article, nameProp}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const { data } = await axios.get(`https://server.halofarhan.my.id/category`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setCategories(data.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setContent(article.content);
      setImgUrl(article.imgUrl);
      setCategoryId(article.categoryId);
    }
  }, [article]);


  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <form
        action=""
        onSubmit={(e) =>
          handleSubmit(e, title,content, imgUrl, +categoryId)
        }
      >
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600">
                {nameProp} Article Form
              </h2>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Article Detail</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Article Title</label>
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          type="text"
                          value={title}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="email">Product Description</label>
                        <textarea
                          onChange={(e) => setContent(e.target.value)}
                          type="text"
                          value={content}
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label htmlFor="address">Image URL</label>
                        <input
                          type="text"
                          onChange={(e) => setImgUrl(e.target.value)}
                          name="imageUrl"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={imgUrl}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label htmlFor="zipcode">Categories</label>
                        <select
                          onChange={(e) => setCategoryId(e.target.value)}
                          name="category"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        >
                          {categories.map((c) => {
                            return (
                              <option key={c.id} value={c.id}>
                                {c.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            type="submit"
                            className="btn  bg-blue-500 hover:bg-blue-700 text-white font-bol py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
