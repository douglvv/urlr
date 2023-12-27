import { RxDragHandleHorizontal } from 'react-icons/rx';

export default function LinkButton({ link, provided }) {
  return (
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
  )
}
