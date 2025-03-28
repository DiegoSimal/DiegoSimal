import Image from "next/image";

const isProduction = process.env.NODE_ENV === "production";

export default function GitHubImageLoad({gitUrl, url}: {gitUrl: string, url: string}){
    return <Image src={isProduction ? gitUrl : url} alt="" width={0} height={0}/>
}