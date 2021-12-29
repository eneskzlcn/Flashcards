import { mount } from '@vue/test-utils'
import  InputForm  from '@/components/InputForm.vue'
import Flashcard from '@/components/Flashcard.vue'
import index from '@/pages/index.vue'

describe('Flashcard unit test', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(InputForm)
    expect(wrapper.vm).toBeTruthy()
  })

  test('there is a input for question', async() => {
    const wrapper = mount(InputForm)
    const questionINP = await wrapper.find('#questionINP')
    expect(questionINP).toBeTruthy()
  })
  test('there is a input for answer', async() => {
    const wrapper = mount(InputForm)
    const questionINP = await wrapper.find('#answerINP')
    expect(questionINP).toBeTruthy()
  })
  test('there is a button for add flashcard', async() => {
    const wrapper = mount(InputForm)
    const addButton = await wrapper.find('#addBTN')
    expect(addButton).toBeTruthy()
  })
  test('there is a button for delete all flashcards', async() => {
    const wrapper = mount(InputForm)
    const deleteButton = await wrapper.find('#deleteBTN')
    expect(deleteButton).toBeTruthy()
  })
  test('is adds the flashcard given as input', async() => {
    const wrapper = mount(InputForm)
    const addFunc = jest.fn();
    wrapper.setMethods({
      passFlashcard : addFunc
    })
    await wrapper.find('#questionINP').setValue("What is inside me ?")
    await wrapper.find('#answerINP').setValue("A Hero")
    await wrapper.find('#addBTN').trigger('click')
    expect(addFunc).toHaveBeenCalled();
  })
  test('is add function triggers on click', async() => {
    const wrapper = mount(InputForm)
    const addFunc = jest.fn();
    wrapper.setMethods({
      passFlashcard : addFunc
    })
    await wrapper.find('#questionINP').setValue("What is inside me ?")
    await wrapper.find('#answerINP').setValue("A Hero")
    await wrapper.find('#addBTN').trigger('click')
    expect(addFunc).toHaveBeenCalled();
  })
  test('is adds the flashcard visually', async() => {
    const wrapper = mount(InputForm)
    const addFunc = jest.fn();
    wrapper.setMethods({
      passFlashcard : addFunc
    })
    await wrapper.find('#questionINP').setValue("What is inside me ?")
    await wrapper.find('#answerINP').setValue("A Hero")
    await wrapper.find('#addBTN').trigger('click')
    const wrap = mount(Flashcard);
    expect(wrap.vm).toBeTruthy();
  })
  test('is delete function triggers on click', async() => {
    const wrapper = mount(InputForm)
    const addFunc = jest.fn();
    const deleteFunc = jest.fn();
    wrapper.setMethods({
      passFlashcard : addFunc,
      passDelete : deleteFunc
    })
    await wrapper.find('#questionINP').setValue("What is inside me ?")
    await wrapper.find('#answerINP').setValue("A Hero")
    await wrapper.find('#addBTN').trigger('click')

    await wrapper.find('#deleteBTN').trigger("click")
    expect(deleteFunc).toHaveBeenCalled();
  })
  test('is delete function deletes flashcards visually', async() => {
    const wrapper = mount(InputForm)
    const addFunc = jest.fn();
    const deleteFunc = jest.fn();
    await wrapper.setMethods({
      passFlashcard : addFunc,
      passDelete : deleteFunc
    })
    await wrapper.find('#questionINP').setValue("What is inside me ?")
    await wrapper.find('#answerINP').setValue("A Hero")
    await wrapper.find('#addBTN').trigger('click')
    await wrapper.find('#deleteBTN').trigger('click')

    const wrap = mount(index);
    expect(await wrap.findComponent(Flashcard).exists()).not.toBeTruthy();
  })
  
})

