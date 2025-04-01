

export default function Header({ title, subTitle }: { title: string, subTitle: string }) {
    return (
        <div className="mt-65">
            <h1 className="text-4xl font-bold uppercase">{title}</h1>
            <p className="text-18 mt-5">{subTitle}</p>
        </div>
    )
}

{/*       <header className="text-center text-gray-50 h-100 flex items-center justify-center flex-col bg-image">
            <div >
                
              </div>
          </header> */}