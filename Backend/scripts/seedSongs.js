const mongoose = require('mongoose');
const Song = require('../models/Song');


// Connect to the local dev database
mongoose.connect('mongodb://localhost:27017/loomify');

function buildSyncedLyrics(songTitle, originalLines, translationLines, transliterationLines) {
  if (originalLines.length !== translationLines.length || originalLines.length !== transliterationLines.length) {
    throw new Error("Line count mismatch! Check your arrays.");
  }

  const syncedLyrics = [];
  let currentSection = "";
  let currentLineId = 1;

  for (let i = 0; i < originalLines.length; i++) {
    const orig = originalLines[i].trim();
    const trans = translationLines[i].trim();
    const lit = transliterationLines[i].trim();

    if (orig.startsWith('[') && orig.endsWith(']')) {
      currentSection = orig; 
      continue; 
    }

    if (!orig && !trans && !lit) continue;

    syncedLyrics.push({
      lineId: currentLineId++,
      section: currentSection,
      original: orig,
      translation: trans,
      transliteration: lit
    });
  }

  return syncedLyrics;
}

async function seedDatabase() {
  console.log("---- Starting Loomify DB Mock Seeding ----\n");

  try {
    // Perfectly clean, hardcoded mock data for the PR
    const originalTextLines = [
      "[Verse 1]",
      "We were both young when I first saw you",
      "I close my eyes and the flashback starts",
      "[Chorus]",
      "Romeo, take me somewhere we can be alone",
      "I'll be waiting, all that's left to do is run"
    ];

    const translationTextLines = [
      "[Verse 1]",
      "जब मैंने तुम्हें पहली बार देखा था, हम दोनों बहुत छोटे थे",
      "मैं अपनी आँखें बंद करती हूँ और फ्लैशबैक शुरू हो जाता है",
      "[Chorus]",
      "रोमियो, मुझे कहीं ऐसी जगह ले चलो जहाँ हम अकेले हो सकें",
      "मैं इंतज़ार करूँगी, बस भागना बाकी है"
    ];

    const transliterationTextLines = [
      "[Verse 1]",
      "वी वर बोथ यंग वेन आई फर्स्ट सॉ यू",
      "आई क्लोज़ माई आइज़ एंड द फ्लैशबैक स्टार्ट्स",
      "[Chorus]",
      "रोमियो, टेक मी समव्हेयर वी कैन बी अलोन",
      "आई विल बी वेटिंग, ऑल देट्स लेफ्ट टू डू इज़ रन"
    ];

    console.log("Parsing and validating mock text data...");
    
    const parsedLyrics = buildSyncedLyrics(
      "Love Story (Test Version)", 
      originalTextLines, 
      translationTextLines, 
      transliterationTextLines
    );

    const newSong = new Song({
      title: "Love Story",
      artist: "Taylor Swift",
      coverImageUrl: "/Top50_1.png", 
      lyrics: parsedLyrics
    });

    // Clear old data and save the new song
    await Song.deleteMany({}); 
    await newSong.save();
    
    console.log(`✅ Success! "${newSong.title}" architecture is validated and saved to MongoDB.`);
    process.exit();

  } catch (error) {
    console.error("\n🚨 Seeding Failed:", error.message);
    process.exit(1);
  }
}

seedDatabase();