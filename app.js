const VAL_RANK_BASE = 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/';

const RANKS = {
  radiant: { name: 'レディアント', short: 'Radiant', value: 3000, icon: `${VAL_RANK_BASE}27/smallicon.png` },
  imo3: { name: 'イモータル 3', short: 'imo3', value: 2700, icon: `${VAL_RANK_BASE}26/smallicon.png` },
  imo2: { name: 'イモータル 2', short: 'imo2', value: 2500, icon: `${VAL_RANK_BASE}25/smallicon.png` },
  imo1: { name: 'イモータル 1', short: 'imo1', value: 2300, icon: `${VAL_RANK_BASE}24/smallicon.png` },
  a3: { name: 'アセンダント 3', short: 'a3', value: 2100, icon: `${VAL_RANK_BASE}23/smallicon.png` },
  a2: { name: 'アセンダント 2', short: 'a2', value: 2000, icon: `${VAL_RANK_BASE}22/smallicon.png` },
  a1: { name: 'アセンダント 1', short: 'a1', value: 1900, icon: `${VAL_RANK_BASE}21/smallicon.png` },
  d3: { name: 'ダイヤ 3', short: 'd3', value: 1800, icon: `${VAL_RANK_BASE}20/smallicon.png` },
  d2: { name: 'ダイヤ 2', short: 'd2', value: 1700, icon: `${VAL_RANK_BASE}19/smallicon.png` },
  d1: { name: 'ダイヤ 1', short: 'd1', value: 1600, icon: `${VAL_RANK_BASE}18/smallicon.png` },
  p3: { name: 'プラチナ 3', short: 'p3', value: 1500, icon: `${VAL_RANK_BASE}17/smallicon.png` },
  p2: { name: 'プラチナ 2', short: 'p2', value: 1400, icon: `${VAL_RANK_BASE}16/smallicon.png` },
  p1: { name: 'プラチナ 1', short: 'p1', value: 1300, icon: `${VAL_RANK_BASE}15/smallicon.png` },
  g3: { name: 'ゴールド 3', short: 'g3', value: 1200, icon: `${VAL_RANK_BASE}14/smallicon.png` },
  g2: { name: 'ゴールド 2', short: 'g2', value: 1100, icon: `${VAL_RANK_BASE}13/smallicon.png` },
  g1: { name: 'ゴールド 1', short: 'g1', value: 1000, icon: `${VAL_RANK_BASE}12/smallicon.png` },
  s3: { name: 'シルバー 3', short: 's3', value: 900, icon: `${VAL_RANK_BASE}11/smallicon.png` },
  s2: { name: 'シルバー 2', short: 's2', value: 800, icon: `${VAL_RANK_BASE}10/smallicon.png` },
  s1: { name: 'シルバー 1', short: 's1', value: 700, icon: `${VAL_RANK_BASE}9/smallicon.png` },
  b3: { name: 'ブロンズ 3', short: 'b3', value: 600, icon: `${VAL_RANK_BASE}8/smallicon.png` },
  b2: { name: 'ブロンズ 2', short: 'b2', value: 500, icon: `${VAL_RANK_BASE}7/smallicon.png` },
  b1: { name: 'ブロンズ 1', short: 'b1', value: 400, icon: `${VAL_RANK_BASE}6/smallicon.png` },
  i3: { name: 'アイアン 3', short: 'i3', value: 300, icon: `${VAL_RANK_BASE}5/smallicon.png` },
  i2: { name: 'アイアン 2', short: 'i2', value: 200, icon: `${VAL_RANK_BASE}4/smallicon.png` },
  i1: { name: 'アイアン 1', short: 'i1', value: 100, icon: `${VAL_RANK_BASE}3/smallicon.png` },
  unranked: { name: 'アンランク', short: 'UNRANK', value: 1000, icon: `${VAL_RANK_BASE}0/smallicon.png` }
};

const ROLES = {
  none: { name: '指定なし', short: '', icon: '' },
  duelist: {
    name: 'デュエリスト',
    short: 'デュエ',
    icon: 'https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png'
  },
  initiator: {
    name: 'イニシエーター',
    short: 'イニシ',
    icon: 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png'
  },
  controller: {
    name: 'コントローラー',
    short: 'モク',
    icon: 'https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png'
  },
  sentinel: {
    name: 'センチネル',
    short: 'センチネル',
    icon: 'https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png'
  }
};

const SAMPLE_LOBBY = {
  attackers: [
    { id: 'p1', name: 'Phoenix', rank: 'a2', role: 'duelist', adjustment: 0, mvpBonus: 50, locked: false },
    { id: 'p2', name: 'Omen', rank: 'd1', role: 'controller', adjustment: 0, mvpBonus: 0, locked: false },
    { id: 'p3', name: 'Sova', rank: 'p3', role: 'initiator', adjustment: -25, mvpBonus: 0, locked: false },
    { id: 'p4', name: 'Cypher', rank: 'p2', role: 'none', adjustment: 0, mvpBonus: 0, locked: false },
    { id: 'p5', name: 'Reyna', rank: 'g2', role: 'duelist', adjustment: 50, mvpBonus: 0, locked: false }
  ],
  defenders: [
    { id: 'p6', name: 'Brimstone', rank: 'g3', role: 'controller', adjustment: 0, mvpBonus: 0, locked: false },
    { id: 'p7', name: 'Fade', rank: 'd3', role: 'initiator', adjustment: 0, mvpBonus: 0, locked: false },
    { id: 'p8', name: 'Sage', rank: 's3', role: 'sentinel', adjustment: 0, mvpBonus: 0, locked: false },
    { id: 'p9', name: 'Jett', rank: 'p1', role: 'duelist', adjustment: 0, mvpBonus: 100, locked: false },
    { id: 'p10', name: 'Killjoy', rank: 'g1', role: 'none', adjustment: 0, mvpBonus: 0, locked: false }
  ],
  spectators: [
    { id: 'p11', name: 'Viper', rank: 'imo1', role: 'controller', adjustment: 0, mvpBonus: 0, locked: false },
    { id: 'p12', name: 'Breach', rank: 'p2', role: 'none', adjustment: 0, mvpBonus: 0, locked: false }
  ]
};

let lobby = {
  attackers: [null, null, null, null, null],
  defenders: [null, null, null, null, null],
  spectators: []
};

let generatedCandidates = [];
let currentCandidateIndex = 0;
let displayedPatternCount = 4;
let draggedItemInfo = null;

let inlineAddingSlot = null;
let inlineAddingSpectator = false;
let inlineSpectatorRank = 'unranked';

let currentAdjustingPlayer = null;
let tempMvpBonus = 0;

let activePicker = null;
let pickerContext = null;

const STORAGE_KEY_LOBBY = 'val_lobby_state_v9';

document.addEventListener('DOMContentLoaded', () => {
  loadLobbyData();
  setupEventListeners();
  renderLobby();
});

function loadLobbyData() {
  const saved = localStorage.getItem(STORAGE_KEY_LOBBY);
  if (saved) {
    try {
      lobby = JSON.parse(saved);
      while (lobby.attackers.length < 5) lobby.attackers.push(null);
      while (lobby.defenders.length < 5) lobby.defenders.push(null);
      if (!Array.isArray(lobby.spectators)) lobby.spectators = [];
      [...lobby.attackers, ...lobby.defenders, ...lobby.spectators].forEach(p => {
        if (p && !RANKS[p.rank]) p.rank = 'unranked';
      });
    } catch (e) {
      lobby = JSON.parse(JSON.stringify(SAMPLE_LOBBY));
    }
  } else {
    lobby = JSON.parse(JSON.stringify(SAMPLE_LOBBY));
    saveLobbyData();
  }
}

function saveLobbyData() {
  localStorage.setItem(STORAGE_KEY_LOBBY, JSON.stringify(lobby));
}

