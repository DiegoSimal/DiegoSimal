import Image from "next/image";
import Header from "../Header/Header";


export default function Banner() {
    const isProduction = process.env.NODE_ENV === "production";
    return (
        <header className={`text-center text-gray-50 h-90 flex items-center justify-center flex-col bg-blue-300 dark:bg-gray-900 bg-center bg-repeat bg-image`}>
            <div className="mb-55">
                {/* <img className="absolute w-165 h-115 right-0" src={isProduction ? "image/fondo-dark.jpg" : "/image/fondo-dark.jpg"} />
                <img className="absolute w-165 h-115" src={isProduction ? "image/fondo-dark.jpg" : "/image/fondo-dark.jpg"} />
                <img className="absolute w-165 h-115 left-0" src={isProduction ? "image/fondo-dark.jpg" : "/image/fondo-dark.jpg"} /> */}
                <div className=""> {/* absolute r-10 */}
                    <Header title="DIEGO SIMAL" subTitle="Application developer" />
                    <div className="mt-7 border-solid border-blue-400 dark:border-purple-400 border-2 rounded-md w-31 h-31 absolute right-20">
                        <div className=""><Image src={isProduction ? "image/perfil.png" : "/image/perfil.png"} alt="foto de perfil" width={120} height={120} /><p></p></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
