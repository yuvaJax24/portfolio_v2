import type { GithubRepo } from '../types'

export const curatedRepos = ['multiple-payment-gateway', 'nestjs_microservice', 'pixi_js', 'react_npm_component', 'smart-sql-analyzer', 'teams-plugin']

export const fallbackRepos: GithubRepo[] = curatedRepos.map((name) => ({
  name, description: null, language: 'TypeScript', stargazers_count: 0, forks_count: 0,
  html_url: `https://github.com/yuvaJax24/${name}`, updated_at: '', topics: [],
}))
