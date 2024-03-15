<template>
  <article
    class="container"
    @click="goToComments"
  >
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <a @click.stop="goToUser">Профиль пользователя</a>
  </article>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();
const props = defineProps({
    post: {type: Object, required: true},
});

function goToComments() {
    router.push({name: 'comments', params: {postId: props.post.id}});
}

function goToUser() {
    router.push({name: 'user', params: {id: props.post.userId}});
}
</script>

<style scoped>
.container {
  border: #646cff solid 2px;
  border-radius: 5px;
  margin: 1%;
  padding: 1%;
  cursor: pointer;
}
a:hover {
  filter: light(150%);
}
</style>
