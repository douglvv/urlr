"use client"

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import LinkButton from "./LinkButton"
import { useSelector } from 'react-redux'

export default function Links() {
    const links = useSelector(state => state.links)

    return (
        <DragDropContext>
            <Droppable droppableId="urls">
                {(provided) => (
                    <ul className="list-none" ref={provided.innerRef} {...provided.droppableProps}>
                        {links.map((link, index) => (
                            <Draggable key={link.url} index={index} draggableId={link.url}>
                                {(provided) => (
                                    <li>
                                        <LinkButton link={link} provided={provided}/>
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