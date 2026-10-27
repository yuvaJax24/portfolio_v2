import { ExternalLink, GitFork, Github, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { AnimatedHeading } from '../../components/animations/AnimatedHeading'
import { getGithubRepos } from '../../lib/github/api'
import type { GithubRepo } from '../../types'

export function GithubProjects() {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [live, setLive] = useState(true)
  const [filter, setFilter] = useState('All')
  useEffect(() => { const controller = new AbortController(); getGithubRepos(controller.signal).then((r) => { setRepos(r.repos); setLive(r.live) }).catch(() => {}) ; return () => controller.abort() }, [])
  const languages = ['All', ...new Set(repos.map((repo) => repo.language).filter(Boolean) as string[])]
  const shown = useMemo(() => filter === 'All' ? repos : repos.filter((repo) => repo.language === filter), [filter, repos])
  return <section className="github-section section-pad" aria-labelledby="github-heading">
    <div className="section-label"><span>04</span> OPEN SOURCE / GITHUB</div>
    <div className="github-head"><AnimatedHeading text="Public projects." className="section-title" /><a href="https://github.com/yuvaJax24" target="_blank" rel="noreferrer"><Github /> @yuvaJax24 <ExternalLink /></a></div>
    <div className="repo-toolbar"><div role="group" aria-label="Filter repositories">{languages.map((language) => <button className={filter === language ? 'active' : ''} onClick={() => setFilter(language)} key={language}>{language}</button>)}</div><span className={live ? 'live' : ''}><i />{live ? 'Live GitHub data' : 'Verified fallback snapshot'}</span></div>
    <div className="repo-grid" id="github-heading">{shown.map((repo, i) => <a className="repo-card" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.name}>
      <div><span>0{i + 1}</span><ExternalLink /></div><h3>{repo.name.replaceAll('-', ' ').replaceAll('_', ' ')}</h3><p>{repo.description || 'Public TypeScript repository — open on GitHub to explore the source.'}</p>
      <footer><span><i />{repo.language ?? 'Code'}</span><span><Star />{repo.stargazers_count}</span><span><GitFork />{repo.forks_count}</span></footer>
    </a>)}</div>
  </section>
}
