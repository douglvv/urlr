import Link from 'next/link'
import { RxDragHandleHorizontal } from 'react-icons/rx';

export default function LinkButton({ link }) {
  return (
    <div className="flex items-center justify-center">
      <Link
        className="flex items-center w-full max-w-xl mx-3 mt-3 mb-2 p-3 rounded-lg
                        border border-[#6C757D] shadow-sm shadow-[#343A40]
                        font-semibold text-base text-center text-[#ADB5BD]"
        href={link.url}
        target='_blank'
      >
        <RxDragHandleHorizontal title='Drag to reorder' className="mr-2 text-2xl" />
        <span className="flex-1">{link.title}</span>
      </Link>
    </div>
  )
}
