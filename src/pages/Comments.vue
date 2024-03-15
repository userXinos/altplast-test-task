<template>
  <div>
    <div class="header">
      <button @click="$router.back">
        Назад
      </button>

      <h2>Комментарии поста {{ $route.params.postId }} </h2>
    </div>

    <span v-if="isFetch">
      Крутая анимация загрузки...
    </span>

    <article
      v-for="comment in comments"
      v-else
      :key="comment.id"
      class="container"
    >
      <h2>{{ comment.name }}</h2>
      <span>{{ comment.email }}</span>
      <p>{{ comment.body }}</p>
    </article>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {onMounted, ref} from 'vue';
import {getPostComments} from '../api/posts.js';

const route = useRoute();
const isFetch = ref(false);
const comments = ref([]);

isFetch.value = true;

onMounted(async () => {
    comments.value = await getPostComments(route.params.postId);
    isFetch.value = false;
});

</script>

<style scoped>
.container {
  border: #ff649a solid 2px;
  border-radius: 5px;
  margin: 1%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
