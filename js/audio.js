/**
 * ====================================================================
 * AUDIO SYNTHESIZER (WEB AUDIO API)
 * Zero external audio assets - 100% reliable, zero 404s
 * ====================================================================
 */

class SoundEffects {
  constructor() {
    this.audioCtx = null;
    this.enabled = localStorage.getItem("portfolio_sound_enabled") === "true";
  }

  init() {
    if (!this.audioCtx && typeof window !== "undefined") {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("portfolio_sound_enabled", this.enabled);
    if (this.enabled) {
      this.init();
      this.playBeep(660, 0.08, "triangle");
    }
    return this.enabled;
  }

  playBeep(freq = 440, duration = 0.05, type = "sine", gainVal = 0.04) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  playHover() {
    this.playBeep(880, 0.03, "sine", 0.015);
  }

  playClick() {
    this.playBeep(520, 0.06, "triangle", 0.03);
  }

  playChime() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.02, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.2);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.2);
      });
    } catch (e) {}
  }
}

window.soundEffects = new SoundEffects();
