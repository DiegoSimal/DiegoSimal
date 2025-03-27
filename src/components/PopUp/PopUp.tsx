"use client"


export default function PopUp({ isOpen, imageUrl, alt }: { isOpen: boolean, imageUrl: string, alt: string}) {
    
    return isOpen ? <picture className="flex absolute bg-blue-300 w-2/4 h-2/4 z-10 top-1/2 justify-end">
        <img src={imageUrl} alt={alt} />
    </picture>
        : <></>
}
