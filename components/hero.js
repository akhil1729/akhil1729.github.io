export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-center bg-cover" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <h1 className="text-5xl font-bold animate-pulse">Your Name</h1>
      <p className="mt-4 text-lg text-gray-300">Aspiring developer | Creative mind | Rockstar enthusiast</p>
      <div className="mt-6 space-x-4">
        <a href="#projects" className="border border-red-500 px-4 py-2 rounded hover:bg-red-500">View Work</a>
        <a href="#contact" className="border border-gray-500 px-4 py-2 rounded hover:bg-gray-700">Contact</a>
      </div>
    </section>
  )
}
