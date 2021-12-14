const characters = [
    {
      id: 1,
      name: {
        firstName: "Sonic",
        lastName: "Hedgehog",
      },
      games: ["Sonic 1", "Sonic 2"],
    },
    {
      id: 2,
      name: {
        firstName: "Lara",
        lastName: "Croft",
      },
      games: ["Tomb Raider", "Tomb Raider 2"],
    },
  ];

  function getAllGames(characters) {
    const result = [];
    for (let i = 0; i < characters.length; i++) {
      let character = characters[i];
      for (let j = 0; j < character.games.length; j++) {
        result.push(character.games[j]);
      }
    }
    return result;
  }
   
  console.log(getAllGames(characters));