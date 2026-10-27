import { curatedRepos, fallbackRepos } from '../../data/github'
import type { GithubRepo } from '../../types'

export const normalizeRepo = (value: Partial<GithubRepo> & { name: string }): GithubRepo => ({
  name: value.name,
  description: value.description ?? null,
  language: value.language ?? null,
  stargazers_count: Number(value.stargazers_count) || 0,
  forks_count: Number(value.forks_count) || 0,
  html_url: value.html_url ?? `https://github.com/yuvaJax24/${value.name}`,
  updated_at: value.updated_at ?? '',
  topics: Array.isArray(value.topics) ? value.topics : [],
})

export async function getGithubRepos(signal?: AbortSignal): Promise<{ repos: GithubRepo[]; live: boolean }> {
  try {
    const response = await fetch('https://api.github.com/users/yuvaJax24/repos?per_page=100&sort=updated', {
      signal, headers: { Accept: 'application/vnd.github+json' },
    })
    if (!response.ok) throw new Error(`GitHub ${response.status}`)
    const data = (await response.json()) as GithubRepo[]
    const byName = new Map(data.map((repo) => [repo.name, normalizeRepo(repo)]))
    return { repos: curatedRepos.map((name, index) => byName.get(name) ?? fallbackRepos[index]), live: true }
  } catch (error) {
    if ((error as Error).name === 'AbortError') throw error
    return { repos: fallbackRepos, live: false }
  }
}
