import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)

  return date.toLocaleString(['ru-RU'], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
})
