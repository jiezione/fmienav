body {
    font-family: 'Orbitron', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #1a0033, #330066, #4d0099);
    color: #e6e6ff;
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
}

.day-mode {
    background: linear-gradient(135deg, #66ccff, #3399ff, #0066cc);
    color: #000033;
}

#stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
}

.mode-switch, .edit-button {
    position: fixed;
    top: 15px;
    right: 15px;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.5s, transform 0.3s, box-shadow 0.3s;
    z-index: 1000;
    padding: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    box-shadow: 0 0 10px rgba(153,204,255,0.5);
}

.edit-button {
    right: 60px;
}

.mode-switch.hidden, .edit-button.hidden {
    opacity: 0;
}

.mode-switch:hover, .edit-button:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px rgba(153,204,255,1);
    animation: pulse 1s infinite;
}

.icon {
    font-size: 24px;
    transition: transform 0.3s;
}

.tooltip {
    display: none;
    position: absolute;
    top: 40px;
    background: rgba(0,0,0,0.8);
    color: #e6e6ff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 1001;
}

.mode-switch:hover .tooltip, .edit-button:hover .tooltip {
    display: block;
}

.password-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(153,204,255,0.7);
    z-index: 2000;
    backdrop-filter: blur(5px);
}

.password-modal input {
    padding: 10px;
    margin-right: 10px;
    border-radius: 5px;
    border: none;
    background: rgba(255,255,255,0.1);
    color: #e6e6ff;
}

.password-modal button {
    padding: 10px 20px;
    background: #3399ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.password-modal button:hover {
    background: #66ccff;
}

.header {
    display: flex;
    justify-content: center;
    padding: 20px;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(3px);
}

.widgets {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
}

.widgets div {
    background: rgba(255,255,255,0.1);
    padding: 10px 15px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(153,204,255,0.3);
    transition: transform 0.3s;
}

.widgets div:hover {
    transform: translateY(-3px);
}

.bookmarks {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
    padding: 30px;
    max-width: 1400px;
    margin: 0 auto;
}

.bookmark-folder {
    background: rgba(255,255,255,0.05);
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 20px;
    box-shadow: 0 0 15px rgba(153,204,255,0.2);
}

.bookmark-folder h3 {
    margin: 0 0 15px;
    font-size: 20px;
    color: #66ccff;
    text-shadow: 0 0 5px rgba(102,204,255,0.5);
}

.bookmark {
    text-align: center;
    background: rgba(255,255,255,0.1);
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
    backdrop-filter: blur(5px);
}

.bookmark:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 0 20px rgba(153,204,255,0.7);
}

.bookmark img {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
}

.bookmark a {
    color: inherit;
    text-decoration: none;
    font-size: 16px;
    text-shadow: 0 0 3px rgba(255,255,255,0.5);
}

.ads {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    flex-wrap: wrap;
}

.ad img {
    width: 300px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(153,204,255,0.3);
    transition: transform 0.3s;
}

.ad img:hover {
    transform: scale(1.05);
}

.footer {
    text-align: center;
    padding: 20px;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(3px);
    position: relative;
    bottom: 0;
    width: 100%;
}

#editContent {
    max-width: 900px;
    margin: 30px auto;
    padding: 20px;
    background: rgba(0,0,0,0.4);
    border-radius: 15px;
    backdrop-filter: blur(5px);
}

#editContent h1, #editContent h2 {
    color: #66ccff;
    text-shadow: 0 0 5px rgba(102,204,255,0.5);
}

#bookmarkEditor {
    margin: 20px 0;
}

.bookmark-item {
    background: rgba(255,255,255,0.1);
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s;
}

.bookmark-item:hover {
    transform: translateY(-3px);
}

.bookmark-item button {
    padding: 8px 15px;
    background: #3399ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    transition: background 0.3s;
}

.bookmark-item button:hover {
    background: #66ccff;
}

#editContent input {
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: none;
    background: rgba(255,255,255,0.1);
    color: #e6e6ff;
}

#editContent button {
    padding: 10px 20px;
    background: #3399ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

#editContent button:hover {
    background: #66ccff;
}

@keyframes pulse {
    0% { box-shadow: 0 0 10px rgba(153,204,255,0.5); }
    50% { box-shadow: 0 0 20px rgba(153,204,255,1); }
    100% { box-shadow: 0 0 10px rgba(153,204,255,0.5); }
}