<template>
  <article
    class="container"
    @click="goToComments"
  >
    <h2>
      {{ post.title }}
    </h2>
    <p>{{ post.body }}</p>
  </article>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();
const props = defineProps({
    post: {type: Object, required: true},
});

/**
 *
 * @return {void}
 */
function goToComments() {
    router.push({name: 'comments', params: {postId: props.post.id}});
}
</script>

<style scoped>
.container {
  border: #646cff solid 2px;
  border-radius: 5px;
  margin: 1%;
  cursor: pointer;
}
</style>
