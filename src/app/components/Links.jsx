"use client"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import LinkButton from './LinkButton';
import { useSelector, useDispatch } from 'react-redux';
import { updateLinks } from '../redux/linksSlice';
import { AnimatePresence } from 'framer-motion';

export default function Links() {
    const links = useSelector((state) => state.links);
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
                        <AnimatePresence>
                            {links.map((link, index) => (
                                <LinkButton key={link.url} link={link} index={index} />
                            ))}
                        {provided.placeholder}
                        </AnimatePresence>
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}