function getEffectiveRate(player) {
  if (!player) return 0;
  const base = RANKS[player.rank] ? RANKS[player.rank].value : 1000;
  const adj = Number(player.adjustment) || 0;
  const mvp = Number(player.mvpBonus) || 0;
  return base + adj + mvp;
}

function getRankFromRate(rate) {
  const rankEntries = Object.entries(RANKS).filter(([k]) => k !== 'unranked');
  let closest = RANKS.p1;
  let minDiff = 999999;

  for (const [key, info] of rankEntries) {
    const diff = Math.abs(rate - info.value);
    if (diff < minDiff) {
      minDiff = diff;
      closest = info;
    }
  }
  return closest;
}

function setupEventListeners() {
  document.getElementById('btnOptimizeTeams').addEventListener('click', optimizeTeams);
  document.getElementById('btnSwapTeams').addEventListener('click', swapSides);
  document.getElementById('btnCopyDiscord').addEventListener('click', copyDiscordText);

  const compareModal = document.getElementById('compareModal');
  document.getElementById('btnOpenCompareModal').addEventListener('click', () => {
    renderCompareModal();
    compareModal.classList.remove('hidden');
  });
  document.getElementById('btnCloseCompareModal').addEventListener('click', () => compareModal.classList.add('hidden'));
  document.getElementById('btnCloseCompareBtn').addEventListener('click', () => compareModal.classList.add('hidden'));

  document.getElementById('btnQuickSample').addEventListener('click', () => {
    showCustomConfirm(
      'テスト用データを読み込む',
      'テスト用データで上書きしますか？',
      '上書きする',
      () => {
        lobby = JSON.parse(JSON.stringify(SAMPLE_LOBBY));
        inlineAddingSlot = null;
        inlineAddingSpectator = false;
        saveLobbyData();
        renderLobby();
        document.getElementById('patternBar').classList.add('hidden');
        showToast('テスト用にしました。');
      }
    );
  });

  document.getElementById('btnClearLobby').addEventListener('click', () => {
    showCustomConfirm(
      '消去',
      'すべてのプレイヤーを消去しますか？',
      '消去する',
      () => {
        lobby = {
          attackers: [null, null, null, null, null],
          defenders: [null, null, null, null, null],
          spectators: []
        };
        inlineAddingSlot = null;
        inlineAddingSpectator = false;
        saveLobbyData();
        renderLobby();
        document.getElementById('patternBar').classList.add('hidden');
        showToast('プレイヤーを消去しました');
      },
      true
    );
  });

  document.getElementById('btnAddSpectatorBtn').addEventListener('click', () => {
    inlineAddingSlot = null;
    inlineAddingSpectator = true;
    inlineSpectatorRank = 'unranked';
    renderSpectators();
  });

  const spectatorDropZone = document.getElementById('slotsSpectators');
  spectatorDropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    spectatorDropZone.classList.add('drag-over');
  });
  spectatorDropZone.addEventListener('dragleave', () => {
    spectatorDropZone.classList.remove('drag-over');
  });
  spectatorDropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    spectatorDropZone.classList.remove('drag-over');
    if (!draggedItemInfo) return;
    const item = draggedItemInfo;
    draggedItemInfo = null;
    handleDropOnSpectators(item);
  });

  const adjustModal = document.getElementById('adjustModal');
  document.getElementById('btnCloseAdjustModal').addEventListener('click', () => adjustModal.classList.add('hidden'));
  document.getElementById('btnCancelAdjust').addEventListener('click', () => adjustModal.classList.add('hidden'));
  document.getElementById('btnSaveAdjust').addEventListener('click', saveAdjustModal);

  document.querySelectorAll('.mvp-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = parseInt(e.currentTarget.dataset.mvp, 10);
      tempMvpBonus = val;
      updateMvpBtnSelection(val);
    });
  });

  const bulkModal = document.getElementById('bulkModal');
  document.getElementById('btnOpenBulkAdd').addEventListener('click', () => {
    document.getElementById('bulkTextarea').value = '';
    bulkModal.classList.remove('hidden');
  });
  document.getElementById('btnCloseBulkModal').addEventListener('click', () => bulkModal.classList.add('hidden'));
  document.getElementById('btnCancelBulk').addEventListener('click', () => bulkModal.classList.add('hidden'));
  document.getElementById('btnApplyBulk').addEventListener('click', handleApplyBulk);

  document.getElementById('btnExportData').addEventListener('click', exportData);
  const exportModal = document.getElementById('exportModal');
  document.getElementById('btnCloseExportModal').addEventListener('click', () => exportModal.classList.add('hidden'));
  document.getElementById('btnCloseExportBtn').addEventListener('click', () => exportModal.classList.add('hidden'));
  document.getElementById('btnCopyExportText').addEventListener('click', () => {
    const text = document.getElementById('exportTextarea').value;
    navigator.clipboard.writeText(text).then(() => {
      exportModal.classList.add('hidden');
      showToast('テキストをクリップボードにコピーしました！');
    });
  });

  const choiceModal = document.getElementById('teamCountChoiceModal');
  document.getElementById('btnCloseChoiceModal').addEventListener('click', () => choiceModal.classList.add('hidden'));
  document.getElementById('btnCancelChoiceModal').addEventListener('click', () => choiceModal.classList.add('hidden'));
  document.getElementById('btnChoiceFillSpectators').addEventListener('click', () => {
    choiceModal.classList.add('hidden');
    const atkPlayers = lobby.attackers.filter(p => p !== null);
    const defPlayers = lobby.defenders.filter(p => p !== null);
    const activeCount = atkPlayers.length + defPlayers.length;
    const needed = Math.min(10 - activeCount, lobby.spectators.length);
    fillRandomFromSpectators(needed);
    const newActive = [...lobby.attackers.filter(p => p !== null), ...lobby.defenders.filter(p => p !== null)];
    runTeamOptimization(newActive);
  });
  document.getElementById('btnChoiceCurrentCount').addEventListener('click', () => {
    choiceModal.classList.add('hidden');
    const activePlayers = [...lobby.attackers.filter(p => p !== null), ...lobby.defenders.filter(p => p !== null)];
    runTeamOptimization(activePlayers);
  });

  document.addEventListener('click', (e) => {
    if (activePicker) {
      const rankPop = document.getElementById('rankPickerPopover');
      const rolePop = document.getElementById('rolePickerPopover');
      if (!rankPop.contains(e.target) && !rolePop.contains(e.target) && !e.target.closest('.player-avatar-box') && !e.target.closest('.player-role-badge') && !e.target.closest('.player-role-badge-empty') && !e.target.closest('.rank-preview')) {
        closeAllPickers();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllPickers();
      document.getElementById('adjustModal').classList.add('hidden');
      document.getElementById('compareModal').classList.add('hidden');
      document.getElementById('bulkModal').classList.add('hidden');
      document.getElementById('exportModal').classList.add('hidden');
      document.getElementById('teamCountChoiceModal').classList.add('hidden');
      document.getElementById('confirmModal').classList.add('hidden');
      if (inlineAddingSlot || inlineAddingSpectator) {
        inlineAddingSlot = null;
        inlineAddingSpectator = false;
        renderLobby();
      }
    }
  });
}

function renderLobby() {
  renderTeamSlots('attackers', 'slotsAttackers', 'countAttackers');
  renderTeamSlots('defenders', 'slotsDefenders', 'countDefenders');
  renderSpectators();
  updateBalanceSummary();
}

