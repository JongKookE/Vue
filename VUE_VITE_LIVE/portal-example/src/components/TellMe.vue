<template>
  <div class="container mt-2">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <button type="button" class="btn btn-primary mt-2" @click="sendTellMe()">Send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-vue'

const ckeditor = CKEditor.component
const editor = ClassicEditor

const editorData = ref('<p>lorem ipsum</p>')

const editorConfig = {
  removePlugins: ['Heading', 'Link', 'CKFinder'],
  toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote']
}

const sendTellMe = () => {
  alert(editorData.value)
}
</script>

<style scoped>
/* deep selector >>> -> 합수 deep() */
.container:deep(.ck-editor__editable) {
  height: 400px;
}
</style>
