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
      <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 
      6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 
      4.23-1.57l.27.28v.79l5 4.99L20.49 
      19l-4.99-5zm-6 0C7 14 5 12 
      5 9.5S7 5 9.5 5 14 7 14 9.5 
      12 14 9.5 14z"/></svg>
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
