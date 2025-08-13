// 公共数据存储
const bookmarksKey = 'bookmarks';
const adsKey = 'ads';
const password = '123456'; // 默认密码，可修改

// 主页面加载
if (document.getElementById('bookmarks')) {
    loadBookmarks();
    loadAds();
    initWidgets();
    initModeToggle();
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// 编辑页面
if (document.getElementById('edit-content')) {
    loadEditBookmarks();
    loadEditAds();
}

// 检查密码
function checkPassword() {
    if (document.getElementById('password').value === password) {
        document.getElementById('password-prompt').style.display = 'none';
        document.getElementById('edit-content').style.display = 'block';
    } else {
        alert('密码错误');
    }
}

// 加载书签到主页面
function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
    const container = document.getElementById('bookmarks');
    container.innerHTML = '';
    bookmarks.forEach(bm => {
        const div = document.createElement('div');
        div.className = 'bookmark';
        div.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${bm.url}" alt="${bm.title}"><br><a href="${bm.url}">${bm.title}</a>`;
        container.appendChild(div);
    });
    document.getElementById('total-sites').textContent = bookmarks.length;
}

// 加载广告到主页面
function loadAds() {
    const ads = JSON.parse(localStorage.getItem(adsKey)) || [
        { img: 'https://via.placeholder.com/300x100?text=广告1', link: '#' },
        { img: 'https://via.placeholder.com/300x100?text=广告2', link: '#' },
        { img: 'https://via.placeholder.com/300x100?text=广告3', link: '#' }
    ];
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`ad${i}-img`).src = ads[i-1].img;
        document.getElementById(`ad${i}-link`).href = ads[i-1].link;
    }
}

// 保存广告
function saveAd(index) {
    const ads = JSON.parse(localStorage.getItem(adsKey)) || [{}, {}, {}];
    ads[index-1].img = document.getElementById(`ad${index}-url`).value || ads[index-1].img;
    ads[index-1].link = document.getElementById(`ad${index}-link-url`).value || ads[index-1].link;
    localStorage.setItem(adsKey, JSON.stringify(ads));
    alert('保存成功');
}

// 加载编辑书签
function loadEditBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
    const container = document.getElementById('edit-bookmarks');
    container.innerHTML = '';
    bookmarks.forEach((bm, index) => {
        const div = document.createElement('div');
        div.className = 'edit-bookmark';
        div.innerHTML = `
            <img src="https://www.google.com/s2/favicons?domain=${bm.url}" alt="${bm.title}">
            <input value="${bm.title}" id="title-${index}">
            <input value="${bm.url}" id="url-${index}">
            <button onclick="updateBookmark(${index})">更新</button>
            <button onclick="deleteBookmark(${index})">删除</button>
        `;
        container.appendChild(div);
    });
}

// 添加书签
function addBookmark() {
    const url = document.getElementById('new-url').value;
    const title = document.getElementById('new-title').value;
    if (url && title) {
        const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
        if (!bookmarks.some(bm => bm.url === url)) {
            bookmarks.push({ url, title });
            localStorage.setItem(bookmarksKey, JSON.stringify(bookmarks));
            loadEditBookmarks();
        } else {
            alert('重复，忽略');
        }
    }
}

// 更新书签
function updateBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey));
    bookmarks[index].title = document.getElementById(`title-${index}`).value;
    bookmarks[index].url = document.getElementById(`url-${index}`).value;
    localStorage.setItem(bookmarksKey, JSON.stringify(bookmarks));
    loadEditBookmarks();
}

// 删除书签
function deleteBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey));
    bookmarks.splice(index, 1);
    localStorage.setItem(bookmarksKey, JSON.stringify(bookmarks));
    loadEditBookmarks();
}

// 导入书签（解析Netscape HTML）
function importBookmarks() {
    const file = document.getElementById('import-file').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(e.target.result, 'text/html');
            const links = Array.from(doc.querySelectorAll('a'));
            const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
            links.forEach(link => {
                const url = link.href;
                const title = link.textContent;
                if (url && title && !bookmarks.some(bm => bm.url === url)) {
                    bookmarks.push({ url, title });
                }
            });
            localStorage.setItem(bookmarksKey, JSON.stringify(bookmarks));
            loadEditBookmarks();
            alert('导入成功，重复忽略');
        };
        reader.readAsText(file);
    }
}

// 导出书签（生成HTML文件）
function exportBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
    let html = '<!DOCTYPE NETSCAPE-Bookmark-file-1>\n<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">\n<TITLE>Bookmarks</TITLE>\n<H1>Bookmarks</H1>\n<DL><p>\n';
    bookmarks.forEach(bm => {
        html += `<DT><A HREF="${bm.url}">${bm.title}</A>\n`;
    });
    html += '</DL><p>';
    const blob = new Blob([html], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'bookmarks.html';
    a.click();
}

// 加载编辑广告输入
function loadEditAds() {
    const ads = JSON.parse(localStorage.getItem(adsKey)) || [{ img: '', link: '' }, { img: '', link: '' }, { img: '', link: '' }];
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`ad${i}-url`).value = ads[i-1].img;
        document.getElementById(`ad${i}-link-url`).value = ads[i-1].link;
    }
}

// 小组件初始化
function initWidgets() {
    // 运行时长（假设2018启动）
    const startDate = new Date(2018, 0, 1);
    const days = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('uptime').textContent = `运行时长: ${days}天`;

    // 健康提醒（每小时）
    setInterval(() => {
        document.getElementById('health-reminder').textContent = '健康提醒: 休息一下吧！';
    }, 3600000);

    // 日历
    const date = new Date();
    document.getElementById('calendar').textContent = `日历: ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

    // 世界时间
    const select = document.getElementById('time-zone');
    select.onchange = updateTime;
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    const tz = document.getElementById('time-zone').value;
    const time = new Date().toLocaleString('zh-CN', { timeZone: tz, hour12: false });
    document.getElementById('time-display').textContent = time;
}

// 模式切换和滚动隐藏
function initModeToggle() {
    const toggle = document.getElementById('mode-toggle');
    toggle.onclick = () => {
        document.body.classList.toggle('day-mode');
        localStorage.setItem('mode', document.body.classList.contains('day-mode') ? 'day' : 'night');
    };
    if (localStorage.getItem('mode') === 'day') document.body.classList.add('day-mode');

    let timeout;
    window.onscroll = () => {
        document.body.classList.remove('scrolled');
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            document.body.classList.add('scrolled');
        }, 3000);
    };
}