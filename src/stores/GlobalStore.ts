import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const skills = [
    'TypeScript',
    'JavaScript',
    'VUE',
    'React',
    'Django',
    'Tailwind',
    'HTML',
    'CSS',
    'Figma',
    'Git',
    'CI/CD',
    'NLP',
    'WXT',
    'Linux',
  ]

  const projects = [
    {
      name: 'MPlays',
      link: 'https://mplays.ru',
      role: 'Frontend Developer',
      skills: [
        'React',
        'VUE',
        'CSS',
        'Tailwind',
        'HTML',
        'TypeScript',
        'Gitlab',
        'Git',
        'CSS',
        'Django',
        'Figma',
        'CI/CD',
      ],
    },
    {
      name: 'Divly',
      link: 'https://divly.net/',
      role: 'Frontend Developer',
      skills: ['VUE', 'JavaScript', 'HTML', 'CSS', 'Figma'],
    },
    {
      name: 'uKit',
      link: 'https://ukit.com',
      role: 'Tech Support Specialist',
      skills: ['Git', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Ligaa Agency',
      role: 'Frontend Developer',
      skills: ['Figma', 'Git', '', 'CSS', 'JavaScript', 'HTML'],
    },
  ]

  const contacts = [
    { name: 'boltenkovs36@gmail.com', link: 'mailto:boltenkovs36@gmail.com' },
    { name: 't.me/vueGod', link: 'https://t.me/vueGod' },
    { name: 'linkedin.com/in/alex-bolt', link: 'https://www.linkedin.com/in/alex-bolt' },
    { name: 'github.com/OscarRaizer', link: 'https://github.com/OscarRaizer' },
  ]

  // Хранение выделенных скиллов
  const highlightedSkills = ref<string[]>([])

  // Установить выделенные скиллы при наведении на проект
  const setHighlightedSkills = (skills: string[]) => {
    highlightedSkills.value = skills
  }

  // Сбросить выделенные скиллы при уходе с проекта
  const resetHighlightedSkills = () => {
    highlightedSkills.value = []
  }

  return {
    skills,
    projects,
    contacts,
    highlightedSkills,
    setHighlightedSkills,
    resetHighlightedSkills,
  }
})
