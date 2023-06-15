<template>
  <div>
    <div
      class="nav-bar"
      style="text-align: center; padding-top: 10px; color: white; text-decoration: dotted"
    >
      <span>{{ product }}</span>
    </div>
    <div class="cart">Bag ({{ cart }})</div>
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="imageDefault" />
        </div>
        <div class="product-info">
          <h1>{{ product }}</h1>
          <p>Product details here</p>
          <fieldset :style="{ borderStyle: updateStok ? '' : 'dotted' }">
            <ul>
              <li v-if="updateStok" v-for="detail1 in details1">{{ detail1 }}</li>
              <li v-else v-for="detail2 in details2">{{ detail2 }}</li>
            </ul>

            <ul>
              <li v-if="updateStok" v-for="availabl1 in available1">{{ availabl1 }}</li>
              <li v-else v-for="availabl2 in available2">{{ availabl2 }}</li>
            </ul>
          </fieldset>

          <p v-if="updateStok">Product Still Available</p>
          <p v-else>Product Out of Stock</p>
          <div
            v-for="(variant, index) in variants"
            :key="index"
            @mouseover="
              updateVariant(variant.detailGambar),
                updateImage(variant.image),
                updateButton(variant.quantity)
            "
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          ></div>
          <div>
            <button
              class="button"
              :class="{ disabledButton: !updateStok }"
              :disabled="!updateStok"
              v-on:click="addToCart"
            >
              Add to Bag
            </button>

            <button
              class="button"
              :class="{ disabledButton: !updateStok }"
              :disabled="!updateStok"
              v-on:click="reduceToCart"
            >
              Clear Bag
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <Form />
    </div>
  </div>
</template>

<script setup lang="ts">
import Form from '~/component/Form.vue'
const cart = ref(0)
const product = ref('Nike Dunk Low')
const imageDefault = ref(
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3b1906c-b901-4d6a-a412-4394c6e75b5d/dunk-low-shoes-3wzv1m.png'
)

const image1 = ref(
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3b1906c-b901-4d6a-a412-4394c6e75b5d/dunk-low-shoes-3wzv1m.png'
)
const image2 = ref(
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ff6005-2dd2-4f18-a221-afb2da0b0d45/dunk-low-shoes-h1RRnR.png'
)

const details1 = [
  'Low-cut collar',
  'Foam insole',
  'Colour Shown: Light Bone/Sail/Citron Pulse',
  'Style: DD1503-002'
]
const details2 = [
  'Low-cut collar',
  'Foam insole',
  'Colour Shown: Stadium Green/White/Black',
  'Style: FN3612-300'
]

const available1 = ['EU 36', 'EU 36.5', 'EU 37.5', 'EU 38', '€129.99']
const available2 = ['EU 39', 'EU 39.5', 'EU 40.5', 'EU 42.5', '€119.99']

const variants = [
  { id: 1, color: 'yellow', image: image1.value, quantity: 10, detailGambar: details1 },
  { id: 2, color: 'green', image: image2.value, quantity: 0, detailGambar: details2 }
]

const addToCart = () => {
  cart.value += 1
}

const reduceToCart = () => {
  cart.value = 0
}

const selectedVariant = ref(0)
function updateVariant(index: any) {
  selectedVariant.value = index
}

const updateStok = ref(1)
function updateButton(index: any) {
  updateStok.value = index
  updateStok.value <= 0 ? 0 : 1
}

function updateImage(images: any) {
  imageDefault.value = images
}
</script>
