import LinkButton from "./LinkButton"

const links = [
    {title: 'Instagram', url: 'https://www.instagram.com/spiderman'},
    {title: 'Youtube', url: 'https://www.youtube.com'},
    {title: 'Tiktok', url: 'https://www.tiktok.com'},
    {title: 'Twitch', url: 'https://twitch.tv'},
    {title: 'Instagram', url: 'https://www.instagram.com/spiderman'},
    {title: 'Youtube', url: 'https://www.youtube.com'},
    {title: 'Tiktok', url: 'https://www.tiktok.com'},
    {title: 'Twitch', url: 'https://twitch.tv'},
    {title: 'Instagram', url: 'https://www.instagram.com/spiderman'},
    {title: 'Youtube', url: 'https://www.youtube.com'},
    {title: 'Tiktok', url: 'https://www.tiktok.com'},
    {title: 'Twitch', url: 'https://twitch.tv'},
    {title: 'Instagram', url: 'https://www.instagram.com/spiderman'},
    {title: 'Youtube', url: 'https://www.youtube.com'},
    {title: 'Tiktok', url: 'https://www.tiktok.com'},
    {title: 'Twitch', url: 'https://twitch.tv'},
]

export default function Links() {
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