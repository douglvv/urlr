import Image from 'next/image';

export default function Profile({ imgSrc, title, bio }) {
    return (
        <div className="flex flex-col items-center justify-center max-w-2xl w-full mx-auto m-3 p-3">
            <Image
                src={imgSrc}
                width={96}
                height={96}
                alt="Profile Pic"
                className='rounded-full shadow-md object-contain'
            />

            <h1 className='mt-4 shadow-sm text-xl font-bold'>
                {title}
            </h1>

            <h4 className='shadow-sm text-gray-400 text-center text-sm sm:text-base'>
                {bio}
            </h4>
        </div >
    )
}