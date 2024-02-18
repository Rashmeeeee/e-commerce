import React, { useState } from "react";
import Genericinput from "../../../components/Genericinput";
import { Form, Formik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/Loading";
import usePut from "../../../hooks/usePut";



function UpdateProduct() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();
  const {
  data: initialValues, 
  loading, 
  error
} = useFetch(`${process.env.REACT_APP_API_URL}/product/${id}`);

const {loading: isUpdating, mutate} =usePut(
  `${process.env.REACT_APP_API_URL}/product/${id}`,{
onSuccess: (data) =>{
  toast.success(data?.message);
  navigate("/dashboard/listProduct");
},
onError: (error) => {
  toast.error(error?.response?.data?.message || "Product Update faied")
}
});

  const onSubmit = (values) => {
   
   

    const formData = new FormData();
    formData.append("name",values.name);
    formData.append("description",values.description);
    formData.append("brand",values.brand);
    formData.append("price",values.price);
    [...files].forEach((file, index)=>{
      formData.append(`images`,file);
    });
    mutate(formData);

  //   axios
  //   .post(`${process.env.REACT_APP_API_URL}/product`,formData)
  //   .then((res) => {
  //     toast.success(res.data?.message);
  //   })
  //   .catch((error)=>{
  //     toast.error(error.response?.data?.message)
  //   })
   };

  const onChange = (event) => {
    if(event.target.files){
      setFiles(event.target.files);
    }
  };
  if(loading){
    return <Loading />;
  };
  return (
    <>
      <div className="flex flex-col items-start py-12 min-h-lvh sm:px-6 lg:px-8">
        <div className="mt-8 sm:w-full sm:max-w-sm">
          <div className="space-y-6">
           <Formik onSubmit={onSubmit} initialValues={initialValues?.data} 
           enableReinitialize>
            <Form className="space-y-4">
                <Genericinput 
                    label="Product Name" 
                    name="name" 
                    type="text" 
                    placeholder="Product Name"
                />
                 <Genericinput 
                    label="Price" 
                    name="price" 
                    type="number" 
                    placeholder="Price"
                />
                <Genericinput 
                    label="Description" 
                    name="description" 
                    type="text" 
                    placeholder="Enter a Description"
                />
                <Genericinput 
                    label="Brand" 
                    name="brand" 
                    type="text" 
                    placeholder="Enter a Brand Name"
                />
                 <Genericinput 
                    label="Select Images" 
                    name="image" 
                    type="file" 
                    placeholder="Select Product Images"
                    multiple="multiple"
                    onChange={onChange}
                    required={false}
                />
            <div className="mt-4">
              <button
                type="submit"
                disabled={isUpdating}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:bg-gray-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update a Product
              </button>
            </div>
            </Form>
           </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
 

export default UpdateProduct;