function renderTeamSlots(teamKey, containerId, countId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const team = lobby[teamKey];
  const activeCount = team.filter(p => p !== null).length;
  document.getElementById(countId).textContent = `${activeCount} / 5`;

  for (let i = 0; i < 5; i++) {
    const player = team[i];
    const slotEl = document.createElement('div');
    slotEl.className = 'lobby-slot';
    slotEl.dataset.team = teamKey;
    slotEl.dataset.index = i;

    setupSlotDropTarget(slotEl, teamKey, i);

    if (player) {
      slotEl.appendChild(createPlayerCard(player, teamKey, i));
    } else {
      const isThisSlotAdding = inlineAddingSlot && inlineAddingSlot.teamKey === teamKey && inlineAddingSlot.index === i;

      if (isThisSlotAdding) {
        slotEl.appendChild(createInlineAddForm(teamKey, i));
      } else {
        const emptyBtn = document.createElement('button');
        emptyBtn.className = 'empty-slot-btn';
        emptyBtn.innerHTML = `<span class="empty-plus">+</span> <span>空きスロット (クリックして追加)</span>`;
        emptyBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          inlineAddingSpectator = false;
          inlineAddingSlot = { teamKey, index: i, rank: 'unranked' };
          renderTeamSlots(teamKey, containerId, countId);
        });
        slotEl.appendChild(emptyBtn);
      }
    }

    container.appendChild(slotEl);
  }
}

function renderSpectators() {
  const container = document.getElementById('slotsSpectators');
  container.innerHTML = '';
  document.getElementById('countSpectators').textContent = `${lobby.spectators.length}人`;

  if (lobby.spectators.length === 0 && !inlineAddingSpectator) {
    container.innerHTML = '<div class="spectator-empty-msg">観戦者はいません</div>';
  } else {
    lobby.spectators.forEach((player, idx) => {
      player.locked = false;
      const cardEl = createPlayerCard(player, 'spectators', idx);
      container.appendChild(cardEl);
    });
  }

  if (inlineAddingSpectator) {
    const inlineDiv = document.createElement('div');
    inlineDiv.style.padding = '6px 10px';
    inlineDiv.appendChild(createInlineAddForm('spectators', lobby.spectators.length));
    container.appendChild(inlineDiv);
  }
}

function createInlineAddForm(targetTeam, targetIndex) {
  const form = document.createElement('div');
  form.className = 'slot-inline-add';

  let currentRank = (targetTeam === 'spectators') ? inlineSpectatorRank : (inlineAddingSlot ? inlineAddingSlot.rank : 'unranked');
  const rankInfo = RANKS[currentRank] || RANKS.unranked;

  form.innerHTML = `
    <div class="rank-preview" title="クリックしてランクを変更">
      <img src="${rankInfo.icon}" alt="${rankInfo.name}">
      <span>${rankInfo.short}</span>
    </div>
    <input type="text" placeholder="プレイヤー名を入力 (Enterで確定)" autofocus>
    <div class="inline-btn-group">
      <button type="button" class="btn-inline-add">追加</button>
      <button type="button" class="btn-inline-cancel">&times;</button>
    </div>
  `;

  const rankPreview = form.querySelector('.rank-preview');
  const input = form.querySelector('input');
  const addBtn = form.querySelector('.btn-inline-add');
  const cancelBtn = form.querySelector('.btn-inline-cancel');

  rankPreview.addEventListener('click', (e) => {
    e.stopPropagation();
    openRankPicker(rankPreview, currentRank, (newRank) => {
      currentRank = newRank;
      if (targetTeam === 'spectators') {
        inlineSpectatorRank = newRank;
      } else if (inlineAddingSlot) {
        inlineAddingSlot.rank = newRank;
      }
      const newRankInfo = RANKS[newRank] || RANKS.unranked;
      rankPreview.querySelector('img').src = newRankInfo.icon;
      rankPreview.querySelector('span').textContent = newRankInfo.short;
    });
  });

  const commitAdd = () => {
    const name = input.value.trim();
    if (!name) {
      input.focus();
      return;
    }

    const newPlayer = {
      id: 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      name,
      rank: currentRank,
      role: 'none',
      adjustment: 0,
      mvpBonus: 0,
      locked: false
    };

    if (targetTeam === 'spectators') {
      lobby.spectators.push(newPlayer);
      inlineAddingSpectator = false;
    } else {
      lobby[targetTeam][targetIndex] = newPlayer;
      inlineAddingSlot = null;
    }

    saveLobbyData();
    renderLobby();
    showToast(`「${name}」を追加しました`);
  };

  const cancelAdd = () => {
    inlineAddingSlot = null;
    inlineAddingSpectator = false;
    renderLobby();
  };

  addBtn.addEventListener('click', commitAdd);
  cancelBtn.addEventListener('click', cancelAdd);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitAdd();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cancelAdd();
    }
  });

  setTimeout(() => input.focus(), 30);

  return form;
}

function createPlayerCard(player, currentArea, currentIndex) {
  const rankInfo = RANKS[player.rank] || RANKS.unranked;
  const roleInfo = ROLES[player.role] || ROLES.none;

  const card = document.createElement('div');
  card.className = `player-card ${player.locked ? 'locked' : ''}`;
  card.draggable = true;

  let mvpBadgeHtml = '';
  if (player.mvpBonus === 50) {
    mvpBadgeHtml = `<span class="mvp-badge mvp-badge-50" title="前回対戦MVP (ダブルクリックで消去)">🔥</span>`;
  } else if (player.mvpBonus === 100) {
    mvpBadgeHtml = `<span class="mvp-badge mvp-badge-100" title="前回大キャリー (ダブルクリックで消去)">👑</span>`;
  }

  const lockBtnHtml = currentArea !== 'spectators'
    ? `<button class="btn-lock ${player.locked ? 'locked' : ''}" title="${player.locked ? '固定を解除する' : '固定する'}">${player.locked ? '🔒' : '🔓'}</button>`
    : '';

  let roleBadgeHtml = '';
  if (player.role && player.role !== 'none') {
    const iconHtml = roleInfo.icon
      ? `<img class="role-icon" src="${roleInfo.icon}" alt="${roleInfo.short}"> `
      : '';
    roleBadgeHtml = `<span class="player-role-badge" title="クリックでロールを変更">${iconHtml}${roleInfo.short}</span>`;
  } else {
    roleBadgeHtml = `<span class="player-role-badge-empty" title="クリックでロールを設定">+ ロール</span>`;
  }

  card.innerHTML = `
    <div class="player-avatar-box" title="クリックでランクを変更">
      <img class="rank-icon" src="${rankInfo.icon}" alt="${rankInfo.name}">
    </div>
    <div class="player-details">
      <div class="player-name-row">
        <span class="player-name" title="ダブルクリックで名前を変更">${escapeHtml(player.name)}</span>
        ${mvpBadgeHtml}
        ${lockBtnHtml}
      </div>
      <div class="player-sub-row">
        <span class="player-rank-label">${rankInfo.name}</span>
        ${roleBadgeHtml}
      </div>
    </div>
    <div class="player-card-actions">
      <button class="btn-adjust-player" title="実力補正">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06
                   a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06
                   a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21
                   a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09
                   A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06
                   a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06
                   a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3
                   a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09
                   A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06
                   a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06
                   a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3
                   a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09
                   a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06
                   a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06
                   a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21
                   a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
          </path>
        </svg>
      </button>
      <button class="btn-remove-player" title="消去する">&times;</button>
    </div>
  `;

  const avatarBox = card.querySelector('.player-avatar-box');
  avatarBox.addEventListener('click', (e) => {
    e.stopPropagation();
    openRankPicker(avatarBox, player.rank, (newRank) => {
      player.rank = newRank;
      saveLobbyData();
      renderLobby();
      showToast(`「${player.name}」のランクを【${RANKS[newRank].name}】に変更しました`);
    });
  });

  const roleBadge = card.querySelector('.player-role-badge, .player-role-badge-empty');
  if (roleBadge) {
    roleBadge.addEventListener('click', (e) => {
      e.stopPropagation();
      openRolePicker(roleBadge, player.role || 'none', (newRole) => {
        player.role = newRole;
        saveLobbyData();
        renderLobby();
        showToast(`「${player.name}」のロールを変更しました`);
      });
    });
  }

  const nameSpan = card.querySelector('.player-name');
  nameSpan.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    startInlineNameEdit(nameSpan, player);
  });

  const lockBtn = card.querySelector('.btn-lock');
  if (lockBtn) {
    lockBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      player.locked = !player.locked;
      saveLobbyData();
      renderLobby();
      const teamName = currentArea === 'attackers' ? 'アタッカー' : (currentArea === 'defenders' ? 'ディフェンダー' : 'チーム');
      showToast(player.locked ? `「${player.name}」を${teamName}に固定しました` : `「${player.name}」の固定を解除しました`);
    });
  }

  const adjustBtn = card.querySelector('.btn-adjust-player');
  adjustBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openAdjustModal(player);
  });

  const removeBtn = card.querySelector('.btn-remove-player');
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    removePlayer(currentArea, currentIndex);
  });

  card.addEventListener('dragstart', (e) => {
    draggedItemInfo = { fromArea: currentArea, fromIndex: currentIndex, player };
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', player.id);
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    clearAllDragOver();
    draggedItemInfo = null;
  });

  return card;
}

