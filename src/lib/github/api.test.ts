import { describe, expect, it, vi } from 'vitest'
import { getGithubRepos, normalizeRepo } from './api'

describe('GitHub data', () => {
  it('normalizes missing metrics without inventing values', () => {
    expect(normalizeRepo({ name: 'sample' })).toMatchObject({ name: 'sample', stargazers_count: 0, forks_count: 0, topics: [] })
  })
  it('returns curated fallback repositories when GitHub fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))
    const result = await getGithubRepos()
    expect(result.live).toBe(false)
    expect(result.repos).toHaveLength(6)
    expect(result.repos[0].html_url).toContain('github.com/yuvaJax24/')
    vi.unstubAllGlobals()
  })
})
