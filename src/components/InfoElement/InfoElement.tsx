import InfoElementProps from "./InfoElement.props"

export default function InfoElement({icon, text}: InfoElementProps){
    return <div className="flex pl-3">{icon}<div className="pl-4">{text}</div></div>
}