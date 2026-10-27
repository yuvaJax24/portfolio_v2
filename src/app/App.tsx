import { About } from '../features/about/About'
import { Capabilities } from '../features/capabilities/Capabilities'
import { Contact } from '../features/contact/Contact'
import { Experience } from '../features/experience/Experience'
import { GithubProjects } from '../features/github/GithubProjects'
import { Hero } from '../features/hero/Hero'
import { Projects } from '../features/projects/Projects'
import { Skills } from '../features/skills/Skills'
import { Header } from '../components/layout/Header'
import { InteractiveCursor } from '../components/layout/InteractiveCursor'
import { SmoothScrollProvider } from '../components/layout/SmoothScrollProvider'

export function App() {
  return <SmoothScrollProvider><div className="scroll-progress" aria-hidden="true" /><Header /><InteractiveCursor /><main id="main"><Hero /><About /><Experience /><Projects /><GithubProjects /><Skills /><Capabilities /><Contact /></main></SmoothScrollProvider>
}
