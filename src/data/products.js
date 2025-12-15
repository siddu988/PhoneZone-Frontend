
import iqoo15_1 from "../assets/images/vivo-iqoo-15-1.jpg";
import iqoo15_2 from "../assets/images/vivo-iqoo-15-2.jpg";
import oneplus15_1 from "../assets/images/oneplus-15-1.jpg";
import oneplus15_2 from "../assets/images/oneplus-15-2.jpg";
import s25_main from "../assets/images/samsung-galaxy-s25.jpg";
import s25_alt from "../assets/images/samsung-galaxy-s25 1.jpg";
import iphone17_colors from "../assets/images/iphone 17 pro max colours.jpg";
import iphone17_2 from "../assets/images/iphone 17 pro max2.jpg";
import iphone17_1 from "../assets/images/iphone 17 pro max 1.jpg";
import iphone17_main from "../assets/images/iphone 17 pro max.jpg";
import iphone17_purple from "../assets/images/apple-iphone-17-1.jpg";
import pixel10_4 from "../assets/images/google-pixel-10-4.jpg";
import pixel10_3 from "../assets/images/google-pixel-10-3.jpg";
import pixel10_2 from "../assets/images/google-pixel-10-2.jpg";
import pixel10_1 from "../assets/images/google-pixel-10-1.jpg";
import s25_blue from "../assets/images/samsung-galaxy-s25-2.jpg";
import s25_slim from "../assets/images/samsung-galaxy-s25-1.jpg";
import airpods from "../assets/images/airpods_1.jpg";
import iqoo_box from "../assets/images/vivo-iqoo_001.jpg";
import iqoo13 from "../assets/images/vivo-iqoo-13-1.jpg";

import budsBlack from "../assets/images/sumsung buds.jpg";
import pocoX7 from "../assets/images/Poco-X7.jpg";
import cTypeCharger2 from "../assets/images/ctype-charger 2.jpg";
import charger1 from "../assets/images/charger1.jpg";
import adapter2 from "../assets/images/adopter 2.jpg";
import iphone17Case from "../assets/images/iphone-17-pro-max-case2.jpg";
import realmeGT8 from "../assets/images/realme-gt8-pro 1.jpg";
import iphone15PM from "../assets/images/apple-iphone-15-pro-max-1.jpg";
import iphone16Pro3 from "../assets/images/apple-iphone-16-pro-3.jpg";
import iphone16Pro2 from "../assets/images/apple-iphone-16-pro-2.jpg";

