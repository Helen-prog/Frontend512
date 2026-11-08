<template>
  <div class="card">
    {{ title }}
    <!-- <button class="btn" v-if="wasRead" @click="$emit('unmark', id)">Отметить непрочитанной</button> -->
    <app-button
    :color="'green'"
    v-if="wasRead"
    @click="$emit('unmark', id)"    
    >Отметить непрочитанной</app-button>
    <!-- <button class="btn" @click="open">
      {{ isNewOpen ? "Закрыть" : "Открыть" }}
    </button> -->
    <app-button
        @click="open"
        
    >{{ isNewOpen ? 'Закрыть' : 'Открыть' }}</app-button>
  </div>
  <div :class="isNewOpen ? 'card' : 'display'">
    <div v-if="isNewOpen">
      <p>
        {{ description }}
      </p>
      <!-- <button v-if="!wasRead" class="btn" @click="mark">Прочесть новость</button> -->
       <app-button
        v-if="!wasRead"
        :color="'blue'"
        @action="mark"      
       >Прочесть новость</app-button>
       <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppNewsList from './AppNewsList.vue';

export default {
  name: "FirstComponent",
  // props: ['title', 'description'],
  props: {
    wasRead: Boolean,
    title: String,
    description: String,
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      // item: "Item String",
      // isOpen: false
      localIsOpen: this.isOpen,
      isNewOpen: this.isOpen,
    };
  },
  methods: {
    toggleOpen() {
      this.localIsOpen = !this.localIsOpen;
    },
    open() {
      this.isNewOpen = !this.isNewOpen;
      if (this.isNewOpen) {
        this.$emit("open-news");
      }
    },
    mark(){
        this.isNewOpen = false;
        this.$emit("read-news", this.id);
    },
    // unmark(){
    //     this.$emit("unmark", this.id);
    // }
  },
  emits: ["open-news", "read-news", "unmark"],
  components: {
    AppButton,
    AppNewsList
  }
};
</script>