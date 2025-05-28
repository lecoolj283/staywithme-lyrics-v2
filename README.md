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

## Updating Lyrics

This section explains how to update the lyrics for the application.

1.  **Overview:**
    Lyrics for the application are managed in the `lyrics_data.json` file. This file contains the Romaji text, English translation, and timing information for each lyric line.

2.  **Automated Lyric Generation Process (Conceptual):**
    The most efficient way to generate lyrics for a new song or update existing ones is to use an automated transcription and timing process. While this repository does not include such tools, here's a conceptual workflow:
    *   **Obtain Song Audio:** Get a clear audio file of the song.
    *   **Automated Transcription & Timing:** Use a speech-to-text tool or service (e.g., those based on models like Whisper, or cloud services like Google Speech-to-Text, AWS Transcribe) to get the Romaji transcription of the lyrics along with timestamps for each word or line.
    *   **Translation:** Translate the transcribed Romaji lyrics into English. This can be done manually or with the help of machine translation tools, followed by a manual review.
    *   **Review and Correction:** Carefully review the automated transcription for accuracy, ensure the English translation is correct and natural, and adjust the timestamps as needed to perfectly sync with the song. This step is crucial for a good user experience.
    *   **External Process:** Note that this transcription, translation, and timing generation process is external to this web application. You'll need to use separate tools/services to produce this data.

3.  **Formatting the Data:**
    Once you have the accurate Romaji text, English translation, and start time for each lyric line, you need to format this information as a JSON array. Each object in the array represents one line of lyrics and must follow this structure:

    ```json
    {
      "romaji": "ここにあなたのローマ字歌詞",
      "english": "Your English translation here",
      "time": 123.45
    }
    ```
    *   `romaji`: The Romaji version of the lyric line (string).
    *   `english`: The English translation of the lyric line (string).
    *   `time`: The time in seconds (can be a float for milliseconds precision) when this lyric line should start.

4.  **Updating the Website:**
    *   Once your new lyric data is formatted correctly as a JSON array, replace the entire content of the `lyrics_data.json` file in this repository with your new data.
    *   Commit and push the changes to `lyrics_data.json`.
    *   **Important:** You no longer need to edit `app.js` to update the lyrics. The application will automatically load the lyrics from `lyrics_data.json`.
