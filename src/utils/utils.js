export default {
  getYear
}

function getYear() {
  let newDate = new Date()
  let year = newDate.getFullYear()

  return year
}
