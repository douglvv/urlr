import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    links: [
        { title: 'Instagram', url: 'https://www.instagram.com/spiderman' },
        { title: 'Youtube', url: 'https://www.youtube.com' },
        { title: 'Tiktok', url: 'https://www.tiktok.com' },
        { title: 'Twitch', url: 'https://twitch.tv' },
        { title: 'Instagram', url: 'https://www.instagram.com/spiderman' },
        { title: 'Youtube', url: 'https://www.youtube.com' },
        { title: 'Tiktok', url: 'https://www.tiktok.com' },
        { title: 'Twitch', url: 'https://twitch.tv' },
        { title: 'Instagram', url: 'https://www.instagram.com/spiderman' },
        { title: 'Youtube', url: 'https://www.youtube.com' },
        { title: 'Tiktok', url: 'https://www.tiktok.com' },
        { title: 'Twitch', url: 'https://twitch.tv' },
        { title: 'Instagram', url: 'https://www.instagram.com/spiderman' },
        { title: 'Youtube', url: 'https://www.youtube.com' },
        { title: 'Tiktok', url: 'https://www.tiktok.com' },
        { title: 'Twitch', url: 'https://twitch.tv' },
    ]
}

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        addLink: (state, action) => {
            state.links.push({
                title: action.payload.link.title,
                btnUrl: action.payload.link.btnUrl
            })
        },
        updateLinks: (state, action) => {
            state.links = action.payload.links
        },
        deleteLink: (state, action) => {
            const index = action.payload.index
            state.links.splice(index, 1);
        }
    },
})


export const { addLink, updateLinks, deleteLink } = linksSlice.actions

export const linksReducer = linksSlice.reducer