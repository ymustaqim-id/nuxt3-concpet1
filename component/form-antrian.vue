<template>
  <div class="form-group">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Antrian</h5>
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
            <select class="form-control" name="poli" v-model="poli">
              <option :value="0" style="color: black">--Pilih poli--</option>
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
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
import axios, { AxiosRequestConfig } from 'axios'

const nama = ref('')
const poli = ref('')
const antrian = ref(0)

const dikirim = () => {
  if (nama.value == '' || poli.value == '') {
    alert('Mohon isikan semua field dengan lengkap. Terimakasih.')
    return
  }

  return new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append('nama_pasien', nama.value)
    formData.append('poli', poli.value)
    const runtimeConfig = useRuntimeConfig()

    const baseURL = process.dev
      ? runtimeConfig.public.API_DEV_URL
      : runtimeConfig.public.API_PROD_URL

    const config: AxiosRequestConfig = {
      baseURL,
      method: 'post',
      data: formData,
      url: baseURL + '/antrian/create',
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios(config)
      .then((response: any) => {
        resolve(response)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}
</script>
