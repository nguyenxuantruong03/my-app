"use client"
import { useState } from "react";
import ApiProvinces from "./api-provinces";
import axios from "axios";
type DeliveryOption = 'delivery' | 'pickup';

const Delivery = () => {
    const [deliveryOption, setDeliveryOption] = useState('delivery'); // 'delivery' or 'pickup'

    const handleOptionChange = (option:DeliveryOption) => {
      setDeliveryOption(option);
    };
  //   const handleOrder = async () => {
  //     try {
  //         // Send customer information to the backend
  //         const response = await axios.post('/api/checkout', {
  //             deliveryOption,
  //         });

  //         if (response.data.success) {
  //             console.log('Order placed successfully:', response.data.customer);
  //         } else {
  //             console.error('Error placing order:', response.data.error);
  //         }
  //     } catch (error) {
  //         console.error('Error placing order:', error);
  //     }
  // };
    return ( 
        <div className="bg-white rounded-md shadow-lg p-4 mb-2">
        <h1 className="font-bold text-blue-500">Hình thức nhận hàng </h1>
        <div className="flex mt-4 items-center">
          <div>
            <input
               type="radio"
               id="delivery"
               name="deliveryOption"
               value="delivery"
               checked={deliveryOption === 'delivery'}
               onChange={() => handleOptionChange('delivery')}
               required
            />
            <label htmlFor="male" className="ml-2">
              Giao hàng tận nơi
            </label>
          </div>
          <div className="ml-4">
            <input
              type="radio"
              id="pickup"
              name="deliveryOption"
              value="pickup"
              checked={deliveryOption === 'pickup'}
              onChange={() => handleOptionChange('pickup')}
              required
            />
            <label htmlFor="female" className="ml-2">
              Nhận tại cửa hàng
            </label>
          </div>
        </div>
        {deliveryOption === 'delivery' && (
        <ApiProvinces />
      )}
      {deliveryOption === 'pickup' && (
        <div className="bg-gray-300 bg-opacity-50 rounded-md">
        <p className="p-4 font-bold text-xl">Nhận hàng tại: 457 Lê Văn Quới, Phường Bình Trị Đông A, Quận Bình Tân</p>
        <p className=" px-4 text-red-500 font-bold text-xl"> Số điện thoại: 0352261103 </p>
        </div>
      )}
      </div>
     );
}
 
export default Delivery;