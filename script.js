document.addEventListener('DOMContentLoaded', function() {
    const musicControls = [
        { playBtnId: 'playbuton', pauseBtnId: 'pusebuton', closeIconId: 'closeicon', musicBgId: 'fullmusicbg' },
        { playBtnId: 'playbuton2', pauseBtnId: 'pusebuton2', closeIconId: 'closeicon2', musicBgId: 'fullmusicbg2' },
        { playBtnId: 'playbuton3', pauseBtnId: 'pusebuton3', closeIconId: 'closeicon3', musicBgId: 'fullmusicbg3' },
        { playBtnId: 'playbuton4', pauseBtnId: 'pusebuton4', closeIconId: 'closeicon4', musicBgId: 'fullmusicbg4' },
        { playBtnId: 'playbuton5', pauseBtnId: 'pusebuton5', closeIconId: 'closeicon5', musicBgId: 'fullmusicbg5' },
        { playBtnId: 'playbuton6', pauseBtnId: 'pusebuton6', closeIconId: 'closeicon6', musicBgId: 'fullmusicbg6' },
        { playBtnId: 'playbuton7', pauseBtnId: 'pusebuton7', closeIconId: 'closeicon7', musicBgId: 'fullmusicbg7' }
    ];

    function setupMusicControl({ playBtnId, pauseBtnId, closeIconId, musicBgId }) {
        const playBtn = document.getElementById(playBtnId);
        const pauseBtn = document.getElementById(pauseBtnId);
        const closeIcon = document.getElementById(closeIconId);
        const musicBg = document.getElementById(musicBgId);

        if (playBtn && pauseBtn) {
            pauseBtn.addEventListener('click', function() {
                pauseBtn.style.display = 'none';
                playBtn.style.display = 'flex';
            });
            playBtn.addEventListener('click', function() {
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'flex';
            });
        }

        if (closeIcon && musicBg) {
            closeIcon.addEventListener('click', function() {
                musicBg.style.display = 'none';
            });
        }

        if (musicBg) {
            const musicElement = document.getElementById(musicBgId.replace('fullmusicbg', 'musicfull'));
            if (musicElement) {
                musicElement.addEventListener('click', function() {
                    musicBg.style.display = 'flex';
                });
            }
        }
    }

    musicControls.forEach(setupMusicControl);
});
