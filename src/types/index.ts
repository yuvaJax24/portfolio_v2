export type Project = {
  id: string; index: string; title: string; domain: string; description: string;
  stack: string[]; contributions: string[]; tone: 'lime' | 'violet' | 'orange' | 'blue' | 'rose'; note?: string;
}

export type GithubRepo = {
  name: string; description: string | null; language: string | null; stargazers_count: number;
  forks_count: number; html_url: string; updated_at: string; topics: string[];
}
