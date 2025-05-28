const lyrics = [
  ["To you, yes, my love to you", "To you, yes, my love to you", 0],
  ["Yes, my love to you, you, to you", "Yes, my love to you, you, to you", 7],
  ["watashi wa watashi anata wa anata to", "I am me, and you are you —", 22],
  ["yūbe itteta sonna ki mo suru wa", "Last night, you said that… it felt that way.", 31],
  ["gurei no jaketto ni", "That gray jacket,", 40],
  ["mioboe ga aru kōhī no shimi", "I recognize it — even the coffee stain.", 44],
  ["aikawarazu nano ne", "You’re still the same, aren’t you?", 49],
  ["shōuindō ni futari utsureba", "When our reflection meets in the shop window—", 53],
  ["Stay with me", "Stay with me", 60],
  ["mayonaka no doa o tataki", "You knocked on my midnight door,", 64],
  ["kaeranaide to naita", "I cried, begging you not to leave.", 68],
  ["ano kisetsu ga ima me no mae", "That season is now right before my eyes.", 74],
  ["Stay with me", "Stay with me", 79],
  ["kuchiguse o iinagara", "Saying the phrases we used to say,", 81],
  ["futari no shunkan o daite", "I held onto our shared moments,", 85],
  ["mada wasurezu daiji ni shiteita", "Still treasuring them, not forgetting.", 91],
  ["koi to ai to wa chigau mono da yo to", "“Love and romance are different things,” you said—", 106],
  ["yūbe iwareta sonna ki mo suru wa", "Last night… or at least it felt that way.", 114],
  ["nidome no fuyu ga kite", "The second winter came,", 124],
  ["hanarete itta anata no kokoro", "And your heart drifted away.", 127],
  ["furikaereba itsumo", "Whenever I looked back,", 132],
  ["soko ni anata o kanjite ita no", "I always felt you were still there.", 136],
  ["Stay with me", "Stay with me", 144],
  ["mayonaka no doa o tataki", "You knocked on my midnight door,", 146],
  ["kokoro ni ana ga aita", "And left a hole in my heart.", 150],
  ["ano kisetsu ga ima me no mae", "That season is now right before my eyes.", 157],
  ["Stay with me", "Stay with me", 161],
  ["sabishisa magirawashite", "To ease the loneliness,", 164],
  ["oita rekōdo no hari", "I dropped the needle on a record,", 168],
  ["onaji merodi kurikaeshiteita", "Letting the same melody repeat again and again.", 175],
  ["Stay with me", "Stay with me", 201],
  ["mayonaka no doa o tataki", "You knocked on my midnight door,", 204],
  ["kaeranaide to naita", "I cried, begging you not to leave.", 208],
  ["ano kisetsu ga ima me no mae", "That season is now right before my eyes.", 214],
  ["Stay with me", "Stay with me", 219],
  ["kuchiguse o iinagara", "Saying the phrases we used to say,", 222],
  ["futari no shunkan o daite", "I held onto our shared moments,", 226],
  ["mada wasurezu atatamete ta", "Still keeping them warm, not forgetting.", 232]
];

const dict = {
  watashi:'I / me', anata:'you', wa:'(topic)', to:'and / with',
  yūbe:'last night', itteta:'said', sonna:'that kind of',
  ki:'feeling', mo:'also', suru:'to do / to feel', gurei:'gray',
  no:'of / ’s', jaketto:'jacket', ni:'in / on', mioboe:'recognition',
  ga:'subject', aru:'to have / exist', kōhī:'coffee', shimi:'stain',
  aikawarazu:'unchanged', nano:'soft explanatory tone',
  shōuindō:'shop-window', futari:'two people', utsureba:'if it reflects',
  mayonaka:'midnight', doa:'door', tataki:'knock',
  kaeranaide:'don’t return', naita:'cried', ano:'that',
  kisetsu:'season', ima:'now', me:'eye', mae:'front',
  kuchiguse:'habitual phrase', iinagara:'while saying',
  shunkan:'moment', daite:'embrace', mada:'still', wasurezu:'not forgetting',
  daiji:'important', koi:'romantic love', ai:'deep love',
  chigau:'differ', mono:'thing', yo:'emphasis',
  nidome:'second time', fuyu:'winter', kite:'came',
  hanarete:'parted', kokoro:'heart', furikaereba:'when looking back',
  itsumo:'always', soko:'there', kanjite:'feeling',
  sabishisa:'loneliness', magirawashite:'ease/distract',
  oita:'placed', rekōdo:'record', hari:'needle',
  onaji:'same', merodi:'melody', kurikaeshiteita:'kept repeating',
  ana:'hole', atatamete:'warming'
};

