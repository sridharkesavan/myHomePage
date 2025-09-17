<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import AZADM from '@/assets/images/clients/AZADM.png'
import MSC from '@/assets/images/clients/MSC.png'
import AZFB from '@/assets/images/clients/AZFB.png'
import SAFe6 from '@/assets/images/clients/SAFe6.png'
import SAFeAR from '@/assets/images/clients/SAFeAR.png'
import PSPO from '@/assets/images/clients/PSPO.png'
import PSM1 from '@/assets/images/clients/PSM1.png'

interface Certification {
  src: string
  alt: string
}

const certifications = ref<Certification[]>([
  { src: AZADM, alt: '' },
  { src: MSC, alt: '' },
  { src: AZFB, alt: '' },
  { src: SAFe6, alt: '' },
  { src: SAFeAR, alt: '' },
  { src: PSPO, alt: '' },
  { src: PSM1, alt: '' },
])
</script>
<template>
  <section id="certifications" class="clients">
    <div class="section-heading text-center">
      <h2>certifications</h2>
    </div>
    <div class="clients-area">
      <div class="container">
        <div class="profiles-content">
          <div class="single-profile-no-border" id="client">
            <div class="col-sm-3" v-for="(certification, index) in certifications" :key="index">
              <div class="single-certification text-center">
                <img :src="certification.src" :alt="certification.alt" class="img-fluid" />
                <p>{{ certification.alt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
