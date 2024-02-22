import { createContext, useContext, useReducer } from "react";
import reducer from '../Reducer/productsReducer'
import { useEffect } from 'react';

const ProductsContext = createContext();

let data = [
    {
        id: 1,
        imageUrl: "https://example.com/mobile1.jpg",
        name: "Samsung Galaxy S21",
        price: 799.99,
        description: "Experience the power of Samsung's latest flagship smartphone. With a stunning display, powerful camera, and lightning-fast performance, the Galaxy S21 is the ultimate choice for mobile enthusiasts.",
        soldOut: false,
        stock: 100
    },
    {
        id: 2,
        imageUrl: "https://example.com/mobile2.jpg",
        name: "iPhone 13 Pro",
        price: 999.99,
        description: "Discover the pinnacle of Apple's engineering with the iPhone 13 Pro. Featuring an advanced triple-camera system, super-fast A15 Bionic chip, and stunning ProMotion display, it's the smartphone redefined.",
        soldOut: false,
        stock: 50
    },
    {
        id: 3,
        imageUrl: "https://example.com/mobile3.jpg",
        name: "Google Pixel 6",
        price: 699.99,
        description: "Embrace the future of Android with the Google Pixel 6. Boasting Google's cutting-edge technology, an incredible camera system, and seamless integration with Google services, it's a smartphone like no other.",
        soldOut: false,
        stock: 80
    },
    {
        id: 4,
        imageUrl: "https://example.com/mobile4.jpg",
        name: "OnePlus 9 Pro",
        price: 899.99,
        description: "Elevate your mobile experience with the OnePlus 9 Pro. Featuring Hasselblad-tuned cameras, warp-speed charging, and a silky-smooth 120Hz display, it's the flagship killer you've been waiting for.",
        soldOut: false,
        stock: 120
    },
    {
        id: 5,
        imageUrl: "https://example.com/mobile5.jpg",
        name: "Xiaomi Mi 11",
        price: 699.99,
        description: "Unleash the power of innovation with the Xiaomi Mi 11. With a Snapdragon 888 processor, 108MP camera, and stunning AMOLED display, it's a flagship smartphone that delivers exceptional performance at an unbeatable price.",
        soldOut: false,
        stock: 60
    },
    {
        id: 6,
        imageUrl: "https://example.com/mobile6.jpg",
        name: "Sony Xperia 1 III",
        price: 1099.99,
        description: "Experience mobile cinema like never before with the Sony Xperia 1 III. Featuring a 4K OLED display, professional-grade camera system, and immersive audio experience, it's the smartphone designed for creators.",
        soldOut: false,
        stock: 30
    },
    {
        id: 7,
        imageUrl: "https://example.com/mobile7.jpg",
        name: "Huawei P40 Pro",
        price: 899.99,
        description: "Enter the world of photography with the Huawei P40 Pro. Leica quad-camera system, powerful Kirin 990 processor, and stunning design make it the ultimate companion for capturing every moment in style.",
        soldOut: false,
        stock: 90
    },
    {
        id: 8,
        imageUrl: "https://example.com/mobile8.jpg",
        name: "Oppo Find X3 Pro",
        price: 1099.99,
        description: "Push the boundaries of mobile photography with the Oppo Find X3 Pro. With a revolutionary micro-lens camera, 10-bit color display, and flagship performance, it's the smartphone that sets new standards.",
        soldOut: false,
        stock: 20
    },
    {
        id: 9,
        imageUrl: "https://example.com/mobile9.jpg",
        name: "ASUS ROG Phone 5",
        price: 999.99,
        description: "Unleash your gaming potential with the ASUS ROG Phone 5. Featuring a Snapdragon 888 processor, 144Hz AMOLED display, and advanced gaming features, it's the ultimate gaming smartphone for serious gamers.",
        soldOut: false,
        stock: 70
    },
    {
        id: 10,
        imageUrl: "https://example.com/mobile10.jpg",
        name: "Realme GT",
        price: 499.99,
        description: "Experience flagship performance without breaking the bank with the Realme GT. Featuring a Snapdragon 888 processor, 120Hz AMOLED display, and versatile camera system, it's the smartphone that delivers on all fronts.",
        soldOut: false,
        stock: 150
    }
];

const getLocalProductData = () => {
    let localProductData = localStorage.getItem("products");
    if (localProductData) {
        if (JSON.parse(localProductData).length === 0) {
            return data;
        }
        else {
            return JSON.parse(localProductData);
        }
    }
    else {
        return data;
    }
}

const initialState = {
    isLoading: false,
    isError: false,
    products: getLocalProductData()
}

const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // add data to local storage
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(state.products))
    }, [state.products])

    console.log(state.products)
    return (<ProductsContext.Provider value={{ ...state }}>{children}</ProductsContext.Provider>);
}

const useProductContext = () => {
    return useContext(ProductsContext)
}

export { ProductsProvider, useProductContext };