function startInlineNameEdit(nameSpan, player) {
  const currentName = player.name;
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'inline-name-input';
  input.value = currentName;

  nameSpan.replaceWith(input);
  input.focus();
  input.select();

  let finished = false;

  const finishEdit = (save) => {
    if (finished) return;
    finished = true;
    const newName = input.value.trim();
    if (save && newName && newName !== currentName) {
      player.name = newName;
      saveLobbyData();
      renderLobby();
      showToast(`「${currentName}」を「${newName}」に変更しました`);
    } else {
      renderLobby();
    }
  };

  input.addEventListener('blur', () => finishEdit(true));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      finishEdit(true);
    } else if (e.key === 'Escape') {
      finishEdit(false);
    }
  });
}

function openRankPicker(targetElement, selectedRankKey, onSelect) {
  closeAllPickers();
  const popover = document.getElementById('rankPickerPopover');
  const grid = document.getElementById('rankPickerGrid');
  grid.innerHTML = '';

  const orderedKeys = [
    'radiant', 'unranked',
    'imo3', 'imo2', 'imo1',
    'a3', 'a2', 'a1',
    'd3', 'd2', 'd1',
    'p3', 'p2', 'p1',
    'g3', 'g2', 'g1',
    's3', 's2', 's1',
    'b3', 'b2', 'b1',
    'i3', 'i2', 'i1'
  ];

  orderedKeys.forEach((key) => {
    const info = RANKS[key];
    if (!info) return;
    const isHalfWidth = key === 'radiant' || key === 'unranked';
    const item = document.createElement('div');
    item.className = `rank-picker-item ${key === selectedRankKey ? 'active' : ''} ${isHalfWidth ? 'half-width' : ''}`;
    item.innerHTML = `
      <img src="${info.icon}" alt="${info.name}">
      <span>${info.short}</span>
    `;
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      onSelect(key);
      closeAllPickers();
    });
    grid.appendChild(item);
  });

  positionPopover(popover, targetElement);
  popover.classList.remove('hidden');
  activePicker = 'rank';
}

function openRolePicker(targetElement, selectedRoleKey, onSelect) {
  closeAllPickers();
  const popover = document.getElementById('rolePickerPopover');
  const list = document.getElementById('rolePickerList');
  list.innerHTML = '';

  Object.entries(ROLES).forEach(([key, info]) => {
    const item = document.createElement('div');
    item.className = `role-picker-item ${key === selectedRoleKey ? 'active' : ''}`;
    const iconHtml = info.icon ? `<img src="${info.icon}" alt="${info.name}">` : '✖';
    item.innerHTML = `
      <span class="role-icon-box" style="width:20px;display:inline-flex;align-items:center;justify-content:center;">${iconHtml}</span>
      <span>${info.name}</span>
    `;
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      onSelect(key);
      closeAllPickers();
    });
    list.appendChild(item);
  });

  positionPopover(popover, targetElement);
  popover.classList.remove('hidden');
  activePicker = 'role';
}

function positionPopover(popover, targetElement) {
  const rect = targetElement.getBoundingClientRect();
  const popWidth = 300;
  let top = rect.bottom + window.scrollY + 6;
  let left = rect.left + window.scrollX;

  if (left + popWidth > window.innerWidth - 10) {
    left = window.innerWidth - popWidth - 10;
  }
  if (left < 10) left = 10;

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
}

function closeAllPickers() {
  document.getElementById('rankPickerPopover').classList.add('hidden');
  document.getElementById('rolePickerPopover').classList.add('hidden');
  activePicker = null;
}

function openAdjustModal(player) {
  currentAdjustingPlayer = player;
  tempMvpBonus = player.mvpBonus || 0;

  document.getElementById('adjustPlayerName').textContent = player.name;
  document.getElementById('adjustPlayerId').value = player.id;
  document.getElementById('inputCustomAdjustment').value = player.adjustment || 0;

  updateMvpBtnSelection(tempMvpBonus);
  document.getElementById('adjustModal').classList.remove('hidden');
}

function updateMvpBtnSelection(bonusVal) {
  document.querySelectorAll('.mvp-select-btn').forEach(btn => {
    const val = parseInt(btn.dataset.mvp, 10);
    btn.classList.toggle('active', val === bonusVal);
  });
}

function saveAdjustModal() {
  if (!currentAdjustingPlayer) return;
  const adj = parseInt(document.getElementById('inputCustomAdjustment').value, 10) || 0;
  currentAdjustingPlayer.adjustment = adj;
  currentAdjustingPlayer.mvpBonus = tempMvpBonus;

  saveLobbyData();
  renderLobby();
  document.getElementById('adjustModal').classList.add('hidden');
  showToast(`「${currentAdjustingPlayer.name}」の補正を反映しました`);
  currentAdjustingPlayer = null;
}

function setupSlotDropTarget(slotEl, toArea, toIndex) {
  slotEl.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    slotEl.classList.add('drag-over');
  });

  slotEl.addEventListener('dragleave', () => {
    slotEl.classList.remove('drag-over');
  });

  slotEl.addEventListener('drop', (e) => {
    e.preventDefault();
    slotEl.classList.remove('drag-over');
    if (!draggedItemInfo) return;
    const item = draggedItemInfo;
    draggedItemInfo = null;

    handleDropOnSlot(item, toArea, toIndex);
  });
}

function clearAllDragOver() {
  document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
}

function handleDropOnSlot(from, toArea, toIndex) {
  if (from.fromArea === toArea && from.fromIndex === toIndex) return;

  const targetExistingPlayer = lobby[toArea][toIndex];

  if (from.fromArea === 'spectators') {
    lobby.spectators.splice(from.fromIndex, 1);
  } else {
    lobby[from.fromArea][from.fromIndex] = null;
  }

  if (targetExistingPlayer) {
    if (from.fromArea === 'spectators') {
      targetExistingPlayer.locked = false;
      lobby.spectators.splice(from.fromIndex, 0, targetExistingPlayer);
    } else {
      lobby[from.fromArea][from.fromIndex] = targetExistingPlayer;
    }
  }

  lobby[toArea][toIndex] = from.player;

  saveLobbyData();
  renderLobby();
}

function handleDropOnSpectators(from) {
  if (from.fromArea === 'spectators') return;

  from.player.locked = false;

  lobby[from.fromArea][from.fromIndex] = null;
  lobby.spectators.push(from.player);

  saveLobbyData();
  renderLobby();
}

function removePlayer(area, index) {
  const p = (area === 'spectators') ? lobby.spectators[index] : lobby[area][index];
  const pName = p ? p.name : 'プレイヤー';
  if (area === 'spectators') {
    lobby.spectators.splice(index, 1);
  } else {
    lobby[area][index] = null;
  }
  saveLobbyData();
  renderLobby();
  showToast(`「${pName}」を消去しました`);
}

