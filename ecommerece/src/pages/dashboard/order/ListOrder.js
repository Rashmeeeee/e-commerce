import { useEffect, useState } from "react";
import MenuButton from "../../../components/MenuButton";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/Loading";
import { useNavigate } from "react-router-dom";
import useDelete from "../../../hooks/useDelete";
import toast from "react-hot-toast";

export default function ListOrder() {
  // const [orders, setorders] = useState({
  //   data: [],
  //   total: 0
  // });

const {
  data: orders, 
  loading, 
  error,
  refetch
} = useFetch(`${process.env.REACT_APP_API_URL}/order/all`);
const {loading: isDeleting, mutate}=useDelete(
  `${process.env.REACT_APP_API_URL}/order`,{
  onSuccess:(res) => {
    refetch();
    toast.success(res?.data?.message);
    
  },
  onError:(error) => {
     toast.error(error?.response?.data?.message);
  }
});
const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/order`).then((res) => {
  //     setorders({
  //       data: res.data.data,
  //       total: res.data.total
  //     });
  //   });
  // }, []);

  if(loading || isDeleting) {
    return <Loading />
  }
  return (
    <div className="min-h-screen overflow-y-auto">
      <div className="my-4">
        <span className="mx-8 text-2xl font-bold text-gray-600">
          List of orders
        </span>
      </div>
      <table className="h-full min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th>User</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Created At</th>
            {/* <th className="relative px-6 py-3">
              <span className="">Action</span>
            </th> */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders?.data?.map((order) => (
            <tr key={order._id}>
              <td>{order.userId.email}</td>
              <td>{order.productId.name}</td>
              <td>{order.productId.price}</td>
              <td>{order.quantity}</td>
              <td>{parseInt(order.productId.price)*parseInt(order.quantity)}</td>
              <td>{order.createdAt}</td>
              {/* <td>
                <MenuButton
                  links={[
                    { onClick: () => {
                      navigate(`/dashboard/updateorder/${order._id}`);
                    }, label: "Update" },
                    { onClick: () => {
                      mutate(order._id);
                    }, label: "Delete" }
                  ]}
                />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}