"use client"
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import LinkButton from './LinkButton';
import { useSelector, useDispatch } from 'react-redux';
import { updateLinks } from '../redux/linksSlice';
import { motion, AnimatePresence } from 'framer-motion';

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
                                <Draggable key={link.url} index={index} draggableId={link.url}>
                                    {(provided) => (
                                        <motion.li
                                            className="flex"
                                            initial={{ x: '-100vw' }}
                                            animate={{ x: 0 }}
                                            drag // mudar para o icone de drag do componente
                                            whileHover={{
                                                scale: 1.05,
                                                transition: { duration: .1 },

                                            }}
                                            whileDrag={{ scale: 1.1 }}
                                            dragTransition={{ bounceStiffness: 100, bounceDamping: 0 }}
                                            
                                            whileTap={{ scale: 0.9 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ type: 'spring', stiffness: 50, delay: index * 0.2 + 0.75 }}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            <LinkButton link={link} provided={provided} />
                                        </motion.li>
                                    )}
                                </Draggable>
                            ))}
                        </AnimatePresence>
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}
