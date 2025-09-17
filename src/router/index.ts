// src/router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import CertificationSection from '@/components/CertificationSection.vue'
import ContactSection from '@/components/ContactSection.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeSection },
  { path: '/about', name: 'About', component: AboutSection },
  { path: '/education', name: 'Education', component: EducationSection },
  { path: '/skills', name: 'Skills', component: SkillsSection },
  { path: '/experience', name: 'Experience', component: ExperienceSection },
  { path: '/certifications', name: 'Certifications', component: CertificationSection },
  { path: '/contact', name: 'Contact', component: ContactSection },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
