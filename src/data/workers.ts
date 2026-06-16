export interface WorkerData {
  id: string;
  name: string;
  role: string;
  team: 'strategy' | 'content' | 'governance' | 'cms';
  stage: string;
  summary: string;
  output: string;
  image: string;
  teamLabel: string;
  teamColor: string;
}

export const workers: WorkerData[] = [
  {
    id: 'planner',
    name: 'Planner',
    role: 'Content planning',
    team: 'strategy',
    stage: 'Plan',
    summary: 'Turns loose ideas and business priorities into a clear direction for the page.',
    output: 'Content direction',
    image: '/headshots/profile-1.png',
    teamLabel: 'Strategy & Planning',
    teamColor: 'var(--team-strategy)',
  },
  {
    id: 'brief-writer',
    name: 'Brief Writer',
    role: 'Briefing',
    team: 'content',
    stage: 'Brief',
    summary: 'Creates the working brief — goal, audience, angle and structure — before drafting starts.',
    output: 'Page brief',
    image: '/headshots/profile-2.png',
    teamLabel: 'Content Production',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'draft-reviewer',
    name: 'Draft Reviewer',
    role: 'Quality review',
    team: 'governance',
    stage: 'Review',
    summary: 'Checks whether the draft is clear, structured and ready for the next stage.',
    output: 'Review summary',
    image: '/headshots/profile-17.png',
    teamLabel: 'Approval & Governance',
    teamColor: 'var(--team-governance)',
  },
  {
    id: 'section-editor',
    name: 'Section Editor',
    role: 'Editing',
    team: 'content',
    stage: 'Improve',
    summary: 'Tightens weak sections without rewriting the whole piece.',
    output: 'Edited sections',
    image: '/headshots/profile-11.png',
    teamLabel: 'Content Production',
    teamColor: 'var(--team-content)',
  },
  {
    id: 'approval-reporter',
    name: 'Approval Reporter',
    role: 'Approval',
    team: 'governance',
    stage: 'Approve',
    summary: 'Summarises what is ready, what needs attention and what should not move forward yet.',
    output: 'Approval report',
    image: '/headshots/profile-12.png',
    teamLabel: 'Approval & Governance',
    teamColor: 'var(--team-governance)',
  },
  {
    id: 'publishing-preparer',
    name: 'Publishing Preparer',
    role: 'Handoff',
    team: 'cms',
    stage: 'Prepare',
    summary: 'Packages approved work for the website, CMS or client handoff.',
    output: 'Handoff pack',
    image: '/headshots/profile-8.png',
    teamLabel: 'CMS Preparation',
    teamColor: 'var(--team-cms)',
  },
];
