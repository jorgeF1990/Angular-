const charactersList = document.querySelector("main")


const fetchingCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character")

  const data = await response.json()

  return data.results
}

const printCharacters = async () => {
  const characters = await fetchingCharacters()


  characters.forEach(character => {
    charactersList.innerHTML +=
      `
      <div class="character">
        <img src="${character.image}">
        <h2>${character.name}</h2>
        <p>${character.species} - ${character.gender}</p>
      </div>
      `
  })
}

printCharacters()