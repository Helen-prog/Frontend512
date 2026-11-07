<template>
  <hr />
  <h3 :style="{color: inputValue.length < 5 ? 'orange' : 'green',
    fontSize: inputValue.length < 6 ? '18px' : '14px'
  }">{{ title }}</h3>
  <input
    type="text"
    size="30"
    :placeholder="placeholderString"
    :value="inputValue"
    v-model="inputValue"
    @keypress.enter="addNewNote"
  /> 
  <button @click="addNewNote">Добавить</button>
  <hr />
  <ul v-if="notes.length !== 0">
    <li v-for="(note, index) in notes" :key="index">
      <!-- <span :class="note.length > 5 ? 'primary' : 'bold'"></span> -->
      
      <!-- <span :class="{
        'primary': true,
        'bold': note.length > 5
      }">({{ index + 1 }}) {{ upperCase(note) }}</span> -->

      <span :class="['primary', {'bold': note.length > 5}]">({{ index + 1 }}) {{ upperCase(note) }}</span>
      <button @click="removeNote(index)">Удалить</button>
    </li>
  </ul>
  <div v-if="notes.length === 0">
    <!-- <div v-else> -->
    <!-- <div v-show="notes.length === 0"> -->
    Элементов пока нет. Добавьте перый.
  </div>
</template>

<script>
export default {
  name: "ListItems",
  data() {
    return {
      title: "Список элементов",
      placeholderString: "Введите название элемента",
      inputValue: "",
      notes: ["Элемент 1", "Элемент 2"],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue != "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    upperCase(item){
        return item.toUpperCase()
    }
  },
  watch: {
    inputValue(value){
        if(value.length > 9){
            this.inputValue = ""
        }
        // console.log(value);
    }
  }
};
</script>

<style>
.primary{
    color: blue;
}
.bold{
    color: red;
}
</style>