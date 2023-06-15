<template>
  <div class="form-group">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Your Review</h5>
          <p class="card-text">
            {{ isi }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ isiNama }}</li>
          <li class="list-group-item">*****{{ isiRating }}</li>
        </ul>
        <div class="card-body">
          <a href="#tambahReview" class="card-link" @click="tambahReview">Submit another review</a>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Write Your Review</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <input
              placeholder="input your name"
              class="form-control"
              type="text"
              name="nama"
              v-model="nama"
            />
          </li>
          <li class="list-group-item">
            <textarea
              placeholder="input your review"
              class="form-control"
              name="review"
              v-model="review"
            />
          </li>
          <li class="list-group-item">
            <select class="form-control" name="rating" v-model="rating">
              <option :value="0">--Choose your review--</option>
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
              <option :value="4">4</option>
              <option :value="5">5</option>
            </select>
          </li>
        </ul>
        <div class="card-body">
          <input type="submit" @click="dikirim" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isi = ref({})
const isiNama = ref('')
const isiRating = ref(0)
const nama = ref('')
const review = ref('')
const rating = ref(0)

const dikirim = () => {
  if (nama.value == '' || review.value == '' || rating.value == 0) {
    alert('Mohon isikan semua field dengan lengkap. Terimakasih.')
    return
  }

  isi.value = review.value
  isiNama.value = nama.value
  isiRating.value = rating.value

  nama.value = ''
  review.value = ''
  rating.value = 0
}

const tambahReview = () => {
  isi.value = ''
  isiNama.value = ''
  isiRating.value = 0
}
</script>
