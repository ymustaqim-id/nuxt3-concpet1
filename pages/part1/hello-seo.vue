<template>
  <div
    class="row justify-content-center"
    :style="{
      margin: 'auto',
      maxWidth: maxWidthPx + 'px'
    }"
  >
    <div class="col-11 mt-5 pt-5 mb-5 pb-5">
      <div class="row">
        <div class="col-12 mt-lg-4 mt-md-3">
          <h1 class="text-center">Hello SEO World</h1>
        </div>

        <hr class="my-5" />
        <p class="col-12 mb-lg-4 mb-md-3">{{ AntrianPoli }}</p>
        <p class="col-12 mb-lg-4 mb-md-3">{{ AntrianPoliAAA }}</p>
        <p class="col-12 mb-lg-4 mb-md-3">{{ AntrianPoliBBB }}</p>
      </div>
    </div>

    <div class="col-11 mt-5 pt-5 mb-5 pb-5">
      <div class="container">
        <FormAntrian />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormAntrian from '~/component/form-antrian.vue'
import axios, { AxiosRequestConfig } from 'axios'
const AntrianPoliBBB = ref('')
const AntrianPoliAAA = ref('')
const AntrianPoli = ref('')

definePageMeta({
  layout: 'alt'
})

useSeoMeta({
  title: `Hello SPA World`
})

useHead({
  meta: [
    { name: 'robots', content: 'noindex' },
    { name: 'author', content: 'Varian Hermianto' }
  ]
})

const localState = reactive({
  maxWidthPx: 470
})

onBeforeMount(() => {
  // console.log('masuk onBeforeMount')
})

onMounted(() => {
  //   console.log('masuk onMounted')
  getAntrianPoliBBB()
  getAntrianPoliAAA()
  getAntrianPoli()
})

onUnmounted(() => {
  // console.log('masuk onUnmounted')
})

const getAntrianPoli = async () => {
  await fetchAntrianPoli()
    .then((response: any) => {
      AntrianPoli.value = response.data
      console.log('AntrianPoli : ', response.data)
    })
    .catch((err: any) => {
      console.log(err)
    })
}

const getAntrianPoliAAA = async () => {
  await fetchAntrianPoliAAA()
    .then((response: any) => {
      AntrianPoliAAA.value = response.data
      console.log('AntrianPoli AAAA : ', response.data)
    })
    .catch((err: any) => {
      console.log(err)
    })
}

const getAntrianPoliBBB = async () => {
  await fetchAntrianPoliBBB()
    .then((response: any) => {
      AntrianPoliBBB.value = response.data
      console.log('AntrianPoli BBB : ', response.data)
    })
    .catch((err: any) => {
      console.log(err)
    })
}

const fetchAntrianPoli = () => {
  return new Promise((resolve, reject) => {
    const runtimeConfig = useRuntimeConfig()

    const baseURL = process.dev
      ? runtimeConfig.public.API_DEV_URL
      : runtimeConfig.public.API_PROD_URL

    const config: AxiosRequestConfig = {
      baseURL,
      method: 'get',
      url: baseURL + '/antrian',
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

const fetchAntrianPoliAAA = () => {
  const searchParams = new URLSearchParams()

  searchParams.append('filter_poli', '1')
  searchParams.append('filter_status', '0')

  return new Promise((resolve, reject) => {
    const runtimeConfig = useRuntimeConfig()

    const baseURL = process.dev
      ? runtimeConfig.public.API_DEV_URL
      : runtimeConfig.public.API_PROD_URL

    const config: AxiosRequestConfig = {
      baseURL,
      method: 'get',
      url: baseURL + '/antrian',
      params: searchParams,
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

const fetchAntrianPoliBBB = () => {
  const searchParams = new URLSearchParams()

  searchParams.append('filter_poli', '2')
  searchParams.append('filter_status', '0')

  return new Promise((resolve, reject) => {
    const runtimeConfig = useRuntimeConfig()

    const baseURL = process.dev
      ? runtimeConfig.public.API_DEV_URL
      : runtimeConfig.public.API_PROD_URL

    const config: AxiosRequestConfig = {
      baseURL,
      method: 'get',
      url: baseURL + '/antrian',
      params: searchParams,
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

const { maxWidthPx } = toRefs(localState)
</script>

<style scoped>
.card {
  border: none;
}
</style>
