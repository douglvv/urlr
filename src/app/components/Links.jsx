"use client"
import LinkButton from "./LinkButton"
import { useSelector } from 'react-redux'

export default function Links() {
    const links = useSelector(state => state.links.links)

    return(
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <LinkButton link={link} />
                </li>
            ))}
        </ul>
    )
}