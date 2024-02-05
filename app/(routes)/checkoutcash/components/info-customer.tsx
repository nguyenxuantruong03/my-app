"use client";
import { ChangeEvent, useState } from "react";
import "./checkoutcash.css";
import axios from "axios";

const InfoCustomer = () => {
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
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  
    if (!isValidEmail) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }
  };
  

  // const handleOrder = async () => {
  //   try {
  //     const response = await axios.post("/api/checkout", {
  //       gender,
  //       fullName, // Use the actual ID from your input field
  //       phoneNumber,
  //       email,
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
          <label htmlFor="male" className={`ml-2 ${!gender && "error-label"}`}>
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
      {GenderError && <div className="text-red-500 ml-8">{GenderError}</div>}

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
          {fullNameError && <div className="text-red-500">{fullNameError}</div>}
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
          {EmailError && (
            <div className="text-red-500">{EmailError}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCustomer;
