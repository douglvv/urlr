import Image from 'next/image'

export default function Home() {
  return (
    <main className="mt-0">

      {/* Component Profile -> passar texto pelas props */}
      <div className="flex flex-col items-center justify-center max-w-2xl w-full mx-auto m-3 p-3">
        <Image
          src="/spider.png"
          width={96}
          height={96}
          alt="Profile Pic"
          className='rounded-full shadow-md object-contain'
        />

        <h1 className='mt-4 shadow-sm text-xl font-bold'>@spiderman</h1>
        
        <h4 className='shadow-sm text-gray-400 text-center text-sm sm:text-base'>
          Irure ullamco pariatur esse dolore ullamco dolore anim cupidatat officia sunt pariatur.
        </h4>

      </div>

      <div className="flex items-center justify-center max-w-2xl w-full mx-auto h-screen m-3 p-3">
        <h1>Teste</h1>
      </div>
    </main>
  )
}