# Stay With Me - Synced Interactive Lyrics

This repository hosts a GitHub Pages site for an interactive lyrics experience for the song "Stay With Me".

## Features

*   **Synced Lyrics:** Lyrics scroll and highlight in time with the song. (This feature depends on correct timestamps in `app.js` and player synchronization).
*   **Interactive Lines:**
    *   Click the play icon on a line to seek the video to that point.
    *   Click the Romaji text to toggle its English translation.
    *   Click the vocab icon to see a mini-dictionary for words in that line.
*   **Video Player:** Embeds the YouTube video directly on the page.
    *   Video ID: `QNYT9wVwQ8A`
*   **Toggle Video:** Show or hide the video player.
*   **Fullscreen Option:** View the page in fullscreen.

## File Structure

*   `index.html`: The main HTML file containing the page structure and lyric display area.
*   `styles.css`: CSS file for styling the page and its elements.
*   `app.js`: JavaScript file that handles:
    *   Loading lyrics and timestamps.
    *   Building the lyric cards.
    *   All interactivity (play/pause, translation toggle, vocab display).
    *   YouTube player initialization and control.

## Setup for GitHub Pages

1.  Ensure GitHub Pages is enabled for the `main` branch in the repository settings (Deploy from a branch -> select `main` and `/ (root)` folder).
2.  Once deployed, the site should be available at `https://<your-username>.github.io/staywithme-lyrics-v2/` (or your custom domain if configured).
