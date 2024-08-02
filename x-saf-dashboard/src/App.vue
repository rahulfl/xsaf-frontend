<script>
import { RouterLink, RouterView } from 'vue-router';
import Transactions from './views/TransactionsView.vue';

export default {
  components: {
    Transactions
  }
};
</script>

<template>
  <header>
   
    <div class="wrapper">
     
    </div>
  </header>

  <RouterView />
</template>

<style>
#app {
  font-family: Manrope;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>