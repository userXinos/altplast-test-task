<template>
  <span v-if="isFetch">
    Крутая анимация загрузки...
  </span>

  <div
    v-for="p in posts"
    v-else
    class="container"
  >
    <Post
      :key="p.id"
      :post="p"
    />
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import Post from '../components/Post.vue';
import {getPosts} from '../api/posts.js';

const isFetch = ref(false);
const posts = ref([]);

isFetch.value = true;

onMounted(async () => {
    posts.value = await getPosts();
    isFetch.value = false;
});
</script>

<style scoped>

</style>
