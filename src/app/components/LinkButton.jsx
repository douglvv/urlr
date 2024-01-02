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
          transition={{ type: 'spring', stiffness: 50, delay: index * 0.2 + 0.75 }}
        >
          <div
            className="w-full max-w-2xl m-3 rounded-lg
                        border border-[#6C757D] shadow-sm shadow-[#343A40]
                        font-semibold text-base text-center flex bg-[#343A40]
                        hover:scale-[1.025]"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div
              {...provided.dragHandleProps}
              className="mr-2 p-3 text-2xl text-gray-400 transition duration-300
              hover:text-[#F8F9FA] hover:scale-125 active:text-[#F8F9FA] active:scale-125"
            >
              <RxDragHandleHorizontal title='Arraste para reordenar' />
            </div>

            <a className="flex-1 p-3"
              href={link.url}
              target='_blank'
              title={link.title}
            >
              {link.title}
            </a>

          </div>
        </motion.li>
      )}
    </Draggable>
  )
}