function shouldShowRoleFit(players) {
  if (!players || players.length === 0) return false;
  const roleCounts = {};
  players.forEach(p => {
    if (p && p.role && p.role !== 'none') {
      roleCounts[p.role] = (roleCounts[p.role] || 0) + 1;
    }
  });
  const counts = Object.values(roleCounts);
  if (counts.length === 0) return false;
  return counts.some(c => c >= 2);
}

function updateBalanceSummary() {
  const atkPlayers = lobby.attackers.filter(p => p !== null);
  const defPlayers = lobby.defenders.filter(p => p !== null);
  const activePlayers = [...atkPlayers, ...defPlayers];

  const atkEl = document.getElementById('attackerAvgDisplay');
  const defEl = document.getElementById('defenderAvgDisplay');
  const diffEl = document.getElementById('rateDiffDisplay');
  const roleEl = document.getElementById('roleMatchDisplay');

  const showRole = shouldShowRoleFit(activePlayers);

  if (atkPlayers.length === 0 && defPlayers.length === 0) {
    atkEl.innerHTML = '<span class="empty-avg">-</span>';
    defEl.innerHTML = '<span class="empty-avg">-</span>';
    diffEl.innerHTML = 'レート差: <strong>0 pt</strong>';
    roleEl.style.display = 'none';
    return;
  }

  if (atkPlayers.length > 0) {
    const sumAtk = atkPlayers.reduce((sum, p) => sum + getEffectiveRate(p), 0);
    const avgAtkRate = Math.round(sumAtk / atkPlayers.length);
    const avgRankAtk = getRankFromRate(avgAtkRate);
    atkEl.innerHTML = `
      <img class="rank-icon" src="${avgRankAtk.icon}" alt="${avgRankAtk.name}">
      <span>平均 : ${avgRankAtk.name}</span>
    `;
  } else {
    atkEl.innerHTML = '<span class="empty-avg">-</span>';
  }

  if (defPlayers.length > 0) {
    const sumDef = defPlayers.reduce((sum, p) => sum + getEffectiveRate(p), 0);
    const avgDefRate = Math.round(sumDef / defPlayers.length);
    const avgRankDef = getRankFromRate(avgDefRate);
    defEl.innerHTML = `
      <img class="rank-icon" src="${avgRankDef.icon}" alt="${avgRankDef.name}">
      <span>平均 : ${avgRankDef.name}</span>
    `;
  } else {
    defEl.innerHTML = '<span class="empty-avg">-</span>';
  }

  if (atkPlayers.length > 0 && defPlayers.length > 0) {
    const sumAtk = atkPlayers.reduce((sum, p) => sum + getEffectiveRate(p), 0);
    const sumDef = defPlayers.reduce((sum, p) => sum + getEffectiveRate(p), 0);
    const rateDiff = Math.abs(sumAtk - sumDef);
    diffEl.innerHTML = `レート差: <strong>${rateDiff} pt</strong>`;

    if (showRole) {
      roleEl.style.display = 'inline-flex';
      const penalty = calculateRolePenalty(atkPlayers, defPlayers, activePlayers);
      let roleText = '△';
      let roleClass = 'role-text-fair';
      if (penalty <= 2.0) {
        roleText = '◎';
        roleClass = 'role-text-excellent';
      } else if (penalty <= 10.0) {
        roleText = '〇';
        roleClass = 'role-text-good';
      }
      roleEl.innerHTML = `ロール適合度: <strong class="${roleClass}">${roleText}</strong>`;
    } else {
      roleEl.style.display = 'none';
    }
  } else {
    diffEl.innerHTML = 'レート差: <strong>-</strong>';
    roleEl.style.display = 'none';
  }
}

function swapSides() {
  const temp = lobby.attackers;
  lobby.attackers = lobby.defenders;
  lobby.defenders = temp;
  saveLobbyData();
  renderLobby();
  showToast('アタッカーとディフェンダーのサイドを入れ替えました');
}

function optimizeTeams() {
  const atkPlayers = lobby.attackers.filter(p => p !== null);
  const defPlayers = lobby.defenders.filter(p => p !== null);
  const activePlayers = [...atkPlayers, ...defPlayers];
  const specCount = lobby.spectators.length;
  const totalCount = activePlayers.length + specCount;

  if (activePlayers.length < 2 && totalCount < 2) {
    showCustomAlert('人数不足', 'チーム分けを行うには、最低2人以上のプレイヤーが必要です。');
    return;
  }

  if (activePlayers.length < 10 && specCount > 0) {
    showTeamCountChoiceModal(activePlayers.length, specCount);
    return;
  }

  runTeamOptimization(activePlayers);
}

function showTeamCountChoiceModal(activeCount, specCount) {
  const modal = document.getElementById('teamCountChoiceModal');
  const descEl = document.getElementById('choiceModalDesc');
  const btnFill = document.getElementById('btnChoiceFillSpectators');
  const labelCurrent = document.getElementById('choiceCurrentCountLabel');

  const total = activeCount + specCount;
  labelCurrent.textContent = `${activeCount}人`;

  if (total >= 10) {
    descEl.innerHTML = `現在のアタッカー・ディフェンダーは <strong>${activeCount}人</strong>（観戦者 ${specCount}人）です。<br>観戦者からランダムで選出して10人でチーム分けを行いますか？今の人数のままでチーム分けを行いますか？`;
    btnFill.innerHTML = `観戦者からランダム選出して10人でチーム分け`;
  } else {
    descEl.innerHTML = `現在のアタッカー・ディフェンダーは <strong>${activeCount}人</strong>（観戦者 ${specCount}人、計 ${total}人）です。<br>観戦者から補充して${total}人でチーム分けを行いますか？今の人数のままでチーム分けを行いますか？`;
    btnFill.innerHTML = `観戦者を加えて${total}人でチーム分け`;
  }

  modal.classList.remove('hidden');
}

function fillRandomFromSpectators(neededCount) {
  shuffleArray(lobby.spectators);
  for (let i = 0; i < neededCount; i++) {
    if (lobby.spectators.length === 0) break;
    const p = lobby.spectators.shift();
    p.locked = false;
    const atkEmpty = lobby.attackers.findIndex(s => s === null);
    if (atkEmpty !== -1) {
      lobby.attackers[atkEmpty] = p;
    } else {
      const defEmpty = lobby.defenders.findIndex(s => s === null);
      if (defEmpty !== -1) lobby.defenders[defEmpty] = p;
    }
  }
  saveLobbyData();
  renderLobby();
}

