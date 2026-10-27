import type { Project } from '../../types'

export function ProjectVisual({ project }: { project: Project }) {
  return <div className={`project-visual tone-${project.tone}`} aria-label={`Conceptual illustration for ${project.title}`} role="img">
    <span className="visual-grid" /><span className="visual-ring one" /><span className="visual-ring two" />
    <div className="visual-console"><small>SYS / {project.index}</small><strong>{project.id.toUpperCase()}</strong><div className="signal"><i /><i /><i /><i /><i /></div></div>
    <span className="visual-caption">CONCEPT VISUAL · NO CLIENT MATERIAL</span>
  </div>
}
