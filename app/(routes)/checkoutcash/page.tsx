"use client";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import InfoProduct from "./components/info-product";
import useCart from "@/hooks/use-cart";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Currencyonevalue from "@/components/ui/currencyonevalue";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./checkoutcash.css";
import Buttonn from "@/components/ui/button";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

type DeliveryOption = "delivery" | "pickup";
interface Item {
  code: string;
  name: string;
}
const host = "https://provinces.open-api.vn/api/";
const CheckoutCash = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const items = useCart((state) => state.items);
  const [totalCoins, setTotalCoins] = useState<number>(0);

  //Total Coins
  useEffect(() => {
    // Load totalCoins from the server using GET request
    axios.get("/api/wheelSpin").then((response) => {
      setTotalCoins(response.data.totalCoins);
    });
  }, []);

  const router = useRouter();

  const handleBuyNow = () => {
    router.push("/home-product");
  };

  const totalAmounts = items.reduce(
    (total, item) => {
      const itemInCart = items.find((cartItem) => cartItem.id === item.id);
      const quantity = itemInCart?.quantity || 1;

      const itemTotalPrice =
        ((item.price * (100 - item.percentpromotion)) / 100) * quantity;
      const itemTotalPriceOld = item.price * quantity;

      return {
        totalPrice: total.totalPrice + itemTotalPrice,
        totalPriceOld: total.totalPriceOld + itemTotalPriceOld,
      };
    },
    { totalPrice: 0, totalPriceOld: 0 }
  );
  // Tiền bảo hiểm
  const totalWarrantyAmount = items.reduce((total, item) => {
    const itemInCart = items.find((cartItem) => cartItem.id === item.id);
    const quantity = itemInCart?.quantity || 1;

    const selectedWarranty = cart.selectedWarranties[item.id];
    const warrantyAmount = selectedWarranty ? parseFloat(selectedWarranty) : 0;

    return total + warrantyAmount * quantity;
  }, 0);

  const totalAmount = totalAmounts.totalPrice + totalWarrantyAmount;
  const TotalAmountCoins = totalAmount - totalCoins;

  const onRemoveAll = () => {
    cart.removeSelectedItems();
    toast.success("Tất cả lựa chọn trong giỏ hàng đã được xóa.");
  };

  const selectedItems = items.filter((item) =>
    cart.selectedItems.includes(item.id)
  );

  //Info-Customer
  const [gender, setGender] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
  const [GenderError, setGenderError] = useState<string>("");
  const [EmailError, setEmailError] = useState<string>("");

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Check if the input is empty
    if (!value) {
      setPhoneNumber("");
      setPhoneNumberError("Vui lòng nhập số điện thoại");
      return;
    }

    // Check if the input is numeric
    if (!/^\d+$/.test(value)) {
      setPhoneNumberError("Vui lòng chỉ nhập số");
      return;
    }

    // Kiểm tra số đầu tiên là số 0
    if (value.length === 1 && value !== "0") {
      setPhoneNumberError("Số đầu tiên phải là số 0");
      return;
    }

    // Giới hạn độ dài của số điện thoại không quá 11 số
    const limitedPhoneNumber = value.slice(0, 11);

    // Cập nhật giá trị số điện thoại trong state và reset lỗi
    setPhoneNumber(limitedPhoneNumber);
    if (!phoneNumber) {
      setPhoneNumberError("Vui lòng nhập số điện thoại");
    } else {
      setPhoneNumberError("");
    }
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
    if (!gender) {
      setGenderError("Hãy chọn giới tính");
    } else {
      setGenderError("");
    }
  };

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Check if the input starts with a space
    if (value.startsWith(" ")) {
      setFullNameError("Không được space");
      return;
    }
    // Set the full name and reset the error
    setFullName(value);
    if (!fullName) {
      setFullNameError("Vui lòng nhập họ và tên");
    } else {
      setFullNameError("");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Check if the input starts with a space
    if (value.startsWith(" ")) {
      setEmailError("Không được cách đầu dòng");
      return;
    }
    // Set the email and reset the error
    setEmail(value);
    // Email validation
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      value
    );

    if (!isValidEmail) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }
  };
  //Delivery
  const [deliveryOption, setDeliveryOption] = useState("delivery"); // 'delivery' or 'pickup'

  const handleOptionChange = (option: DeliveryOption) => {
    setDeliveryOption(option);
  };
  //API-Provinces
  const [provinces, setProvinces] = useState<Item[]>([]);
  const [districts, setDistricts] = useState<Item[]>([]);
  const [wards, setWards] = useState<Item[]>([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const isValidSelection = selectedProvince && selectedDistrict && selectedWard && address;

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

  //Api-Submit
  // const handleSubmitCheckoutCash = async () => {
  //   try {
  //     let requestData = {};

  //     // Add common customer information
  //     requestData = {
  //       ...requestData,
  //       gender,
  //       fullName,
  //       phoneNumber,
  //       email,
  //     };

  //     // Add specific information based on different scenarios
  //     if (deliveryOption) {
  //       requestData = {
  //         ...requestData,
  //         deliveryOption,
  //       };
  //     }

  //     if (isValidSelection) {
  //       requestData = {
  //         ...requestData,
  //         selectedProvince,
  //         selectedDistrict,
  //         selectedWard,
  //         address,
  //         note,
  //       };
  //     }

  //     // Send customer information to the backend
  //     const response = await axios.post('/api/checkout', requestData);

  //     if (response.data.success) {
  //       console.log('Order placed successfully:', response.data.customer);
  //     } else {
  //       console.error('Error placing order:', response.data.error);
  //     }
  //   } catch (error) {
  //     console.error('Error placing order:', error);
  //   }
  // };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="mx-auto md:max-w-3xl lg:max-w-3xl">
      <div className="bg-white rounded-md shadow-lg p-4 mt-32 mb-2 ">
        {cart.items.length === 0 && (
          <>
            <div className="flex justify-center">
              <Image src="/images/no-cart.png" alt="" width="108" height="98" />
            </div>
            <div className="flex justify-center my-2">
              <p className="text-neutral-500">Giỏ hàng của bạn còn trống</p>
            </div>
            <div className="flex justify-center my-2">
              <Button onClick={handleBuyNow}> Mua ngay</Button>
            </div>
          </>
        )}

        <ul>
          {cart.items.map((item) => (
            <InfoProduct key={item.id} data={item} />
          ))}
        </ul>

        {cart.items.length > 0 && (
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-x-3">
              <input
                className="w-4 h-4"
                type="checkbox"
                checked={selectedItems.length > 0 && cart.selectAll}
                onChange={() => cart.toggleSelectAll()}
              />
              <h2 className="text-lg font-medium text-gray-900">Chọn tất cả</h2>
            </div>
            <Buttonn
              onClick={onRemoveAll}
              disabled={selectedItems.length === 0}
              className="justify-around flex"
            >
              <Trash />
            </Buttonn>
          </div>
        )}

        <div className=" flex justify-between border-t border-gray-400 py-4">
          <div>Tạm tính ({cart.items.length} sản phẩm): </div>
          <Currency value={totalAmount} valueold={totalAmounts.totalPriceOld} />
        </div>
      </div>
      {/* InfoCustomer */}
      <>
        <div className="bg-white rounded-md shadow-lg p-4 mb-2">
          <h1 className="font-bold text-blue-500">Thông tin khách hàng</h1>
          <div className="flex mt-4 items-center pl-[30px]">
            <div>
              <input
                type="radio"
                id="male"
                value="male"
                checked={gender === "male"}
                onChange={handleRadioChange}
                required
              />
              <label
                htmlFor="male"
                className={`ml-2 ${!gender && "error-label"}`}
              >
                Nam
              </label>
            </div>
            <div className="ml-4">
              <input
                type="radio"
                id="female"
                value="female"
                checked={gender === "female"}
                onChange={handleRadioChange}
                required
              />
              <label
                htmlFor="female"
                className={`ml-2 ${!gender && "error-label"}`}
              >
                Nữ
              </label>
            </div>
          </div>
          {GenderError && (
            <div className="text-red-500 ml-8">{GenderError}</div>
          )}

          <div className="grid grid-rows-3 md:flex mt-2 items-center">
            <div className="lg:px-8">
              <div className="field field_v3">
                <label className="ha-screen-reader">Họ và tên</label>
                <input
                  className="field__input"
                  placeholder="Ví dụ : Nguyen Van A"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
                <span className="field__label-wrap" aria-hidden="true">
                  <span className="field__label">Họ và tên</span>
                </span>
              </div>
              {fullNameError && (
                <div className="text-red-500">{fullNameError}</div>
              )}
            </div>

            <div className="md:ml-2 py-2 lg:px-8">
              <div className="field field_v3">
                <label className="ha-screen-reader">Số điện thoại</label>
                <input
                  className="field__input "
                  placeholder="Ví dụ :0912385***"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                <span className="field__label-wrap" aria-hidden="true">
                  <span className="field__label">Số điện thoại</span>
                </span>
              </div>
              {phoneNumberError && (
                <div className="text-red-500">{phoneNumberError}</div>
              )}
            </div>

            <div className="md:ml-2 py-2 lg:px-8">
              <div className="field field_v3">
                <label className="ha-screen-reader">Email</label>
                <input
                  className="field__input "
                  placeholder="Ví dụ :truong@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                />
                <span className="field__label-wrap" aria-hidden="true">
                  <span className="field__label">Email</span>
                </span>
              </div>
              {EmailError && <div className="text-red-500">{EmailError}</div>}
            </div>
          </div>
        </div>
      </>
      {/* Delivery */}
      <>
        <div className="bg-white rounded-md shadow-lg p-4 mb-2">
          <h1 className="font-bold text-blue-500">Hình thức nhận hàng </h1>
          <div className="flex mt-4 items-center">
            <div>
              <input
                type="radio"
                id="delivery"
                name="deliveryOption"
                value="delivery"
                checked={deliveryOption === "delivery"}
                onChange={() => handleOptionChange("delivery")}
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
                checked={deliveryOption === "pickup"}
                onChange={() => handleOptionChange("pickup")}
                required
              />
              <label htmlFor="female" className="ml-2">
                Nhận tại cửa hàng
              </label>
            </div>
          </div>
          {deliveryOption === "delivery" && (
            // API-Provinces
            <>
              <div className=" mx-auto p-4">
                <div className="mb-4">
                  <label className=" text-sm font-bold">Chọn Thành phố</label>
                  <select
                    id="province"
                    onChange={(e) => setSelectedProvince(e.target.value)}
                    className="mt-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none p-2"
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
                  <label className=" text-sm font-bold">Chọn Quận/Huyện</label>
                  <select
                    id="district"
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="mt-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none p-2"
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
                  <label className="block text-sm font-bold">
                    Chọn Phường Xã
                  </label>
                  <select
                    id="ward"
                    onChange={(e) => setSelectedWard(e.target.value)}
                    className="mt-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none p-2"
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
                        className={`field__input ${
                          !address && "border-red-500"
                        }`}
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
                      <label className="ha-screen-reader">
                        Ghi chú(Nếu có)
                      </label>
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
              </div>
            </>
          )}
          {deliveryOption === "pickup" && (
            <div className="bg-gray-300 bg-opacity-30 rounded-md">
              <p className="p-4 font-bold text-xl">
                Nhận hàng tại: 457 Lê Văn Quới, Phường Bình Trị Đông A, Quận
                Bình Tân
              </p>
              <p className=" px-4 text-red-500 font-bold text-xl pb-2">
                Số điện thoại: 0352261103
              </p>
            </div>
          )}
        </div>
      </>
      <>
        <div className="bg-white rounded-md shadow-lg p-4 mb-2">
          <h1 className="font-bold text-blue-500"> Thanh toán </h1>
          <div className="flex justify-around items-center mt-2">
            <p className="font-bold text-lg">Tổng tiền:</p>
            <p>
              <Currency
                value={totalAmount}
                valueold={totalAmounts.totalPriceOld}
              />
            </p>
          </div>
          <div className="flex justify-around items-center mt-2">
            <p className="text-lg  font-bold"> Tiền giảm:</p>
            <p>
              <Currencyonevalue value={-totalCoins} />
            </p>
          </div>
          <div className="flex justify-around items-center mt-6 border-t-2">
            <p className="text-lg font-bold mt-2"> Số tiền thanh toán:</p>
            <p>
              <Currencyonevalue value={TotalAmountCoins} />
            </p>
          </div>
          <div className="mx-auto px-20 mt-10">
            {cart.items.length > 0 ? (
              <Button className="w-full">Đặt hàng</Button>
            ) : (
              <Button className="w-full" disabled>
                Đặt hàng
              </Button>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default CheckoutCash;
