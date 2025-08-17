//🔹 Users (usuarios) 
// 1. Premium users whose username starts with "A" and have at least one like
db.users.find({
  premium: true,
  username: { $regex: "^A" },
  likes: { $exists: true, $not: { $size: 0 } }
})

// 2. Users with email in example.com and more than 3 likes
db.users.find({
  email: { $regex: "@example\\.com$" },
  $expr: { $gt: [{ $size: "$likes" }, 3] }
})

// 3. Users with likes in specific songs and username ending in vowel
db.users.find({
  username: { $regex: "[aeiou]$", $options: "i" },
  likes: { $all: [ObjectId("689f9f7638c73af69dba7236"), ObjectId("689f9f7638c73af69dba7237")] }
})

// 4. Users with no episodes
db.users.find({
  episodes: { $size: 0 }
})

// 5. Users with episodes and username containing uppercase in the middle
db.users.find({
  username: { $regex: "[A-Z][a-z]+", $options: "i" },
  episodes: { $exists: true, $not: { $size: 0 } }
})

//🔹 Songs (canciones) 

// 6. Rock songs with "tiempo" in lyrics
db.songs.find({
  genre: { $regex: "rock", $options: "i" },
  lyrics: { $regex: "tiempo", $options: "i" }
})

// 7. Titles with three words and genre in list
db.songs.find({
  title: { $regex: "^(\\w+\\s){2}\\w+$" },
  genre: { $in: ["Pop Latino", "Indie Rock", "Balada Romántica"] }
})

// 8. Titles ending in vowel and NOT acoustic
db.songs.find({
  title: { $regex: "[aeiouáéíóú]$", $options: "i" },
  genre: { $nin: ["Acoustic"] }
})

// 9. Lyrics containing "amor" but title NOT starting with L
db.songs.find({
  lyrics: { $regex: "amor", $options: "i" },
  title: { $not: { $regex: "^L" } }
})

// 10. Songs with Pop or Rock genre and lyrics mentioning "beso"
db.songs.find({
  $or: [
    { genre: { $regex: "Pop", $options: "i" } },
    { genre: { $regex: "Rock", $options: "i" } }
  ],
  lyrics: { $regex: "beso", $options: "i" }
})


// 🔹 Albums (albumes)

// 11. Albums with "y" in title and more than 2 songs
db.albums.find({
  title: { $regex: "\\sy\\s", $options: "i" },
  $expr: { $gt: [{ $size: "$songs" }, 2] }
})

// 12. Albums starting with C and exactly 2 songs
db.albums.find({
  title: { $regex: "^C" },
  songs: { $size: 2 }
})

// 13. Albums ending in vowel with at least one song
db.albums.find({
  title: { $regex: "[aeiou]$", $options: "i" },
  songs: { $elemMatch: { $exists: true } }
})

// 14. Albums with 3 words in title and specific songs
db.albums.find({
  title: { $regex: "^(\\w+\\s){2}\\w+$" },
  songs: { $in: [ObjectId("689fa02338c73af69dba7240"), ObjectId("689fa02338c73af69dba7241")] }
})

// 15. Albums containing "Neón" and max 4 songs
db.albums.find({
  title: { $regex: "Neón", $options: "i" },
  $expr: { $lte: [{ $size: "$songs" }, 4] }
})


// 🔹 Artist (artistas)

// 16. Artists with "Luz" in name and followers between 800k and 1M
db.artist.find({
  name: { $regex: "Luz", $options: "i" },
  followers: { $gte: 800000, $lte: 1000000 }
})

// 17. Artists starting with vowel and NOT ending in "o"
db.artist.find({
  name: { $regex: "^[AEIOUÁÉÍÓÚ]", $options: "i" },
  name: { $not: { $regex: "o$", $options: "i" } }
})

// 18. Two-word artist names with followers > 500k
db.artist.find({
  name: { $regex: "^\\w+\\s\\w+$" },
  followers: { $gt: 500000 }
})

// 19. Artists containing "Sol" or "Luna"
db.artist.find({
  name: { $regex: "(Sol|Luna)", $options: "i" }
})

// 20. Artists ending in vowel and followers NOT in [400k–800k]
db.artist.find({
  name: { $regex: "[aeiou]$", $options: "i" },
  followers: { $nin: [400000, 500000, 600000, 700000, 800000] }
})



