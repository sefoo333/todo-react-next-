"use client"

import image1 from "../images/bg-desktop-dark.jpg"
import { MdOutlineWbSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { add_dark } from "../rtk/slices/darkmode-slice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useContext, createContext } from "react"

export const darkmode = createContext()


export default function Main(props) {
    let [dark, setDark] = useState("dark")
    return (
        <div className="main relative">
            <img className="w-full relative" src={image1.src} alt="image" />
            <div className="text">
                <h1>TODO</h1>
                <darkmode.Provider value={dark}>
                    {dark === "dark" ? (
                        <MdDarkMode onClick={() => {
                            if (dark === "dark") {
                                setDark("light")
                            } else {
                                setDark("dark")
                            }
                            console.log(dark)
                        }} />
                    ) : (
                        <MdOutlineWbSunny onClick={() => {
                            if (dark === "dark") {
                                setDark("light")
                            } else {
                                setDark("dark")
                            }
                            console.log(dark)
                        }} />
                    )}
                </darkmode.Provider>
            </div>
        </div>
    );
}
