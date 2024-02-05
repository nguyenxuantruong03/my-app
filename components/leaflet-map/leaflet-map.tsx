"use client";
import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.js";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MousePointerClick } from "lucide-react";
import "./style.css"

//Customer Tiếng Việt
(L.Routing.Localization as any)["vi"] = {
  directions: {
    north: "Bắc",
    northeast: "Đông Bắc",
    east: "Đông",
    southeast: "Đông Nam",
    south: "Nam",
    southwest: "Tây Nam",
    west: "Tây",
    northwest: "Tây Bắc",
  },
  instructions: {
    straight: "Đi thẳng",
    slightLeft: "Rẽ nhẹ trái",
    left: "Rẽ trái",
    sharpLeft: "Rẽ mạnh trái",
    slightRight: "Rẽ nhẹ phải",
    right: "Rẽ phải",
    sharpRight: "Rẽ mạnh phải",
    uturn: "Quay đầu",
  },
  maneuvers: {
    merge: "Gộp",
    depart: "Rời đi",
    arrive: "Đến nơi",
    fork: "Giao lộ",
    endOfRoad: "Cuối đường",
    passRoundabout: "Vượt qua vòng xuyến",
    accessRoundabout: "Vào vòng xuyến",
    stayOnRoundabout: "Tiếp tục ở vòng xuyến",
    startAtEndOfStreet: "Bắt đầu ở cuối đường",
    start: "Bắt đầu",
    turn: "Rẽ",
    turnLeft: "Rẽ trái",
    turnRight: "Rẽ phải",
    multiple: "Nhiều hướng",
  },
  errors: {
    locationNotFound: "Không tìm thấy địa điểm",
    cantProjectRouteOnSatellite: "Không thể đề xuất đường đi trên hình vệ tinh",
    routeNotFound: "Không tìm thấy đường đi",
    cantFindRoute: "Không thể tìm đường đi",
    requestFailed: "Yêu cầu thất bại",
    tooManyStops: "Quá nhiều điểm dừng",
    unableToSync: "Không thể đồng bộ",
  },
  other: {
    useRouteAnyway: "Sử dụng đường đi này?",
    isCurrently: "Hiện tại",
    poweredBy: "Cung cấp bởi",
  },
};

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const LeafletMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [shouldShake, setShouldShake] = useState(false);

  const handleMouseEnter = () => {
    setShouldShake(false);
  };

  const handleMouseLeave = () => {
    setShouldShake(true);
    setTimeout(() => {
      setShouldShake(false);
    }, 5000); // Đặt một khoảng thời gian để ngừng shake
  };
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!mapRef.current) {
      // Map initialization
      const map = L.map("map").setView([10.77621, 106.60444], 20);

      // Xem vị trí hiện tại của mình
      L.control.locate().addTo(map);

      // Event listener for location found
      map.on("locationfound", (e) => {
        const currentLocation = e.latlng;
        // Routing control
        L.Routing.control({
          waypoints: [currentLocation, L.latLng(10.77621, 106.60444)],
          // @ts-ignore
          language: "vi",
          routeWhileDragging: true,
        }).addTo(map);
      });

      // OSM layer
      const osm = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      );

      // Dark map layer
      const dark = L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      );

      // Google Streets layer
      const googleStreets = L.tileLayer(
        "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
      );
      //Mặc định no sẽ hiện map này
      googleStreets.addTo(map);

      // Google Satellite layer
      const googleSat = L.tileLayer(
        "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
      );

      // Marker
      const myIcon = L.icon({
        iconUrl: "/images/red_marker.png",
        iconSize: [40, 40],
      });
      const singleMarker = L.marker([10.77621, 106.60444], {
        icon: myIcon,
        draggable: true,
      });
      // Popup
      const popupContent =
        "Cửa hàng Trường Đạt - 457 Lê Văn Quới,Quận Bình Tân, Phường Bình Trị Đông A, TPHCM ";
      const popup = singleMarker.bindPopup(popupContent);
      // Add Marker and Popup to the map
      singleMarker.addTo(map);
      popup.openPopup(); // Open the popup immediately
      // Optionally, you can also add an event listener to open the popup on marker click
      singleMarker.on("click", () => {
        popup.openPopup();
      });

      // Layer control
      const baseMaps = {
        OSM: osm,
        Dark: dark,
        "Google Street": googleStreets,
        "Google Satellite": googleSat,
      };

      L.control.layers(baseMaps).addTo(map);
      mapRef.current = map;
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="w-full hidden md:flex justify-center item-center bg-white py-4 px-12 ">
      <div id="map" className="w-full  h-[500px] relative rounded-md"></div>
      <div
      className={`arrow absolute md:left-[0%] lg:left-[0%] z-[9999] mt-[100px] flex ${shouldShake ? '' : 'shake'} text-red-500`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="arrow-click flex font-bold">Click here</div>
      <div className="flex justify-center">
        <MousePointerClick className="w-8 transform rotate-90 arrow-click" />
      </div>
    </div>
    </div>
  );
};

export default LeafletMap;
