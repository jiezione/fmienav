const modeSwitch = document.getElementById('modeSwitch');
const editButton = document.getElementById('editButton');
let timeout;

function toggleModeSwitch() {
    modeSwitch.classList.remove('hidden');
    editButton.classList.remove('hidden');
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        modeSwitch.classList.add('hidden');
        editButton.classList.add('hidden');
    }, 3000);
}

if (modeSwitch) {
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('day-mode');
        modeSwitch.querySelector('.icon').textContent = document.body.classList.contains('day-mode') ? '🌙' : '☀️';
    });
    window.addEventListener('scroll', toggleModeSwitch);
    window.addEventListener('mousemove', toggleModeSwitch);
}

if (editButton) {
    editButton.addEventListener('click', () => {
        document.getElementById('passwordModal').style.display = 'block';
    });
}

function checkPassword() {
    if (document.getElementById('passwordInput').value === '123456') {
        window.location.href = 'edit.html';
    } else {
        alert('密码错误');
    }
}

const canvas = document.getElementById('stars');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    for (let i = 0; i < 200; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.1,
            isMeteor: Math.random() < 0.1
        });
    }
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#fff';
        particles.forEach(p => {
            ctx.beginPath();
            if (p.isMeteor) {
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x - 20, p.y - 20);
                ctx.stroke();
                p.x += 2;
                p.y += 2;
                if (p.x > canvas.width || p.y > canvas.height) {
                    p.x = Math.random() * canvas.width;
                    p.y = -20;
                }
            } else {
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
                p.y += p.speed;
                if (p.y > canvas.height) p.y = 0;
            }
        });
        requestAnimationFrame(drawStars);
    }
    drawStars();
}

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

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
let ads = JSON.parse(localStorage.getItem('ads')) || [{img:'',link:''}, {img:'',link:''}, {img:'',link:''}];

function renderBookmarks() {
    const container = document.getElementById('bookmarks');
    if (!container) return;
    container.innerHTML = '';
    const folders = {};
    bookmarks.forEach(bm => {
        const folder = bm.folder || '默认';
        if (!folders[folder]) folders[folder] = [];
        folders[folder].push(bm);
    });
    for (let folder in folders) {
        const folderDiv = document.createElement('div');
        folderDiv.className = 'bookmark-folder';
        folderDiv.innerHTML = `<h3>${folder}</h3>`;
        const grid = document.createElement('div');
        grid.className = 'bookmarks';
        folders[folder].forEach(bm => {
            const div = document.createElement('div');
            div.className = 'bookmark';
            div.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${bm.url}" alt="${bm.title}"><br><a href="${bm.url}" target="_blank">${bm.title}</a>`;
            grid.appendChild(div);
        });
        folderDiv.appendChild(grid);
        container.appendChild(folderDiv);
    }
    document.getElementById('totalSites').textContent = bookmarks.length;
}
function renderAds() {
    for (let i = 1; i <= 3; i++) {
        const ad = document.getElementById(`ad${i}`);
        ad.querySelector('img').src = ads[i-1].img || 'https://via.placeholder.com/300x100';
        ad.querySelector('a').href = ads[i-1].link || '#';
    }
}
if (document.getElementById('bookmarks')) {
    renderBookmarks();
    renderAds();
}

function renderEditor() {
    const editor = document.getElementById('bookmarkEditor');
    editor.innerHTML = '';
    bookmarks.forEach((bm, idx) => {
        const div = document.createElement('div');
        div.className = 'bookmark-item';
        div.dataset.idx = idx;
        div.draggable = true;
        div.innerHTML = `${bm.title} - ${bm.url} (文件夹: ${bm.folder || '默认'}) <button onclick="editBookmark(${idx})">编辑</button> <button onclick="deleteBookmark(${idx})">删除</button>`;
        editor.appendChild(div);
    });
}
function addBookmark() {
    const title = document.getElementById('newTitle').value;
    const url = document.getElementById('newUrl').value;
    const folder = document.getElementById('newFolder').value || '默认';
    if (title && url && !bookmarks.some(b => b.url === url)) {
        bookmarks.push({title, url, folder});
        saveBookmarks();
        renderEditor();
    }
}
function editBookmark(idx) {
    const newTitle = prompt('新标题', bookmarks[idx].title);
    const newUrl = prompt('新URL', bookmarks[idx].url);
    const newFolder = prompt('新文件夹', bookmarks[idx].folder || '默认');
    if (newTitle && newUrl) {
        bookmarks[idx] = {title: newTitle, url: newUrl, folder: newFolder};
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
    if (document.getElementById('bookmarks')) renderBookmarks();
}
function importBookmarks() {
    const file = document.getElementById('importFile').files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(e.target.result, 'text/html');
        let currentFolder = '默认';
        const walk = (node, folder) => {
            if (node.tagName === 'H3') currentFolder = node.textContent;
            if (node.tagName === 'A') {
                const url = node.href;
                const title = node.textContent;
                if (url && title && !bookmarks.some(b => b.url === url)) {
                    bookmarks.push({title, url, folder});
                }
            }
            node.childNodes.forEach(child => walk(child, currentFolder));
        };
        doc.querySelectorAll('dl').forEach(dl => walk(dl, currentFolder));
        saveBookmarks();
        renderEditor();
        alert('导入完成，重复忽略');
    };
    reader.readAsText(file);
}
function exportBookmarks() {
    let html = '<DL><p>';
    const folders = {};
    bookmarks.forEach(bm => {
        const folder = bm.folder || '默认';
        if (!folders[folder]) folders[folder] = [];
        folders[folder].push(bm);
    });
    for (let folder in folders) {
        html += `<DT><H3>${folder}</H3><DL><p>`;
        folders[folder].forEach(bm => {
            html += `<DT><A HREF="${bm.url}">${bm.title}</A></DT>`;
        });
        html += '</DL><p>';
    }
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
    if (document.getElementById('bookmarks')) renderAds();
}
function loadAdsToEditor() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`ad${i}Img`).value = ads[i-1].img;
        document.getElementById(`ad${i}Link`).value = ads[i-1].link;
    }
}
if (document.getElementById('bookmarkEditor')) {
    renderEditor();
    loadAdsToEditor();
}

const editor = document.getElementById('bookmarkEditor');
if (editor) {
    editor.addEventListener('dragstart', e => {
        if (e.target.classList.contains('bookmark-item')) {
            e.dataTransfer.setData('text', e.target.dataset.idx);
        }
    });
    editor.addEventListener('dragover', e => e.preventDefault());
    editor.addEventListener('drop', e => {
        if (e.target.classList.contains('bookmark-item')) {
            const fromIdx = e.dataTransfer.getData('text');
            const toIdx = e.target.dataset.idx;
            if (fromIdx !== toIdx) {
                [bookmarks[fromIdx], bookmarks[toIdx]] = [bookmarks[toIdx], bookmarks[fromIdx]];
                saveBookmarks();
                renderEditor();
            }
        }
    });
}