const playIconSvg = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
const pauseIconSvg = '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14v14h4V5z"/></svg>';

// Build lyric cards
const wrap = document.getElementById('lyrics');
lyrics.forEach(([ro, en, sec]) => {
  const div = document.createElement('div');
  div.className = 'line';
  div.dataset.ro = ro;
  div.dataset.en = en;
  div.dataset.time = sec;
  div.innerHTML = `
    <div class="romaji">${ro}</div>
    <button class="playBtn" title="Play/Pause">
      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </button>
    <button class="vocabBtn" title="Show vocab">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.74 3.74 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.502a2.251 2.251 0 0 0-1.587.658A2.25 2.25 0 0 0 8 14.994a2.25 2.25 0 0 0-1.413-2.086A2.251 2.251 0 0 0 5.002 13H.75a.75.75 0 0 1-.75-.75Zm1.5 9.557a.75.75 0 0 0 .75.75h2.994c.666 0 1.29.163 1.843.451A.75.75 0 0 0 8 12.994a.75.75 0 0 0 .657-.436c.554-.288 1.177-.451 1.843-.451h2.992a.75.75 0 0 0 .75-.75V6.24c-.537.12-1.04.368-1.5.706A2.25 2.25 0 0 0 11.006 8H8.75A1.75 1.75 0 0 1 7 6.25V2.537A2.235 2.235 0 0 0 5.002 2.5H1.5Z"/></svg>
    </button>
    <div class="translation">${en}</div>
    <div class="vocab"></div>
  `;
  wrap.appendChild(div);
});

// Handle all interactions
wrap.addEventListener('click', e => {
  const line = e.target.closest('.line');
  if (!line) return;

  if (e.target.closest('.playBtn')) {
        e.stopPropagation();
        const clickedBtn = e.target.closest('.playBtn');
        const line = clickedBtn.closest('.line'); // get the parent .line of the clicked button
        const t = parseFloat(line.dataset.time);
        const playerState = player.getPlayerState();

        // Reset all other buttons to play icon first
        // This handles the case where another line was active or to clean up states.
        document.querySelectorAll('.playBtn').forEach(otherBtn => {
            if (otherBtn !== clickedBtn) {
                otherBtn.innerHTML = playIconSvg;
            }
        });

        if (playerState === YT.PlayerState.PLAYING) {
            // If the video is currently playing
            if (clickedBtn.innerHTML === pauseIconSvg) { 
                // Clicked on the button that is currently showing PAUSE (i.e., the active line's button)
                player.pauseVideo();
                clickedBtn.innerHTML = playIconSvg;
            } else {
                // Clicked on a play button for a DIFFERENT line (or a line that was paused)
                player.seekTo(t, true);
                player.playVideo(); // Ensure it plays, seekTo might not guarantee it if it was already playing
                clickedBtn.innerHTML = pauseIconSvg;
            }
        } else {
            // Player is paused, ended, cued, etc.
            player.seekTo(t, true);
            player.playVideo();
            clickedBtn.innerHTML = pauseIconSvg;
        }
        return;
    }

  if (e.target.closest('.vocabBtn')) {
    e.stopPropagation();
    const box = line.querySelector('.vocab');
    if (!box.dataset.built) {
      box.innerHTML = line.dataset.ro.split(/\s+/).map(w => {
        const key = w.toLowerCase().replace(/[^\wāūōīē]/g, '');
        return `<div><strong>${w}</strong> <span>${dict[key] || '–'}</span></div>`;
      }).join('');
      box.dataset.built = '1';
    }
    return line.classList.toggle('vopen');
  }

  if (e.target.closest('.romaji')) {
    const wasVocab = line.classList.contains('vopen');
    line.classList.remove('vopen');
    if (!wasVocab) line.classList.toggle('open');
  }
});

// YouTube player
let player;
let currentActiveButton = null; // Added global variable

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'QNYT9wVwQ8A',
    playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
    events: {
      'onStateChange': onPlayerStateChange // Add this line
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    if (currentActiveButton) {
      currentActiveButton.innerHTML = playIconSvg;
      currentActiveButton = null;
    }
  }
}

// UI buttons
document.getElementById('toggleVideo').onclick = () => {
  document.getElementById('player-container').classList.toggle('hidden');
};
document.getElementById('fsBtn').onclick = () => {
  let url = location.href.replace('/pen/', '/fullpage/').replace('/debug/', '/fullpage/');
  const w = window.open(url, '_blank');
  w.onload = () => w.document.documentElement.requestFullscreen().catch(() => {});
};
