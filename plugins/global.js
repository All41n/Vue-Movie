import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatYear', function(date) {
  if (!date) return ''
  // return date.slice(0, 4)
  return moment(String(date)).format('YYYY')
})

Vue.filter('formatAirDate', function(air_date) {
  if (!air_date) return ''
  // return date.slice(0, 4)
  return moment(String(air_date)).format('DD MMMM YYYY')
})

Vue.filter('formatDOB', function(dob) {
  if (!dob) return ''
  return moment(String(dob)).format('DD/MM/YYYY')
})

Vue.filter('formatRuntime', function(runtime) {
  if (!runtime) return ''
  var hours = Math.floor(runtime / 60)
  var minutes = runtime % 60
  return hours + 'h' + ' ' + minutes + 'mins'
})

Vue.filter('capitalizeFirst', function(word) {
  if (!word) return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
})

Vue.filter('truncate', function(text, stop, clamp) {
  if (!text) return ''
  return text.slice(0, stop) + (stop > text.length ? clamp || '...' : '...')
})
