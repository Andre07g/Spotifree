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