function runTeamOptimization(activePlayers) {
  const totalCount = activePlayers.length;
  if (totalCount < 2) {
    showCustomAlert('人数不足', 'チーム分けを行うには、最低2人以上のプレイヤーが必要です。');
    return;
  }

  const targetA = Math.ceil(totalCount / 2);
  const targetB = totalCount - targetA;

  const lockedAtk = activePlayers.filter(p => lobby.attackers.some(atk => atk && atk.id === p.id && p.locked));
  const lockedDef = activePlayers.filter(p => lobby.defenders.some(def => def && def.id === p.id && p.locked));
  const freePlayers = activePlayers.filter(p => !p.locked);

  if (lockedAtk.length > targetA) {
    showCustomAlert('固定人数の超過', `アタッカー側の固定メンバーが定員を超えています（現在: ${lockedAtk.length}人 / 定員: ${targetA}人）。固定を解除してください。`);
    return;
  }
  if (lockedDef.length > targetB) {
    showCustomAlert('固定人数の超過', `ディフェンダー側の固定メンバーが定員を超えています（現在: ${lockedDef.length}人 / 定員: ${targetB}人）。固定を解除してください。`);
    return;
  }

  const priorityMode = document.getElementById('priorityMode').value;
  const needAtk = targetA - lockedAtk.length;

  const freeCombinations = [];

  function getCombinations(start, current) {
    if (current.length === needAtk) {
      freeCombinations.push([...current]);
      return;
    }
    for (let i = start; i < freePlayers.length; i++) {
      current.push(i);
      getCombinations(i + 1, current);
      current.pop();
    }
  }

  getCombinations(0, []);

  let validCombinations = freeCombinations;
  if (lockedAtk.length === 0 && lockedDef.length === 0 && targetA === targetB && freePlayers.length > 0) {
    validCombinations = freeCombinations.filter(combo => combo.includes(0));
  }

  const scoredCandidates = [];

  validCombinations.forEach(combo => {
    const chosenFree = combo.map(i => freePlayers[i]);
    const remainingFree = freePlayers.filter((_, idx) => !combo.includes(idx));

    const attackers = [...lockedAtk, ...chosenFree];
    const defenders = [...lockedDef, ...remainingFree];

    const sumA = attackers.reduce((sum, p) => sum + getEffectiveRate(p), 0);
    const sumB = defenders.reduce((sum, p) => sum + getEffectiveRate(p), 0);
    const rateDiff = Math.abs(sumA - sumB);

    const maxA = Math.max(...attackers.map(p => getEffectiveRate(p)));
    const maxB = Math.max(...defenders.map(p => getEffectiveRate(p)));
    const topDiff = Math.abs(maxA - maxB);

    const rolePenalty = calculateRolePenalty(attackers, defenders, activePlayers);

    let totalScore = 0;
    if (priorityMode === 'rate_pure') {
      totalScore = rateDiff * 100 + topDiff * 2.0 + rolePenalty * 2.0;
    } else if (priorityMode === 'role_pure') {
      totalScore = rolePenalty * 500 + rateDiff * 1.0 + topDiff * 0.5;
    } else {
      totalScore = rateDiff * 2.0 + rolePenalty * 50.0 + topDiff * 1.0;
    }

    scoredCandidates.push({
      attackers,
      defenders,
      sumA,
      sumB,
      avgA: Math.round(sumA / Math.max(1, attackers.length)),
      avgB: Math.round(sumB / Math.max(1, defenders.length)),
      rateDiff,
      topDiff,
      rolePenalty,
      totalScore
    });
  });

  scoredCandidates.sort((a, b) => a.totalScore - b.totalScore);

  const uniqueCandidates = [];
  const seenSignatures = new Set();
  scoredCandidates.forEach(cand => {
    const sigA = cand.attackers.map(p => p.id).sort().join(',');
    const sigB = cand.defenders.map(p => p.id).sort().join(',');
    const key = [sigA, sigB].sort().join('|');
    if (!seenSignatures.has(key)) {
      seenSignatures.add(key);
      uniqueCandidates.push(cand);
    }
  });

  if (priorityMode === 'random_variation') {
    const topPool = uniqueCandidates.slice(0, Math.min(12, uniqueCandidates.length));
    shuffleArray(topPool);
    generatedCandidates = topPool;
  } else {
    generatedCandidates = uniqueCandidates.slice(0, 16);
  }

  displayedPatternCount = Math.min(8, generatedCandidates.length);
  currentCandidateIndex = 0;

  applyPatternToLobby(generatedCandidates[0]);
  renderPatternTabs();

  document.getElementById('patternBar').classList.remove('hidden');
  showToast('チーム分けの候補を出しました！');
}

function applyPatternToLobby(cand) {
  const newAtk = [null, null, null, null, null];
  const newDef = [null, null, null, null, null];
  cand.attackers.forEach((p, idx) => {
    if (idx < 5) newAtk[idx] = p;
  });
  cand.defenders.forEach((p, idx) => {
    if (idx < 5) newDef[idx] = p;
  });
  lobby.attackers = newAtk;
  lobby.defenders = newDef;
  saveLobbyData();
  renderLobby();
}

function calculateRolePenalty(teamA, teamB, allSelected) {
  let penalty = 0;

  const overallRoles = {};
  allSelected.forEach(p => {
    if (p.role && p.role !== 'none') {
      overallRoles[p.role] = (overallRoles[p.role] || 0) + 1;
    }
  });

  if (Object.keys(overallRoles).length === 0) return 0;

  const countRoles = (team) => {
    const counts = { duelist: 0, initiator: 0, controller: 0, sentinel: 0 };
    team.forEach(p => {
      if (p.role && p.role !== 'none') {
        counts[p.role] = (counts[p.role] || 0) + 1;
      }
    });
    return counts;
  };

  const a = countRoles(teamA);
  const b = countRoles(teamB);

  const totalSmokes = (overallRoles.controller || 0);
  if (totalSmokes >= 2) {
    if (a.controller === 0) penalty += 20.0;
    if (b.controller === 0) penalty += 20.0;

    const smokeDiff = Math.abs(a.controller - b.controller);
    if (smokeDiff > 1) {
      penalty += (smokeDiff - 1) * 15.0;
    } else if (smokeDiff === 1 && totalSmokes % 2 === 0) {
      penalty += 8.0;
    }
  }

  const totalInits = (overallRoles.initiator || 0);
  if (totalInits >= 2) {
    if (a.initiator === 0) penalty += 15.0;
    if (b.initiator === 0) penalty += 15.0;

    const initDiff = Math.abs(a.initiator - b.initiator);
    if (initDiff > 1) {
      penalty += (initDiff - 1) * 12.0;
    } else if (initDiff === 1 && totalInits % 2 === 0) {
      penalty += 6.0;
    }
  }

  const totalDuelists = (overallRoles.duelist || 0);
  if (totalDuelists > 0) {
    if (a.duelist >= 3) penalty += (a.duelist - 2) * 8.0;
    if (b.duelist >= 3) penalty += (b.duelist - 2) * 8.0;
    const duelDiff = Math.abs(a.duelist - b.duelist);
    if (duelDiff > 1) {
      penalty += (duelDiff - 1) * 5.0;
    }
  }

  const totalSents = (overallRoles.sentinel || 0);
  if (totalSents >= 2) {
    if (a.sentinel === 0) penalty += 5.0;
    if (b.sentinel === 0) penalty += 5.0;
    const sentDiff = Math.abs(a.sentinel - b.sentinel);
    if (sentDiff > 1) {
      penalty += (sentDiff - 1) * 4.0;
    }
  }

  return penalty;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const CIRCLE_NUMS = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧'];

function renderPatternTabs() {
  const container = document.getElementById('patternTabsList');
  container.innerHTML = '';

  const visibleCandidates = generatedCandidates.slice(0, displayedPatternCount);

  visibleCandidates.forEach((cand, idx) => {
    const btn = document.createElement('button');
    btn.className = `pattern-tab-btn ${idx === currentCandidateIndex ? 'active' : ''}`;
    const label = CIRCLE_NUMS[idx] || `${idx + 1}`;
    btn.innerHTML = `
      <span>${label}</span>
      <span class="tab-diff-badge">レート差 : ${cand.rateDiff}pt</span>
    `;
    btn.addEventListener('click', () => {
      currentCandidateIndex = idx;
      applyPatternToLobby(cand);
      updatePatternTabs();
    });
    container.appendChild(btn);
  });
}

function updatePatternTabs() {
  const btns = document.querySelectorAll('.pattern-tab-btn');
  btns.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === currentCandidateIndex);
  });
}

