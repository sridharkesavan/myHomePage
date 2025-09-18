<template>
  <section id="contact" class="contact">
    <div class="section-heading text-center">
      <h2>contact me</h2>
    </div>
    <div class="container">
      <div class="contact-content">
        <div class="row">
          <div class="col-md-offset-1 col-md-5 col-sm-6">
            <div class="single-contact-box">
              <div class="contact-form">
                <form @submit.prevent="submitContact">
                  <div class="row">
                    <div class="col-sm-6 col-xs-12">
                      <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="Name*" name="name" v-model="name"
                          required />
                      </div>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                      <div class="form-group">
                        <input type="email" class="form-control" id="email" placeholder="Email*" name="email"
                          v-model="email" required />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <input type="text" class="form-control" id="subject" placeholder="Subject" name="subject"
                          v-model="subject" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <textarea class="form-control" rows="8" id="comment" placeholder="Message" v-model="message"
                          required></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="single-contact-btn">
                        <button class="contact-btn" type="submit">submit</button>
                      </div>
                      <div v-if="status" class="mt-2 text-sm">{{ status }}</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-offset-1 col-md-5 col-sm-6">
            <div class="single-contact-box">
              <div class="contact-adress">
                <div class="contact-add-head">
                  <h3>sridhar kesavan</h3>
                  <p>technical manager</p>
                </div>
                <div class="contact-add-info">
                  <div class="single-contact-add-info">
                    <h3>phone</h3>
                    <p>080-3599-****</p>
                  </div>
                  <div class="single-contact-add-info">
                    <h3>email</h3>
                    <p>sridhar.kesavan@outlook.com</p>
                  </div>
                  <div class="single-contact-add-info">
                    <h3>website</h3>
                    <p>www.skaffeh.com 🚧</p>
                  </div>
                </div>
              </div>
              <div class="hm-foot-icon">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/sridhar-kesavan-a444b3267/"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-medium"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-instagram"></i></a>
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
import { ref } from 'vue'

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const status = ref('');

async function submitContact() {
  status.value = '';
  try {
    const res = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    });
    const data = await res.json();
    if (data.success) {
      status.value = 'Message sent!';
      name.value = email.value = subject.value = message.value = '';
    } else {
      status.value = data.error || 'Failed to send message.';
    }
  } catch (e) {
    status.value = 'Failed to send message.';
  }
}
</script>

<style scoped>
/* Add Contact-specific styles here if needed */
</style>
