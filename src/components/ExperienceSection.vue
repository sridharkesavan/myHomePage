<template>
  <section id="experience" class="experience">
    <div class="section-heading text-center">
      <h2>experience</h2>
    </div>
    <div class="container">
      <div class="experience-content">
        <div class="main-timeline">
          <ul>
            <li v-for="(exp, idx) in experiences" :key="idx">
              <div class="single-timeline-box fix">
                <div class="row align-items-center">
                  <!-- Left content (even: content left, odd: empty) -->
                  <div class="col-md-5" v-if="idx % 2 !== 0">
                    <div class="experience-time text-right">
                      <h2>{{ exp.period }}</h2>
                      <h3>{{ exp.title }}</h3>
                    </div>
                  </div>
                  <div class="col-md-5" v-else>
                    <div class="experience-time text-right">
                      <h2>{{ exp.period }}</h2>
                      <h3>{{ exp.title }}</h3>
                    </div>
                  </div>

                  <!-- Center icon (always present) -->
                  <div class="col-md-2 d-flex flex-column align-items-center justify-content-center position-relative">
                    <div class="timeline-center-icon">
                      <i class="fa fa-circle" aria-hidden="true"></i>
                    </div>
                    <!-- Optional: vertical line -->
                    <div class="timeline-vertical-line"></div>
                  </div>

                  <!-- Right content (odd: content right, even: empty) -->
                  <div class="col-md-5" v-if="idx % 2 !== 0">
                    <div class="timeline-content text-left">
                      <h4 class="title">{{ exp.company }}</h4>
                      <h5>{{ exp.location }}</h5>
                      <p class="description">{{ exp.description }}</p>
                    </div>
                  </div>
                  <div class="col-md-5" v-else>
                    <div class="timeline-content text-left">
                      <h4 class="title">{{ exp.company }}</h4>
                      <h5>{{ exp.location }}</h5>
                      <p class="description">{{ exp.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-center-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #eee;
}

.timeline-center-icon i {
  font-size: 1.2rem;
  color: #666;
}

/* Optional: vertical line for the timeline */
.timeline-vertical-line {
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: calc(100% - 32px);
  background: #b2c1ce;
  z-index: 1;
}
</style>

<script lang="ts">
export default {
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          period: '2023 - Present',
          title: 'Technical Manager',
          company: 'rakuten group',
          location: 'tokyo, japan',
          description:
            "Manage a team of engineers to develop a cashless, secure, scalable, efficient, and performant service. Lead the team's daily tasks, prioritize them, and structure their workflow. Report project status, financial updates, and collect feedback from stakeholders.",
        },
        {
          period: '2021 - 2023',
          title: 'development manager(full stack engineer)',
          company: 'metlife insurance',
          location: 'tokyo, japan',
          description:
            'in my role as an integration lead, I managed enterprise applications in an Agile model, leading a 20-person team. I established a Platforms engineering team to efficiently address technical challenges, resulting in a threefold improvement in customer MTTR. Additionally, I led a successful modernization effort that increased customer satisfaction by 112% per quarter.',
        },
        {
          period: '2019 - 2021',
          title: 'senior software development engineer',
          company: 'assurant inc.',
          location: 'tokyo, japan',
          description:
            'Leading a team, I created a cost-effective internal system for customer claims, wrote dynamic code across languages, and implemented quarterly kaizen for tech debt. Notably, I streamlined in-house data flow metrics, improving efficiency by four times.',
        },
        {
          period: '2014 - 2019',
          title: 'technical lead',
          company: 'cognizant technologies',
          location: 'tokyo, japan',
          description:
            'I designed and implemented digitization projects, reducing paperwork and mailing procedures, resulting in $2M quarterly savings. As a business analyst, I automated workflows, saving 200 person hours monthly. Successfully implemented onshore-offshore teams, reducing half the total costs.',
        },
        {
          period: '2010 - 2013',
          title: 'software engineer',
          company: 'hcl technologies',
          location: 'tokyo, japan',
          description:
            'Managed a team of 5 engineers in developing and maintaining a web-based reporting system. Oversaw incident and change management for the sales application portfolio, ensuring quality delivery of projects. Wrote and reviewed code for diverse software projects and collaborated with the quality assurance team on testing, bug investigation, and test case development.',
        },
      ],
    }
  },
}
</script>
