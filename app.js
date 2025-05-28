// const lyrics = [...] // Removed hardcoded lyrics

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

// Build lyric cards
const wrap = document.getElementById('lyrics');

fetch('lyrics_data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(loadedLyrics => {
    loadedLyrics.forEach(line => { // Note: 'line' here is an object
      const div = document.createElement('div');
      div.className = 'line';
      // Access properties like line.romaji, line.english, line.time
      div.dataset.ro = line.romaji;
      div.dataset.en = line.english;
      div.dataset.time = line.time;
      div.innerHTML = `
    <div class="romaji">${line.romaji}</div>
    <button class="playBtn" title="Play/Pause">
      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </button>
    <button class="vocabBtn" title="Show vocab">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.74 3.74 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.502a2.251 2.251 0 0 0-1.587.658A2.25 2.25 0 0 0 8 14.994a2.25 2.25 0 0 0-1.413-2.086A2.251 2.251 0 0 0 5.002 13H.75a.75.75 0 0 1-.75-.75Zm1.5 9.557a.75.75 0 0 0 .75.75h2.994c.666 0 1.29.163 1.843.451A.75.75 0 0 0 8 12.994a.75.75 0 0 0 .657-.436c.554-.288 1.177-.451 1.843-.451h2.992a.75.75 0 0 0 .75-.75V6.24c-.537.12-1.04.368-1.5.706A2.25 2.25 0 0 0 11.006 8H8.75A1.75 1.75 0 0 1 7 6.25V2.537A2.235 2.235 0 0 0 5.002 2.5H1.5Z"/></svg>
    </button>
    <div class="translation">${line.english}</div>
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
    const btn = e.target.closest('.playBtn');
    const t = parseFloat(line.dataset.time);
    const state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
      player.pauseVideo();
      btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    } else {
      player.seekTo(t, true);
      player.playVideo();
      btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14v14h4V5z"/></svg>`;
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
  })
  .catch(error => {
    console.error('Error loading lyrics:', error);
    // Optionally, display a message to the user in the UI
    const lyricsContainer = document.getElementById('lyrics');
    if (lyricsContainer) {
      lyricsContainer.innerHTML = '<p style="color:red;">Could not load lyrics. Please check console for details.</p>';
    }
  });

// YouTube player
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'QNYT9wVwQ8A', // Ensure this ID is updated
    playerVars: { rel: 0, modestbranding: 1, playsinline: 1 }
  });
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
