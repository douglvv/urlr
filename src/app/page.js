import Image from 'next/image'

export default function Home() {
  return (
    <main className="mt-0">

      <div className="flex flex-col items-center justify-center max-w-2xl w-full mx-auto m-3 p-3">
        <Image
          src="/spider.png"
          width={96}
          height={96}
          alt="Profile Pic"
          className='rounded-full shadow-md'
        />

        <h1 className='mt-3 mb-3 shadow-sm'>
          Spider Man
        </h1>
      </div>

      <div className="flex items-center justify-center max-w-2xl h-screen">
        <h1>Teste</h1>
      </div>
    </main>
  )
}