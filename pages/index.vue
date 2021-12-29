<template>
  <div class = ""> 
    <InputForm @addFlashcard = "add($event)" @deleteFlashcards = "deleteAll" />
    <div class = "grid grid-cols-5 gap-auto mt-5 w-full m-auto "> <!--  -->
      <Flashcard v-for="item,index in flashCardContents" v-bind:key="index" :question="item.question" :answer="item.answer" :isShowingContent="item.isContentShowing" @updateFlashCard = "updateCardShowing($event)" :index="index" />
    </div>
    
  </div>
</template>

<script>
import InputForm from '../components/InputForm.vue'
import Flashcard from '../components/Flashcard.vue'
export default {
  components: { InputForm , Flashcard},
  data()
  {
    return {
      flashCardContents : [{question:"aasgasögamgaögsgömasgömagmöagöamgaömgag", answer:"asfasfsafasfasfasffasjfjsafjhafhjafjhasfjhajfhahjfahsfjhafajhffhjhajfsafhajf  asfafssafsafasfafafafs", isContentShowing:false },{question:"lfasfsafafasfasfafafasfasfafaf", answer:"s", isContentShowing:false },{question:"aasgasögamgaögsgömasgömagmöagöamgaömgag", answer:"asfasfsafasfasfasfasfafssafsafasfafafafs", isContentShowing:false },{question:"aasgasögamgaögsgömasgömagmöagöamgaömgag", answer:"asfasfsafasfasfasfasfafssafsafasfafafafs", isContentShowing:false },{question:"aasgasögamgaögsgömasgömagmöagöamgaömgag", answer:"asfasfsafasfasfasfasfafssafsafasfafafafs", isContentShowing:false },{question:"aasgasögamgaögsgömasgömagmöagöamgaömgag", answer:"asfasfsafasfasfasfasfafssafsafasfafafafs", isContentShowing:false },{question:"aasgasögamgaögsgömasgömagmöagöamgaömgag", answer:"asfasfsafasfasfasfasfafssafsafasfafafafasfasfafasfafafsfasfsafasfafafasfasfafafasfsafs", isContentShowing:false },{question:"aasgasögamgaögsgömasgömagmöagöamgaömgag", answer:"asfasfsafasfasfasfasfafssafsafasfafafafs", isContentShowing:false },]
    }
  },
  methods:
  {
    add(flashCardContent)
    {
      this.flashCardContents.push(flashCardContent);
      console.log(this.flashCardContents)
    },
    updateCardShowing(cardIndex)
    {
      this.flashCardContents[cardIndex].isContentShowing = !this.flashCardContents[cardIndex].isContentShowing;
    },
    deleteAll()
    {
      this.flashCardContents = [];
    }
  }
  
  }
</script>
