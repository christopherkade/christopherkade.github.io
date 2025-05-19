import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Various projects I have worked on over the years.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <Projects />
    </section>
  )
}
