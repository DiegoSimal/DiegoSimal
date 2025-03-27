"use client";

import ButtonDiegoProps from "./ButtonDiego.props";

export default function ButtonDiego({ text }: ButtonDiegoProps) {
    const handleOnClick = (): void => console.log("Hola caracola");

    return <button className="border-2 border-black p-4 rounded-lg cursor-pointer hover:text-blue-500 hover:font-bold" onClick={handleOnClick}>
        {text}
    </button>
}