// 模式切换和隐藏逻辑
const modeSwitch = document.getElementById('modeSwitch');
let timeout;
modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('day-mode');
    modeSwitch.querySelector('.icon').textContent = document.body.classList.contains('day-mode') ? '🌙' : '☀️';
});
window.addEventListener('scroll', () => {
    modeSwitch.classList.remove('hidden');
    clearTimeout(timeout);
    timeout = setTimeout(() => modeSwitch.classList.add('hidden'), 3000);
});

// 粒子星空（炫酷效果）
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
for (let i = 0; i < 200; i++) {
    particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 2 + 1, speed: Math.random() * 0.5 + 0.1 });
}
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// 小组件逻辑
function updateWidgets() {
    const startDate = new Date('2025-08-14');
    const days = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('uptime').textContent = `运行时长: ${days}天`;

    const hour = new Date().getHours();
    const tip = hour % 2 === 0 ? '健康提醒: 喝杯水' : '健康提醒: 休息眼睛';
    document.getElementById('healthTip').textContent = tip;

    const date = new Date().toLocaleDateString('zh-CN');
    document.getElementById('calendar').textContent = `日历: ${date}`;

    updateTime();
    setInterval(updateTime, 1000);
}
function updateTime() {
    const tz = document.getElementById('timeZone').value;
    const time = new Date().toLocaleTimeString('zh-CN', { timeZone: tz });
    document.getElementById('worldTime').firstChild.textContent = `世界时间: ${tz.split('/')[1]} - ${time}`;
}
if (document.getElementById('uptime')) updateWidgets();

// 书签存储和展示
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
let ads = JSON.parse(localStorage.getItem('ads')) || [{img:'',link:''}, {img:'',link:''}, {img:'',link:''}];

function renderBookmarks() {
    const container = document.getElementById('bookmarks');
    if (!container) return;
    container.innerHTML = '';
    bookmarks.forEach(bm => {
        const div = document.createElement('div');
        div.className = 'bookmark';
        div.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${bm.url}" alt="${bm.title}"><br><a href="${bm.url}" target="_blank">${bm.title}</a>`;
        container.appendChild(div);
    });
    document.getElementById('totalSites').textContent = bookmarks.length;
}
function renderAds() {
    for (let i = 1; i <= 3; i++) {
        const ad = document.getElementById(`ad${i}`);
        ad.querySelector('img').src = ads[i-1].img;
        ad.querySelector('a').href = ads[i-1].link;
    }
}
if (document.getElementById('bookmarks')) {
    renderBookmarks();
    renderAds();
}

// 编辑页面逻辑
function checkPassword() {
    if (document.getElementById('passwordInput').value === '123456') {
        document.getElementById('passwordModal').style.display = 'none';
        document.getElementById('editContent').style.display = 'block';
        renderEditor();
        loadAdsToEditor();
    }
}
function renderEditor() {
    const editor = document.getElementById('bookmarkEditor');
    editor.innerHTML = '';
    bookmarks.forEach((bm, idx) => {
        const div = document.createElement('div');
        div.innerHTML = `${bm.title} - ${bm.url} <button onclick="editBookmark(${idx})">编辑</button> <button onclick="deleteBookmark(${idx})">删除</button>`;
        editor.appendChild(div);
    });
}
function addBookmark() {
    const title = document.getElementById('newTitle').value;
    const url = document.getElementById('newUrl').value;
    if (title && url && !bookmarks.some(b => b.url === url)) {
        bookmarks.push({title, url});
        saveBookmarks();
        renderEditor();
    }
}
function editBookmark(idx) {
    const newTitle = prompt('新标题', bookmarks[idx].title);
    const newUrl = prompt('新URL', bookmarks[idx].url);
    if (newTitle && newUrl) {
        bookmarks[idx] = {title: newTitle, url: newUrl};
        saveBookmarks();
        renderEditor();
    }
}
function deleteBookmark(idx) {
    bookmarks.splice(idx, 1);
    saveBookmarks();
    renderEditor();
}
function saveBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
function importBookmarks() {
    const file = document.getElementById('importFile').files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(e.target.result, 'text/html');
        const links = doc.querySelectorAll('a');
        links.forEach(a => {
            const url = a.href;
            const title = a.textContent;
            if (url && title && !bookmarks.some(b => b.url === url)) {
                bookmarks.push({title, url});
            }
        });
        saveBookmarks();
        renderEditor();
        alert('导入完成，重复忽略');
    };
    reader.readAsText(file);
}
function exportBookmarks() {
    let html = '<DL><p>';
    bookmarks.forEach(bm => {
        html += `<DT><A HREF="${bm.url}">${bm.title}</A></DT>`;
    });
    html += '</DL><p>';
    const blob = new Blob([html], {type: 'text/html'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'bookmarks.html';
    a.click();
}
function saveAd(num) {
    const img = document.getElementById(`ad${num}Img`).value;
    const link = document.getElementById(`ad${num}Link`).value;
    ads[num-1] = {img, link};
    localStorage.setItem('ads', JSON.stringify(ads));
}
function loadAdsToEditor() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`ad${i}Img`).value = ads[i-1].img;
        document.getElementById(`ad${i}Link`).value = ads[i-1].link;
    }
}

// 支持拖拽排序（人性化）
const editor = document.getElementById('bookmarkEditor');
if (editor) {
    editor.addEventListener('dragstart', e => e.dataTransfer.setData('text', e.target.dataset.idx));
    editor.addEventListener('dragover', e => e.preventDefault());
    editor.addEventListener('drop', e => {
        const fromIdx = e.dataTransfer.getData('text');
        const toIdx = e.target.dataset.idx;
        if (fromIdx !== toIdx) {
            [bookmarks[fromIdx], bookmarks[toIdx]] = [bookmarks[toIdx], bookmarks[fromIdx]];
            saveBookmarks();
            renderEditor();
        }
    });
}