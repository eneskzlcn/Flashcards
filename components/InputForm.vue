<template>
    <form class="flex items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-10 mr-10 mt-10 w-max">
        <div class="mb-4 ml-17 mr-10 mt-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="questionINP">Question</label>
            <input type="text" v-model="question" id="questionINP" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
        </div>   
        <div class="mb-4 ml-17 mr-10">
            <label for="answerINP" class="block text-gray-700 text-sm font-bold mb-2">Answer</label>
            <input type="text" v-model="answer" id="answerINP" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="inline ml-17 mr-10">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="passFlashcard" id="addBTN">
                Add
            </button>
            <button class="bg-red-500 ml-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="passDelete" id="deleteBTN">
                Delete All
            </button>
        </div>
    </form>
    
</template>

<script>
export default {
    methods:
    {
        passFlashcard()
        {
            if(this.question.length == 0 || this.answer.length == 0) return;
            var flashCardContent = {question:this.question, answer:this.answer, isContentShowing:false };
            this.question ="",this.answer = "";
            this.$emit('addFlashcard',flashCardContent);
        },
        passDelete()
        {
            this.$emit('deleteFlashcards');
        }
    },
    data()
    {
        return {
            question:"",
            answer :""
        }
    }
}
</script>
<style scoped>
 input
 {
     border-width: 2px;
     
 }
 label{
     text-align: center;
     
 }
 form{
     margin:auto;
     width:max-content;
 }
</style>