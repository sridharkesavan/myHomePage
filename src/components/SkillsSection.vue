<template>
  <section id="skills" class="skills">
    <div class="skill-content">
      <div class="section-heading text-center">
        <h2>skills</h2>
      </div>
      <div class="container">
        <div class="profiles-content">
          <div class="row">
            <div class="col-sm-3" v-for="(skill, idx) in skillsRow1" :key="idx">
              <div class="single-profile" :class="{ 'profile-no-border': idx === 3 }">
                <div class="profile-txt">
                  <img :src="skill.icon" />
                  <div class="profile-icon-name">{{ skill.name }}</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <img :src="skill.icon" />
                    <div class="profile-icon-name">{{ skill.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-border"></div>
          <div class="row">
            <div class="col-sm-3" v-for="(skill, idx) in skillsRow2" :key="idx">
              <div class="single-profile" :class="{ 'profile-no-border': idx === 3 }">
                <div class="profile-txt">
                  <img :src="skill.icon" />
                  <div class="profile-icon-name">{{ skill.name }}</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <img :src="skill.icon" />
                    <div class="profile-icon-name">{{ skill.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="single-skill-content">
              <div class="barWrapper">
                <span class="progressText">Technical</span>
                <div class="single-progress-txt">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="10"
                      aria-valuemax="100" style="width: 50%"></div>
                  </div>
                  <h3>40%</h3>
                </div>
              </div>
              <div class="barWrapper">
                <span class="progressText">Administrative</span>
                <div class="single-progress-txt">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="10"
                      aria-valuemax="100" style="width: 10%"></div>
                  </div>
                  <h3>10%</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="single-skill-content">
              <div class="barWrapper">
                <span class="progressText">Managerial</span>
                <div class="single-progress-txt">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="10"
                      aria-valuemax="100" style="width: 30%"></div>
                  </div>
                  <h3>40%</h3>
                </div>
              </div>
              <div class="barWrapper">
                <span class="progressText">Recruiting</span>
                <div class="single-progress-txt">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="10"
                      aria-valuemax="100" style="width: 10%"></div>
                  </div>
                  <h3>10%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- (Other template code remains unchanged) -->
    </div>
  </section>
</template>

<script setup lang="ts">
import javaLogo from '@/assets/images/icons/java-logo.png'
import reactLogo from '@/assets/images/icons/react.png'
import mysqlLogo from '@/assets/images/icons/mysql.png'
import hashtagLogo from '@/assets/images/icons/hashtag.png'
import springLogo from '@/assets/images/icons/spring.png'
import azureLogo from '@/assets/images/icons/azure.png'
import dockerLogo from '@/assets/images/icons/docker.png'
import gitlabLogo from '@/assets/images/icons/gitlab.png'

const skillsRow1 = [
  { name: 'java', icon: javaLogo },
  { name: 'react', icon: reactLogo },
  { name: 'mysql', icon: mysqlLogo },
  { name: 'c-sharp', icon: hashtagLogo },
]

const skillsRow2 = [
  { name: 'spring', icon: springLogo },
  { name: 'azure', icon: azureLogo },
  { name: 'kubernetes', icon: dockerLogo },
  { name: 'gitlab', icon: gitlabLogo },
]
</script>

<style scoped>
/* Your custom styles */
</style>