function renderCompareModal() {
  const container = document.getElementById('compareListContainer');
  container.innerHTML = '';

  if (generatedCandidates.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding: 20px; color: var(--text-dim);">生成された候補がありません</p>';
    return;
  }

  generatedCandidates.forEach((cand, idx) => {
    const isCurrent = idx === currentCandidateIndex;
    const card = document.createElement('div');
    card.className = `compare-card ${isCurrent ? 'current' : ''}`;

    let roleText = '△';
    let roleClass = 'role-text-fair';
    if (cand.rolePenalty <= 2.0) {
      roleText = '◎';
      roleClass = 'role-text-excellent';
    } else if (cand.rolePenalty <= 10.0) {
      roleText = '〇';
      roleClass = 'role-text-good';
    }
    const avgRankA = getRankFromRate(cand.avgA);
    const avgRankB = getRankFromRate(cand.avgB);
    const label = `パターン ${idx + 1}`;

    const createMiniPlayerHtml = (p) => {
      const r = RANKS[p.rank] || RANKS.unranked;
      const rol = ROLES[p.role] || ROLES.none;
      const rolIconHtml = (p.role && p.role !== 'none' && rol.icon)
        ? `<img class="mini-role-icon" src="${rol.icon}" alt="${rol.short}" title="${rol.name}">`
        : '';
      const lockHtml = p.locked ? `<span class="mini-lock" title="チーム固定">🔒</span>` : '';
      const mvpHtml = p.mvpBonus === 50
        ? `<span class="mini-mvp" title="前回大キャリー">🔥</span>`
        : (p.mvpBonus === 100 ? `<span class="mini-mvp" title="前回大キャリー">👑</span>` : '');

      return `
        <div class="compare-mini-player" title="${escapeHtml(p.name)} [${r.name}]${p.role !== 'none' ? ' / ' + rol.name : ''}">
          <img class="mini-rank-icon" src="${r.icon}" alt="${r.name}">
          <span class="mini-name">${escapeHtml(p.name)}</span>
          <div class="mini-badge-row">
            ${rolIconHtml}
            ${lockHtml}
            ${mvpHtml}
          </div>
        </div>
      `;
    };

    const playersAHtml = cand.attackers.map(createMiniPlayerHtml).join('');
    const playersBHtml = cand.defenders.map(createMiniPlayerHtml).join('');

    const showRoleInModal = shouldShowRoleFit([...cand.attackers, ...cand.defenders]);
    const roleHtml = showRoleInModal
      ? `<span class="compare-meta-role">ロール: <strong class="${roleClass}">${roleText}</strong></span>`
      : '';

    card.innerHTML = `
      <div class="compare-meta">
        <span class="compare-meta-title">${label}</span>
        <span class="compare-meta-diff">差 : ${cand.rateDiff} pt</span>
        ${roleHtml}
      </div>
      <div class="compare-matchup-preview">
        <div class="compare-team-block team-a">
          <div class="compare-team-header team-a">
            <span>アタッカー</span>
            <span>平均 : ${avgRankA.name}</span>
          </div>
          <div class="compare-team-players">
            ${playersAHtml}
          </div>
        </div>
        <div class="compare-vs-divider">VS</div>
        <div class="compare-team-block team-b">
          <div class="compare-team-header team-b">
            <span>ディフェンダー</span>
            <span>平均 : ${avgRankB.name}</span>
          </div>
          <div class="compare-team-players">
            ${playersBHtml}
          </div>
        </div>
      </div>
      <div class="compare-actions">
        <button class="btn btn-apply-pattern ${isCurrent ? 'btn-primary' : 'btn-outline'}" data-index="${idx}">
          ${isCurrent ? '適用中' : 'この案を適用する'}
        </button>
      </div>
    `;

    card.querySelector('button').addEventListener('click', () => {
      currentCandidateIndex = idx;
      applyPatternToLobby(cand);
      renderPatternTabs();
      document.getElementById('compareModal').classList.add('hidden');
      showToast(`パターン ${idx + 1} をロビーに適用しました`);
    });

    container.appendChild(card);
  });
}

function copyDiscordText() {
  const atk = lobby.attackers.filter(p => p !== null);
  const def = lobby.defenders.filter(p => p !== null);

  if (atk.length === 0 && def.length === 0) {
    showCustomAlert('プレイヤー不在', 'チームにプレイヤーがいません。');
    return;
  }

  const DIVIDER = '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
  const lines = ['**チームの組み合わせ結果**'];

  lines.push('**【アタッカー:red_circle:】**');
  lines.push(DIVIDER);
  atk.forEach(p => {
    lines.push(`**・ ${p.name} **`);
  });
  lines.push(DIVIDER);

  lines.push('');

  lines.push('**【ディフェンダー:blue_circle: 】**');
  lines.push(DIVIDER);
  def.forEach(p => {
    lines.push(`**・ ${p.name} **`);
  });
  lines.push(DIVIDER);

  const discordText = lines.join('\n');

  navigator.clipboard.writeText(discordText).then(() => {
    showToast('結果をクリップボードにコピーしました！');
  }).catch(() => {
    showCustomAlert('コピー失敗', 'クリップボードへのコピーに失敗しました。');
  });
}

const BULK_RANK_PATTERNS = [
  { key: 'radiant', patterns: [/radiant/i, /レディアント/, /レディ/, /れでぃ/] },
  { key: 'imo3', patterns: [/imo[\s_-]*3/i, /im(?:mortal)?[\s_-]*3/i, /イモータル[\s_]*3/, /いもーたる[\s_]*3/, /イモ[\s_]*3/, /いも[\s_]*3/] },
  { key: 'imo2', patterns: [/imo[\s_-]*2/i, /im(?:mortal)?[\s_-]*2/i, /イモータル[\s_]*2/, /いもーたる[\s_]*2/, /イモ[\s_]*2/, /いも[\s_]*2/] },
  { key: 'imo1', patterns: [/imo[\s_-]*1/i, /im(?:mortal)?[\s_-]*1/i, /イモータル[\s_]*1/, /いもーたる[\s_]*1/, /イモ[\s_]*1/, /いも[\s_]*1/] },
  { key: 'a3', patterns: [/a(?:sc(?:endant)?)?[\s_-]*3/i, /アセンダント[\s_]*3/, /あせんだんと[\s_]*3/, /アセ[\s_]*3/, /あせ[\s_]*3/] },
  { key: 'a2', patterns: [/a(?:sc(?:endant)?)?[\s_-]*2/i, /アセンダント[\s_]*2/, /あせんだんと[\s_]*2/, /アセ[\s_]*2/, /あせ[\s_]*2/] },
  { key: 'a1', patterns: [/a(?:sc(?:endant)?)?[\s_-]*1/i, /アセンダント[\s_]*1/, /あせんだんと[\s_]*1/, /アセ[\s_]*1/, /あせ[\s_]*1/] },
  { key: 'd3', patterns: [/d(?:ia|iamond)?[\s_-]*3/i, /ダイヤモンド[\s_]*3/, /だいやもんど[\s_]*3/, /ダイヤ[\s_]*3/, /だいや[\s_]*3/] },
  { key: 'd2', patterns: [/d(?:ia|iamond)?[\s_-]*2/i, /ダイヤモンド[\s_]*2/, /だいやもんど[\s_]*2/, /ダイヤ[\s_]*2/, /だいや[\s_]*2/] },
  { key: 'd1', patterns: [/d(?:ia|iamond)?[\s_-]*1/i, /ダイヤモンド[\s_]*1/, /だいやもんど[\s_]*1/, /ダイヤ[\s_]*1/, /だいや[\s_]*1/] },
  { key: 'p3', patterns: [/p(?:lat|latinum)?[\s_-]*3/i, /プラチナ[\s_]*3/, /ぷらちな[\s_]*3/, /プラ[\s_]*3/, /ぷら[\s_]*3/] },
  { key: 'p2', patterns: [/p(?:lat|latinum)?[\s_-]*2/i, /プラチナ[\s_]*2/, /ぷらちな[\s_]*2/, /プラ[\s_]*2/, /ぷら[\s_]*2/] },
  { key: 'p1', patterns: [/p(?:lat|latinum)?[\s_-]*1/i, /プラチナ[\s_]*1/, /ぷらちな[\s_]*1/, /プラ[\s_]*1/, /ぷら[\s_]*1/] },
  { key: 'g3', patterns: [/g(?:old)?[\s_-]*3/i, /ゴールド[\s_]*3/, /ごーるど[\s_]*3/, /ゴル[\s_]*3/, /ごる[\s_]*3/] },
  { key: 'g2', patterns: [/g(?:old)?[\s_-]*2/i, /ゴールド[\s_]*2/, /ごーるど[\s_]*2/, /ゴル[\s_]*2/, /ごる[\s_]*2/] },
  { key: 'g1', patterns: [/g(?:old)?[\s_-]*1/i, /ゴールド[\s_]*1/, /ごーるど[\s_]*1/, /ゴル[\s_]*1/, /ごる[\s_]*1/] },
  { key: 's3', patterns: [/s(?:il|ver)?[\s_-]*3/i, /シルバー[\s_]*3/, /しるばー[\s_]*3/, /シル[\s_]*3/, /しる[\s_]*3/] },
  { key: 's2', patterns: [/s(?:il|ver)?[\s_-]*2/i, /シルバー[\s_]*2/, /しるばー[\s_]*2/, /シル[\s_]*2/, /しる[\s_]*2/] },
  { key: 's1', patterns: [/s(?:il|ver)?[\s_-]*1/i, /シルバー[\s_]*1/, /しるばー[\s_]*1/, /シル[\s_]*1/, /しる[\s_]*1/] },
  { key: 'b3', patterns: [/b(?:ro|ronze)?[\s_-]*3/i, /ブロンズ[\s_]*3/, /ぶろんず[\s_]*3/, /ブロ[\s_]*3/, /ぶろ[\s_]*3/] },
  { key: 'b2', patterns: [/b(?:ro|ronze)?[\s_-]*2/i, /ブロンズ[\s_]*2/, /ぶろんず[\s_]*2/, /ブロ[\s_]*2/, /ぶろ[\s_]*2/] },
  { key: 'b1', patterns: [/b(?:ro|ronze)?[\s_-]*1/i, /ブロンズ[\s_]*1/, /ぶろんず[\s_]*1/, /ブロ[\s_]*1/, /ぶろ[\s_]*1/] },
  { key: 'i3', patterns: [/i(?:ron)?[\s_-]*3/i, /アイアン[\s_]*3/, /あいあん[\s_]*3/] },
  { key: 'i2', patterns: [/i(?:ron)?[\s_-]*2/i, /アイアン[\s_]*2/, /あいあん[\s_]*2/] },
  { key: 'i1', patterns: [/i(?:ron)?[\s_-]*1/i, /アイアン[\s_]*1/, /あいあん[\s_]*1/] },
  { key: 'unranked', patterns: [/unranked/i, /unr/i, /アンランク/, /あんらんく/] }
];

