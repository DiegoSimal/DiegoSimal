"use client"

import ThemeButton from "@/components/ThemeButton/ThemeButton"

export default function Test() {
    return (
        <section className="flex items-center justify-center h-100 flex-col">
            <h2 className={`text-4xl sm:text-3xl md:text-6xl text-center text-gray-800`}>LIGHT MODE</h2>
            <h2 className={`text-4xl sm:text-3xl md:text-6xl text-center text-white `}>DARK MODE</h2>
            <div className="mt-50"><ThemeButton/></div>
        </section>
    )
}