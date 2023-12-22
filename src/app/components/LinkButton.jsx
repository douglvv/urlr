import Link from 'next/link'

export default function LinkButton({link}) {
    return (
        <div className="flex items-center justify-center">
            <Link
                className="w-full max-w-xl mx-3 mt-2 p-3 rounded-lg
                        border border-[#6C757D] shadow-sm shadow-[#343A40]
                        font-semibold text-base text-center block"
                href={link.url}
            >
                {link.title}
            </Link>
        </div>
    )
}