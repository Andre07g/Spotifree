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


