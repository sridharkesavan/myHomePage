<!-- filepath: src/components/About.vue -->
<template>
  <section id="about" class="about">
    <div class="section-heading text-center">
      <h2>about me</h2>
    </div>
    <div class="container">
      <div class="about-content">
        <div class="row">
          <div class="col-sm-6">
            <div class="single-about-txt">
              <h3>
                I am an experienced software engineer with a talent for communicating complex
                technical concepts and delivering high-quality solutions. I excel in conveying
                intricate technical concepts, ensuring high-quality solutions with my analytical
                abilities and attention to detail.
              </h3>
              <p>
                I have over 14 years of experience in the IT industry. I started as a backend
                programmer and advanced to an engineering manager. Through my career, I have worked
                with various programming languages and have a solid understanding of enterprise
                systems. I have also developed skills in team building, communication, and
                collaboration in a multicultural and multilingual environment.
              </p>
              <div class="row">
                <div class="col-sm-4">
                  <div class="single-about-add-info">
                    <h3>phone</h3>
                    <p>080-3599-****</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="single-about-add-info">
                    <h3>email</h3>
                    <p>sridhar.kesavan@outlook.com</p>
                  </div>
                </div>
                <!--
                <div class="col-sm-4">
                  <div class="single-about-add-info">
                    <h3>website</h3>
                    <p>Under Construction</p>
                  </div>
                </div>
                -->
              </div>
            </div>
          </div>
          <div class="col-sm-offset-1 col-sm-5">
            <div class="single-about-img" style="width:125%; max-width:150%; height:175%; overflow:hidden;">
              <img src="@/assets/images/about/profile_image.jpg" alt="profile_image" class="img-fit" />
              <div class="about-list-icon">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/sridhar-kesavan-a444b3267/">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-medium" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No need for export default or name property
// You can optionally add a name via defineOptions if needed (usually only for debugging or advanced uses)
</script>

<style scoped>
/* Add any About-specific styles here if needed */
</style>
