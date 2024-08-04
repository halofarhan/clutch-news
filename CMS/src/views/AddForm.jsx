
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductsForm from "../components/ProductForm";
import Toastify from 'toastify-js'

export default function AddForm() {

  const navigate = useNavigate();

  async function handleSubmit(e, title, content, imgUrl, categoryId) {
    e.preventDefault();
    const addedData = { title, content, imgUrl, categoryId};

    try {

      const { data } = await axios.post(`https://server.halofarhan.my.id/article/`, addedData, {
        headers: { Authorization: `Bearer ${localStorage.access_token}` }
      });
      
      navigate("/");

    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
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

  return (
    <>
      <ProductsForm handleSubmit={handleSubmit} nameProp={"Add"} />
    </>
  );
}
