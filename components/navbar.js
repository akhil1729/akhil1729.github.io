export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="font-bold text-xl">YourName</div>
        <div className="space-x-4">
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#projects" className="hover:text-red-500">Projects</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
          <a href="/resume.pdf" target="_blank" className="border border-red-500 px-3 py-1 rounded hover:bg-red-500">Resume</a>
        </div>
      </div>
    </nav>
  )
}
