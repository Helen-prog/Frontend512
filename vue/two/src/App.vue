<template>
  <div class="content">
    <div class="card">
      <h3>Новости: {{ now }}</h3>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>
    <!-- <div class="card" v-for="item in news" :key="item">
      {{ item }}
      <button class="btn">Открыть</button>
    </div> -->
  </div>
  <!-- <first-component title="Заголовок новости 1"></first-component>
  <first-component title="Заголовок новости 2"></first-component>
  <first-component></first-component>
  <FirstComponent /> -->
  <first-component
    v-for="item in news"
    :key="item"
    v-bind:title="item.title"
    :description="item.description"
    :id="item.id"
    :is-open="item.isOpen"
    :was-read="item.wasRead"
    @open-news="openRate++"
    @read-news="readNews"
    @unmark="unreadNews"
  ></first-component>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';


export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {title: "Новость 1", description: "Описание новости 1", id: 1},
        {title: "Новость 2", description: "Описание новости 2", id: 2},
      ],
      openRate: 0,
      readRate: 0
    }
  },
  components: {
    // "first-component": FirstComponent
    // 'FirstComponent': FirstComponent
    // FirstComponent: FirstComponent
    FirstComponent
  },
  methods:{
    readNews(id){
      const idx = this.news.findIndex(news => news.id === id);
      this.news[idx].wasRead = true;
      this.readRate++;
    },
    unreadNews(id){
      const news = this.news.find(news => news.id === id);
      news.wasRead = false;
      this.readRate--;
    }
  }
}
</script>


