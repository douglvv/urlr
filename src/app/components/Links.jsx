"use client"

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import LinkButton from "./LinkButton"
import { useSelector, useDispatch } from 'react-redux'
import { updateLinks } from "../redux/linksSlice"


export default function Links() {
    const links = useSelector(state => state.links)
    const dispatch = useDispatch();

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        const linksAux = Array.from(links);
        const [movedLink] = linksAux.splice(source.index, 1);
        linksAux.splice(destination.index, 0, movedLink);

        dispatch(updateLinks({ links: linksAux }));
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="urls">
                {(provided) => (
                    <ul className="list-none" ref={provided.innerRef} {...provided.droppableProps}>
                        {links.map((link, index) => (
                            <Draggable key={link.url} index={index} draggableId={link.url}>
                                {(provided) => (
                                    <li>
                                        <LinkButton link={link} provided={provided} />
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>

    )
}