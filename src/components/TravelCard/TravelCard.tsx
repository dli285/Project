import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Card } from "./TravelCard.style"

interface TravelProps{
    name: string
    country: string
    href: string
}

export const TravelCard = ({country, name, href}: TravelProps) => {
    return (
        <Card>
            <img src={href} alt="sa" />
            <h2>{name}</h2>
            <span>{country}</span>
        </Card>
    )
}