"use client";
import { useState, useEffect } from "react";
import "./checkoutcash.css";
import axios from "axios";
import "./checkoutcash.css";

interface Item {
  code: string;
  name: string;
}
const host = "https://provinces.open-api.vn/api/";
const ApiProvinces = () => {
  const [provinces, setProvinces] = useState<Item[]>([]);
  const [districts, setDistricts] = useState<Item[]>([]);
  const [wards, setWards] = useState<Item[]>([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const isValidSelection = selectedProvince && selectedDistrict && selectedWard;

  const callAPI = (api: string) => {
    return axios.get(api).then((response) => {
      setProvinces(response.data);
    });
  };

  useEffect(() => {
    callAPI(`${host}?depth=1`);
  }, []);

  const callApiDistrict = (api: string) => {
    return axios.get(api).then((response) => {
      setDistricts(response.data.districts);
    });
  };

  const callApiWard = (api: string) => {
    return axios.get(api).then((response) => {
      setWards(response.data.wards);
    });
  };

  const renderData = (
    array: Item[],
    setFunction: React.Dispatch<React.SetStateAction<Item[]>>
  ) => {
    let row = [{ code: "", name: "chọn" }, ...array];
    setFunction(row);
  };

  useEffect(() => {
    if (selectedProvince) {
      callApiDistrict(`${host}p/${selectedProvince}?depth=2`);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      callApiWard(`${host}d/${selectedDistrict}?depth=2`);
    }
  }, [selectedDistrict]);

  const printResult = () => {
    if (selectedDistrict && selectedProvince && selectedWard) {
      let result = `${selectedProvince} | ${selectedDistrict} | ${selectedWard}`;
      console.log(result);
    }
  };

  // const handleOrder = async () => {
  //   try {
  //     // Send customer information and address details to the backend
  //     const response = await axios.post("/api/checkout", {
  //       selectedProvince,
  //       selectedDistrict,
  //       selectedWard,
  //       address,
  //       note,
  //     });

  //     if (response.data.success) {
  //       console.log("Order placed successfully:", response.data.customer);
  //     } else {
  //       console.error("Error placing order:", response.data.error);
  //     }
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //   }
  // };

  return (
    <div className="container mx-auto p-4">
      <form action="">
        <div className="mb-4">
          <label className="block text-sm font-bold">Chọn Thành phố</label>
          <select
            id="province"
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none p-2"
          >
            <option value="" disabled selected hidden>
              Chọn thành phố
            </option>
            {provinces.map((province) => (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            ))}
          </select>
          {!selectedProvince && (
            <p className="text-red-500">Vui lòng chọn thành phố</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold">Chọn Quận/Huyện</label>
          <select
            id="district"
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none p-2"
            disabled={!selectedProvince}
          >
            <option value="" disabled selected hidden>
              Chọn Quận/Huyện
            </option>
            {districts.map((district) => (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            ))}
          </select>
          {!selectedDistrict && (
            <p className="text-red-500">Vui lòng chọn quận/huyện</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold">Chọn Phường Xã</label>
          <select
            id="ward"
            onChange={(e) => setSelectedWard(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none p-2"
            disabled={!selectedDistrict}
          >
            <option value="" disabled selected hidden>
              Chọn Phường/Xã
            </option>
            {wards.map((ward) => (
              <option key={ward.code} value={ward.code}>
                {ward.name}
              </option>
            ))}
          </select>
          {!selectedWard && (
            <p className="text-red-500">Vui lòng chọn phường/xã</p>
          )}
        </div>

         <div className="flex items-center">
          <div className="lg:px-8">
            <div className="field field_v3">
              <label className="ha-screen-reader">Địa chỉ</label>
              <input
                className={`field__input ${!address && 'border-red-500'}`}
                placeholder="Vd: 4xx Lê Văn Q*"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
             
              <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">Địa chỉ</span>
              </span>
            </div>
            {!address && (
                <p className="text-red-500">Vui lòng nhập địa chỉ</p>
              )}
          </div>

          <div className="ml-2 py-2 lg:px-8">
            <div className="field field_v3">
              <label className="ha-screen-reader">Ghi chú(Nếu có)</label>
              <input
                className="field__input"
                placeholder="Vd: Note thêm địa chỉ mới hoặc số điện thoại mới."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">Ghi chú(Nếu có)</span>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApiProvinces;
