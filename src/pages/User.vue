<template>
  <div>
    <div class="header">
      <h2>Профиль пользователя</h2>
    </div>

    <span v-if="isFetch">
      Крутая анимация загрузки...
    </span>

    <div
      v-else
    >
      <h2>{{ user.name }} ({{ user.username }})</h2>
      <p>Почта: {{ user.email }}</p>
      <p>Телефон: {{ user.phone }}</p>
      <p>Сайт: {{ user.website }}</p>

      <p>Адресс: </p>
      <ul>
        <li>Город: {{ user.address.city }}</li>
        <li>Улица: {{ user.address.street }}</li>
        <li>Люкс: {{ user.address.suite }}</li>
        <li>Почтовый индекс: {{ user.address.zipcode }}</li>
      </ul>

      <p>Компания: </p>
      <ul>
        <li>Название: {{ user.company.name }}</li>
        <li>Слоган: {{ user.company.catchPhrase }}</li>
        <li>Теги: {{ user.company.bs }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {onMounted, ref} from 'vue';
import {getUser} from '../api/users.js';

const route = useRoute();
const isFetch = ref(false);
const user = ref({});

isFetch.value = true;

onMounted(async () => {
    user.value = await getUser(route.params.id);
    isFetch.value = false;
});

</script>

<style scoped>
p, li, ul {
  text-align: start;
  margin: 1px;
}
li {
  list-style: none;
}
</style>