export const products = [
  // ==== 1–20 (old ones) ====
  {
    id: 1,
    name: "iQOO 15 Pro (Black)",
    price: "₹49,999",
    desc: "Snapdragon flagship • 144Hz display",
    image: iqoo15_1,
    tag: "New",
  },
  {
    id: 2,
    name: "iQOO 15 Pro (Racing Edition)",
    price: "₹51,999",
    desc: "BMW Motorsport design • 120W charging",
    image: iqoo15_2,
    tag: "Limited",
  },
  {
    id: 3,
    name: "OnePlus 15 (Cream)",
    price: "₹39,999",
    desc: "120Hz AMOLED • OxygenOS • 5G",
    image: oneplus15_1,
    tag: "Best seller",
  },
  {
    id: 4,
    name: "OnePlus 15 (Purple)",
    price: "₹41,999",
    desc: "Slim design • SuperVooc charging",
    image: oneplus15_2,
  },
  {
    id: 5,
    name: "Galaxy S25 Ultra (Gold/Green/Black)",
    price: "₹99,999",
    desc: "200MP camera • S-Pen • QHD+ display",
    image: s25_main,
    tag: "Premium",
  },
  {
    id: 6,
    name: "Galaxy S25 Ultra (Silver)",
    price: "₹1,04,999",
    desc: "512GB storage • 12GB RAM",
    image: s25_alt,
  },
  {
    id: 7,
    name: "iPhone 17 Pro Max – Colors",
    price: "₹1,29,999",
    desc: "A18 Pro • Pro camera system",
    image: iphone17_colors,
    tag: "Hot",
  },
  {
    id: 8,
    name: "iPhone 17 Pro Max (Orange)",
    price: "₹1,32,999",
    desc: "Titanium frame • USB-C • 120Hz",
    image: iphone17_2,
  },
  {
    id: 9,
    name: "iPhone 17 Pro Max (Silver)",
    price: "₹1,29,999",
    desc: "Always-On display • ProMotion",
    image: iphone17_1,
  },
  {
    id: 10,
    name: "iPhone 17 Pro Max (Hero)",
    price: "₹1,34,999",
    desc: "Top-end storage • Best for creators",
    image: iphone17_main,
  },
  {
    id: 11,
    name: "iPhone 17 (Purple)",
    price: "₹89,999",
    desc: "A18 Bionic • All-day battery",
    image: iphone17_purple,
  },
  {
    id: 12,
    name: "Google Pixel 10 (Box Pack)",
    price: "₹59,999",
    desc: "Tensor chip • Pixel camera magic",
    image: pixel10_4,
    tag: "Camera king",
  },
  {
    id: 13,
    name: "Google Pixel 10 (White & Blue)",
    price: "₹57,999",
    desc: "Clean Android • 7 years updates",
    image: pixel10_3,
  },
  {
    id: 14,
    name: "Google Pixel 10 (Color Options)",
    price: "₹55,999",
    desc: "Compact design • IP68",
    image: pixel10_2,
  },
  {
    id: 15,
    name: "Google Pixel 10 (Lime)",
    price: "₹56,999",
    desc: "Great battery • Wireless charging",
    image: pixel10_1,
  },
  {
    id: 16,
    name: "Galaxy S25 (Blue)",
    price: "₹64,999",
    desc: "120Hz AMOLED • Triple camera",
    image: s25_blue,
  },
  {
    id: 17,
    name: "Galaxy S25 Series (Slim)",
    price: "₹61,999",
    desc: "Thin & light • Awesome colors",
    image: s25_slim,
  },
  {
    id: 18,
    name: "AirPods Pro (3rd Gen)",
    price: "₹24,999",
    desc: "ANC • Spatial Audio • MagSafe",
    image: airpods,
    tag: "Accessory",
  },
  {
    id: 19,
    name: "iQOO 15 Pro – Box & Charger",
    price: "₹52,999",
    desc: "120W adapter • case in box",
    image: iqoo_box,
    tag: "Bundle",
  },
  {
    id: 20,
    name: "iQOO 13",
    price: "₹44,999",
    desc: "Performance focused • Gaming phone",
    image: iqoo13,
  },

  // ==== 21–30 (new products) ====
  {
    id: 21,
    name: "Samsung Buds (Black)",
    price: "₹4,499",
    desc: "True wireless earbuds • Deep bass • Type-C charging",
    image: budsBlack,
    tag: "Accessory",
  },
  {
    id: 22,
    name: "POCO X7 Pro 5G",
    price: "₹28,999",
    desc: "Dimensity 9200 Ultra • 120Hz AMOLED • 5G",
    image: pocoX7,
    tag: "Value",
  },
  {
    id: 23,
    name: "Warp Charge USB-A to USB-C Charger",
    price: "₹1,499",
    desc: "Fast charging adapter • USB-A to USB-C cable",
    image: cTypeCharger2,
    tag: "Charger",
  },
  {
    id: 24,
    name: "Fast USB-C Wall Charger",
    price: "₹1,299",
    desc: "20W output • Supports most Android phones",
    image: charger1,
    tag: "Charger",
  },
  {
    id: 25,
    name: "Apple 20W Adapter + Cable",
    price: "₹1,999",
    desc: "USB-C power adapter with Lightning cable",
    image: adapter2,
    tag: "Apple Accessory",
  },
  {
    id: 26,
    name: "iPhone 17 Pro Max Protective Case",
    price: "₹1,899",
    desc: "Premium back case • Drop protection • Perfect fit",
    image: iphone17Case,
    tag: "Case",
  },
  {
    id: 27,
    name: "Realme GT8 Pro",
    price: "₹39,999",
    desc: "HyperBurst charging • 200MP camera • AMOLED",
    image: realmeGT8,
  },
  {
    id: 28,
    name: "iPhone 15 Pro Max",
    price: "₹1,19,999",
    desc: "A17 Pro • Titanium design • Pro camera system",
    image: iphone15PM,
    tag: "Premium",
  },
  {
    id: 29,
    name: "iPhone 16 Pro (Natural Titanium)",
    price: "₹1,24,999",
    desc: "New A18 chip • advanced cameras • USB-C",
    image: iphone16Pro3,
  },
  {
    id: 30,
    name: "iPhone 16 Pro – Color Lineup",
    price: "₹1,26,999",
    desc: "All color options • latest Pro experience",
    image: iphone16Pro2,
  },
];
