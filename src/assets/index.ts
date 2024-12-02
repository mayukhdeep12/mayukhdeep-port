/// <reference types="vite-plugin-svgr/client" />

import { shuffleMusics } from '@/utils/helpers'

export type Icon = 'Email' | 'GitHub' | 'LinkedIn' | 'Resume' | 'X' | 'Play' | 'Pause' | 'Next' | 'Music'

export { default as EmailIcon } from './email.svg?react'
export { default as GitHubIcon } from './github.svg?react'
export { default as LinkedInIcon } from './linkedin.svg?react'
export { default as MusicIcon } from './music.svg?react'
export { default as NextIcon } from './next.svg?react'
export { default as PlayIcon } from './play.svg?react'
export { default as PauseIcon } from './pause.svg?react'

export { default as ResumeIcon } from './resume.svg?react'
export { default as XIcon } from './x.svg?react'

export interface Music {
  url: string
  href: string
}

export const musics: Music[] = shuffleMusics([
  {
    url: '/musics/magic - zensei.mp3',
    href: 'https://soundcloud.com/mattend/natalia-doco-mattend-quedate-luna-tiktok-remix',
  },
  {
    url: '/musics/Jane XØ - Hard To Forget.mp3',
    href: 'https://www.youtube.com/watch?v=ESb-ot2psIA',
  },
  {
    url: '/musics/Goblins from Mars - Cold Blooded Love.mp3',
    href: 'https://www.youtube.com/watch?v=VFBTWg1vI6E',
  },
  {
    url: '/musics/Diviners - Savannah Tropical House NCS.mp3',
    href: 'https://www.youtube.com/watch?v=u1I9ITfzqFs',
  },
  {
    url: '/musics/Fredji - Happy Life (Vlog No Copyright Music).mp3',
    href: 'https://www.youtube.com/watch?v=KzQiRABVARk',
  },
  {
    url: '/musics/Ikson - New Day.mp3',
    href: 'https://www.youtube.com/watch?v=cVA-9JHwbFY',
  },
])