const BULK_ROLE_PATTERNS = [
  { key: 'duelist', patterns: [/duelist/i, /デュエリスト/, /デュエ/, /due/, /でゅえ/] },
  { key: 'initiator', patterns: [/initiator/i, /イニシエーター/, /イニシ/, /ini/, /いにし/] },
  { key: 'controller', patterns: [/controller/i, /スモーク/, /コントローラー/, /モク/, /もく/, /con/] },
  { key: 'sentinel', patterns: [/sentinel/i, /センチネル/, /センチ/, /sen/, /せんち/] },
];

function handleApplyBulk() {
  const text = document.getElementById('bulkTextarea').value;
  const rawLines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  if (rawLines.length === 0) {
    document.getElementById('bulkModal').classList.add('hidden');
    return;
  }

  let count = 0;
  rawLines.forEach(rawLine => {
    let line = rawLine.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0)).trim();
    if (!line) return;

    let adjustment = 0;
    const adjMatch = line.match(/(?:^|\s)([+-]\d+)(?:\s|$)/);
    if (adjMatch) {
      adjustment = parseInt(adjMatch[1], 10);
      line = line.replace(adjMatch[0], ' ');
    }

    let rank = 'unranked';
    for (const item of BULK_RANK_PATTERNS) {
      let matched = false;
      for (const pat of item.patterns) {
        if (pat.test(line)) {
          rank = item.key;
          line = line.replace(pat, ' ');
          matched = true;
          break;
        }
      }
      if (matched) break;
    }

    let role = 'none';
    for (const item of BULK_ROLE_PATTERNS) {
      let matched = false;
      for (const pat of item.patterns) {
        if (pat.test(line)) {
          role = item.key;
          line = line.replace(pat, ' ');
          matched = true;
          break;
        }
      }
      if (matched) break;
    }

    const remainingTokens = line.trim().split(/\s+/).filter(t => t.length > 0);
    const name = remainingTokens.length > 0 ? remainingTokens[0] : `Player${count + 1}`;

    const p = {
      id: 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      name,
      rank,
      role,
      adjustment,
      mvpBonus: 0,
      locked: false
    };

    const atkEmpty = lobby.attackers.findIndex(s => s === null);
    if (atkEmpty !== -1) {
      lobby.attackers[atkEmpty] = p;
    } else {
      const defEmpty = lobby.defenders.findIndex(s => s === null);
      if (defEmpty !== -1) {
        lobby.defenders[defEmpty] = p;
      } else {
        lobby.spectators.push(p);
      }
    }
    count++;
  });

  saveLobbyData();
  renderLobby();
  document.getElementById('bulkModal').classList.add('hidden');
  showToast(`${count}人のメンバーを追加しました`);
}

function exportData() {
  const allPlayers = [
    ...lobby.attackers.filter(p => p !== null),
    ...lobby.defenders.filter(p => p !== null),
    ...lobby.spectators
  ];

  if (allPlayers.length === 0) {
    showCustomAlert('プレイヤーがいません', 'ロビーにプレイヤーがいません。');
    return;
  }

  const lines = allPlayers.map(p => {
    const rInfo = RANKS[p.rank] || RANKS.unranked;
    const rolInfo = ROLES[p.role] || ROLES.none;
    const rankPart = rInfo.name;
    const rolePart = (p.role && p.role !== 'none') ? ` ${rolInfo.name}` : '';
    const adjPart = (p.adjustment && p.adjustment !== 0) ? ` ${p.adjustment > 0 ? '+' : ''}${p.adjustment}` : '';
    return `${p.name} ${rankPart}${rolePart}${adjPart}`;
  });

  const exportText = lines.join('\n');
  const textarea = document.getElementById('exportTextarea');
  if (textarea) textarea.value = exportText;

  const exportModal = document.getElementById('exportModal');
  if (exportModal) exportModal.classList.remove('hidden');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showCustomConfirm(title, message, okText, onOk, isDanger = false) {
  if (typeof okText === 'function') {
    isDanger = !!onOk;
    onOk = okText;
    okText = 'OK';
  }

  const modal = document.getElementById('confirmModal');
  document.getElementById('confirmModalTitle').textContent = title;
  document.getElementById('confirmModalMessage').innerHTML = message;
  const okBtn = document.getElementById('btnConfirmOk');
  const cancelBtn = document.getElementById('btnConfirmCancel');

  okBtn.textContent = okText;
  if (isDanger) {
    okBtn.className = 'btn btn-danger';
  } else {
    okBtn.className = 'btn btn-primary';
  }
  okBtn.style.color = '#ffffff';
  cancelBtn.style.display = 'inline-flex';

  const cleanup = () => {
    modal.classList.add('hidden');
    okBtn.onclick = null;
    cancelBtn.onclick = null;
  };

  okBtn.onclick = () => {
    cleanup();
    if (onOk) onOk();
  };
  cancelBtn.onclick = () => {
    cleanup();
  };

  modal.classList.remove('hidden');
}

function showCustomAlert(title, message) {
  const modal = document.getElementById('confirmModal');
  document.getElementById('confirmModalTitle').textContent = title;
  document.getElementById('confirmModalMessage').innerHTML = message;
  const okBtn = document.getElementById('btnConfirmOk');
  const cancelBtn = document.getElementById('btnConfirmCancel');

  okBtn.textContent = 'OK';
  okBtn.className = 'btn btn-primary';
  cancelBtn.style.display = 'none';

  okBtn.onclick = () => {
    modal.classList.add('hidden');
    okBtn.onclick = null;
  };

  modal.classList.remove('hidden');
}