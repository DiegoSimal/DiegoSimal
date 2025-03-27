import Image from "next/image";
import * as React from "react";


export default function ImageButton({ imageSrc, alt, href, setImageUrl }: 
    { imageSrc: string, alt: string, href: string, setIsPopUpOpen?: (value: boolean) => void, setImageUrl: (value: string) => void }) {
    return (
            <button onMouseEnter={() => {
                // setIsPopUpOpen(true);
                setImageUrl(imageSrc);
                }}
                onMouseLeave={() => {
                    // setIsPopUpOpen(false);
                    setImageUrl("");
                }}
            ><a href={href}><Image src={imageSrc} alt={alt} width={250} height={250} /></a>
            </button>
    )
}