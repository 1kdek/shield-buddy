<p align="center">
  <img src="icon-192.png" alt="Shield Buddy" width="120" />
</p>

<h1 align="center">🛡️ Shield Buddy</h1>
<p align="center"><strong>一只会心跳的盾牌精灵 &middot; A minimalist tap companion with a soul</strong></p>

<p align="center">
  <a href="https://1kdek.github.io/shield-buddy/"><img src="https://img.shields.io/badge/🎮_Play_Now-Live_Demo-D77757?style=for-the-badge" alt="Play Now"></a>
  <a href="https://cdn.jsdelivr.net/gh/1kdek/shield-buddy@master/ShieldBuddy.apk"><img src="https://img.shields.io/badge/📦_Download-APK-3DDC84?style=for-the-badge&logo=android" alt="Download APK"></a>
</p>

---

## ✨ Features

| Category | Details |
|----------|---------|
| 🎨 **Handcrafted SVG** | Pixel-traced vector character — no images, no assets, pure math |
| 👁️ **Idle Animation** | Blinks every 4 seconds, even when you're not touching |
| 😊 **Emotional Feedback** | Blush fades in on every tap — it *feels* alive |
| 🏀 **Physics Bounce** | Squash & stretch keyframed from reference video — 600ms elastic cycle |
| 🔊 **Procedural Sound** | Zero audio files — 6-layer Web Audio synthesis engine |
| ⚡ **Speed Tiers** | Real-time tap interval detection: idle → 🔥 → ⚡ → 👑 |
| 💥 **Critical Strike** | ~8% crit chance with ten-tier lucky-number pool (666 → 18,888,888) |
| 📴 **Fully Offline** | Service Worker cache — works after first load even without internet |
| 📱 **PWA Installable** | Add to Home Screen on iOS Safari / Android Chrome |

---

## 🚀 Quick Links

| Link | Description |
|------|-------------|
| [**Play Online**](https://1kdek.github.io/shield-buddy/) | Web version — no download required |
| [**Download APK**](https://cdn.jsdelivr.net/gh/1kdek/shield-buddy@master/ShieldBuddy.apk) | Android install package (21 KB) |

---

## 📲 How to Install

### iPhone / iPad
1. Open **Safari** → go to `https://1kdek.github.io/shield-buddy/`
2. Tap the **Share** button (square with arrow)
3. Scroll down → **Add to Home Screen** → Done

### Android
1. Open **Chrome** → go to `https://1kdek.github.io/shield-buddy/`
2. Tap **⋮** → **Add to Home Screen**
3. Or download the [APK](https://cdn.jsdelivr.net/gh/1kdek/shield-buddy@master/ShieldBuddy.apk) directly

---

## 🎮 Gameplay

```
 TAP the shield → collect tokens → climb speed tiers → trigger crits

         1 ~     9 taps   +1 / tap
        10 ~    19 taps   +100 / tap
        20 ~    29 taps   +1,000 / tap
        30 ~   199 taps   +10,000 / tap
       200 ~   399 taps   +100,000 / tap
       400 ~   999 taps   +1,000,000 / tap
     1,000 ~ 1,999 taps   +10,000,000 / tap
               ...        (doubles every 200 taps)
```

---

## 🛠 Tech Stack

```
 Vanilla JavaScript   •   SVG Path Rendering   •   CSS Keyframes
 Web Audio API        •   Service Worker       •   PWA Manifest
 Zero frameworks      •   Zero dependencies    •   Zero build tools
```

---

## 📁 Project Structure

```
shield-buddy/
├── index.html          # Main application (self-contained)
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline cache
├── icon-192.png        # App icon (192×192)
├── icon-512.png        # App icon (512×512)
├── icon-180.png        # iOS app icon
├── favicon.png         # Browser favicon
├── ShieldBuddy.apk     # Android install package
└── README.md           # You are here
```

---

## 📄 License

MIT — feel free to fork, remix, and share.

---

<p align="center"><em>Click a shield. Feel something.</em></p>
