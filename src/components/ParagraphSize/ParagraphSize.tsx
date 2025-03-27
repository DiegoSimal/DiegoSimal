import ParagraphSizeProps from "./ParagraphSize.props"

export default function ParagraphSize({text, tab}: ParagraphSizeProps){
    return <p className={`text-left text-base pl-10 ${tab && "ml-10"}`}>{text}</p>
}
