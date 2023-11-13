import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {
  const year = ref('2023')
  const month = ref('11')
  const day = ref('13')

  const date = computed(() => year.value + month.value + day.value)
  const formattedDate = computed(() => {
    // month.value = month.value.length == 1 ? `0${month.value}` : month.value
    // day.value = day.value.length == 1 ? `0${day.value}` : day.value

    let tempMonth = month.value.length == 1 ? `0${month.value}` : month.value
    let tempDay = day.value.length == 1 ? `0${day.value}` : day.value

    return `${year.value} / ${tempMonth} / ${tempDay}`
  })

  const setYear = (y) => {
    year.value = y
  }
  const setMonth = (m) => {
    month.value = m
  }
  return { year, month, day, date, formattedDate, setYear, setMonth }
})
