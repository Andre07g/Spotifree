# 🎵 Spotifree  

## 📌 Project Description  
**Spotifree** is a database inspired by the Spotify platform.  
The system manages:  
- Users (with premium or free accounts, favorite songs and episodes).  
- Artists (with their number of followers).  
- Songs (titles, genres, lyrics, and duration).  
- Albums (set of songs associated with an artist).  
- Podcasts (with their list of episodes and followers).  
- Episodes (title, duration, and category).  

This project simulates a music and podcast streaming system for practicing and experimenting with **MongoDB**.  

---

## 🛠️ Creating the Database in MongoDB  

1. Open your **MongoDB** shell.  
2. Create the database with:  

```js
use spotifree
```

---

## 📂 Importing the Collections  

The `.json` files included in the database are:  

| JSON File                   | MongoDB Collection |
|------------------------------|--------------------|
| `spotifree.users.json`      | `users`            |
| `spotifree.artist.json`     | `artist`           |
| `spotifree.songs.json`      | `songs`            |
| `spotifree.albums.json`     | `albums`           |
| `spotifree.podcasts.json`   | `podcasts`         |
| `spotifree.episodes.json`   | `episodes`         |

To import each collection, run the following command from your terminal (make sure you are in the same folder as the `.json` files):  

```bash
mongoimport --db spotifree --collection users --file spotifree.users.json --jsonArray
mongoimport --db spotifree --collection artist --file spotifree.artist.json --jsonArray
mongoimport --db spotifree --collection songs --file spotifree.songs.json --jsonArray
mongoimport --db spotifree --collection albums --file spotifree.albums.json --jsonArray
mongoimport --db spotifree --collection podcasts --file spotifree.podcasts.json --jsonArray
mongoimport --db spotifree --collection episodes --file spotifree.episodes.json --jsonArray
```

---

## 🔍 Example MongoDB Query  

 ## 1. Songs

### Expression
```js
db.songs.find({
  genre: { $regex: /rock/i },
  lyrics: { $regex: /tiempo/i }
})
```

### Explanation  
This query searches for **songs whose genre contains the word "rock"** (e.g., "Indie Rock", "Rock Alternativo") and whose **lyrics mention the word "tiempo" (time)**.  


* You can find more queries like this in the file called `scrips.js` 
---


## ✅ Project Status  
This project can be used as a base for:  
- Queries with regular expressions.  
- Working with array operators.  
- Simulating a real streaming system.  
