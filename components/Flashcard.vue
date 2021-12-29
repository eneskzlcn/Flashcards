<template>
  <div class="rounded shadow-lg mr-4 bg-blue-100 mt-4" @click="controlContentShowing">
      <img class="w-auto m-auto" src="@/static/questionmark.png" alt="Question" v-if="!isShowingContent">
      <img class="w-auto m-auto" src="@/static/answermark.png" alt="answer" v-if="isShowingContent">
      <div class="px-6 py-4">
        <div v-if="!isShowingContent">
          <div class="font-bold text-xl text-center mb-2">Question</div>
          <p class="text-gray-700 font-bold text-base">
              {{question}}
          </p>
        </div>
        <div class="mt-2" v-if="isShowingContent">
          <div class="font-bold text-xl mb-2 text-center text-red-500">Answer</div>
          <p class="text-red-500 text-sm text-base mt-5" >
              {{answer}}
          </p>
        </div>
      </div>
  </div>
  
  
</template>
<script>
export default {
  props:{
    question :"",
    answer :"",
    isShowingContent: false,
    index: 0,
  },
  methods:{
    controlContentShowing()
    {s
      this.$emit('updateFlashCard',this.index);
    }
  }
}
</script>
<style scoped>
p{
  overflow-wrap: break-word;
}
</style>