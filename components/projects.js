export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded shadow hover:shadow-lg p-4 transition">
          <img src="/images/project1.jpg" alt="Project 1" className="rounded mb-2" />
          <p className="text-gray-300">Project 1 description...</p>
        </div>
        <div className="bg-gray-800 rounded shadow hover:shadow-lg p-4 transition">
          <img src="/images/project2.jpg" alt="Project 2" className="rounded mb-2" />
          <p className="text-gray-300">Project 2 description...</p>
        </div>
      </div>
    </section>
  )
}
