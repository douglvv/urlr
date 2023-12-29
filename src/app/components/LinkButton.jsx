"use client"
import { RxDragHandleHorizontal } from 'react-icons/rx';
import { Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';

export default function LinkButton({ link, index }) {
  return (
    <Draggable index={index} draggableId={link.url}>
      {(provided) => (
        <motion.li
          className="flex"
          drag
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: index * 0.2 + 0.75 }}
        >
          <a
            className="w-full max-w-2xl mx-3 mt-3 mb-2 p-3 rounded-lg
                        border border-[#6C757D] shadow-sm shadow-[#343A40]
                        font-semibold text-base text-center text-[#ADB5BD]
                        flex"
            href={link.url}
            target='_blank'
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div {...provided.dragHandleProps}>
              <RxDragHandleHorizontal title='Drag to reorder' className="mr-2 text-2xl" />
            </div>

            <div className="flex-1">
              <span>{link.title}</span>
            </div>

          </a>
        </motion.li>
      )}
    </Draggable>
  )
}


