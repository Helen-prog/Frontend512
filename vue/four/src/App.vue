<template>
  <div class="container">
    <form @submit.prevent="registerUser">
      <div v-show="step === 1" class="step">
        <div class="mb-3">
          <label for="name" class="form-label">Ваше имя</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="surname" class="form-label">Ваша фамилия</label>
          <input type="text" class="form-control" id="surname" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>

        <button type="button" @click="nextStep" class="btn btn-primary">Следующий шаг</button>
      </div>

      <div v-show="step === 2" class="step">
        <p>Вторая страница</p>
        <button type="submit" class="btn btn-primary">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      step: 1
    }
  },
  methods: {
    nextStep(){
      this.step++
    }
  },
  registerUser(){
    console.log("Регистрация прошла успешно");
    
  }
};
</script>


