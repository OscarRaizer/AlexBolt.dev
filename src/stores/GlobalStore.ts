import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('counter', () => {
  const skills = [
    'TypeScript',
    'VUE',
    'React',
    'Django',
    'Tailwind',
    'HTML',
    'CSS',
    'Figma',
    'Git',
    'Github',
    'Gitlab',
  ]

  const projects = [
    { name: 'Texty', role: 'Founder' },
    { name: 'mplays.ru', role: 'Frontend Developer' },
    { name: 'Lead Frontend', role: 'Frontend Developer' },
    { name: 'Divly Frontend', role: 'Frontend Developer' },
    { name: 'uKitTechnical', role: 'Tech Support Specialist' },
    { name: 'Ligaa agency', role: 'Frontend Developer' },
  ]

  const contacts = [
    { name: 'boltenkovs36@gmail.com', link: 'mailto:boltenkovs36@gmail.com' },
    { name: 't.me/vueGod', link: 'https://t.me/vueGod' },
    { name: 'linkedin.com/in/alex-bolt', link: 'https://www.linkedin.com/in/alex-bolt' },
    { name: 'github.com/OscarRaizer', link: 'https://github.com/OscarRaizer' },
  ]

  return { skills, projects, contacts }
})
