const getTheTitles = function(array) {
  let titles = []

  /* My Solution
    array.forEach(e => {
      titles.push(e.title);
    }); */

  //Odins Solution

  return array.map(book => book.title)

  return titles
}

module.exports = getTheTitles;