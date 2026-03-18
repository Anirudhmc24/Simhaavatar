'use client';
import { useEffect, useRef } from 'react';

// Hex color to RGB string helper
function hexRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

// ── MODEL RENDERERS ──────────────────────────────────────────

function drawKanthi(ctx, w, h, phase, accent) {
  const a = hexRgb(accent);
  const cx = w / 2, cy = h / 2;
  const r = Math.min(w, h) * 0.28;
  if (r < 10) return;

  ctx.save(); ctx.translate(cx, cy); ctx.rotate(phase * 0.4);

  // Outer glow ring
  ctx.beginPath(); ctx.arc(0, 0, r + 8, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${a},0.18)`; ctx.lineWidth = 14; ctx.stroke();

  // Main torque ring
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${a},0.9)`; ctx.lineWidth = 5; ctx.stroke();

  // Chain gems
  for (let i = 0; i < 18; i++) {
    const ang = (i / 18) * Math.PI * 2;
    const bx = Math.cos(ang) * r, by = Math.sin(ang) * r;
    ctx.beginPath(); ctx.arc(bx, by, i % 3 === 0 ? 6 : 4, 0, Math.PI * 2);
    ctx.fillStyle = i % 3 === 0 ? `rgba(${a},1)` : `rgba(${a},0.5)`; ctx.fill();
  }

  // Eagle wings (both sides)
  for (const side of [-1, 1]) {
    ctx.save(); ctx.scale(side, 1);
    ctx.beginPath();
    ctx.moveTo(r * 0.3, 0);
    ctx.bezierCurveTo(r * 0.7, -r * 0.55, r * 1.25, -r * 0.4, r * 1.1, r * 0.08);
    ctx.bezierCurveTo(r * 0.9, -r * 0.1, r * 0.5, -r * 0.08, r * 0.3, 0);
    ctx.strokeStyle = `rgba(${a},0.75)`; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillStyle = `rgba(${a},0.1)`; ctx.fill();
    ctx.restore();
  }

  // Center pendant gem
  ctx.beginPath(); ctx.arc(0, 0, 15, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${a},0.95)`; ctx.fill();
  ctx.beginPath(); ctx.arc(-5, -5, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fill();

  ctx.restore();

  // Sparkles
  for (let i = 0; i < 6; i++) {
    const sp = phase * 2 + i * 1.05;
    const sx = cx + Math.cos(sp) * r * 0.9;
    const sy = cy + Math.sin(sp * 1.3) * r * 0.8;
    ctx.beginPath(); ctx.arc(sx, sy, Math.abs(Math.sin(sp)) * 2 + 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${a},${0.2 + Math.abs(Math.sin(sp)) * 0.5})`; ctx.fill();
  }
}

function drawArmlet(ctx, w, h, phase, accent) {
  const a = hexRgb(accent);
  const cx = w / 2, cy = h / 2;
  const r = Math.min(w, h) * 0.3;
  if (r < 12) return; // canvas too small to draw safely

  ctx.save(); ctx.translate(cx, cy); ctx.rotate(phase * 0.35);

  // Band fill
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${a},0.12)`; ctx.lineWidth = 22; ctx.stroke();

  // Band edges
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${a},0.9)`; ctx.lineWidth = 3; ctx.stroke();
  ctx.beginPath(); ctx.arc(0, 0, Math.max(1, r - 11), 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${a},0.4)`; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.beginPath(); ctx.arc(0, 0, r + 11, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${a},0.3)`; ctx.lineWidth = 1.5; ctx.stroke();

  // Geometric panels
  for (let i = 0; i < 8; i++) {
    const ang = (i / 8) * Math.PI * 2;
    const px = Math.cos(ang) * r, py = Math.sin(ang) * r;
    ctx.save(); ctx.translate(px, py); ctx.rotate(ang + Math.PI / 2);
    ctx.fillStyle = `rgba(${a},${i % 2 === 0 ? 0.7 : 0.3})`;
    ctx.fillRect(-9, -12, 18, 24);
    ctx.restore();
  }

  // Narasimha face center
  ctx.beginPath(); ctx.arc(0, 0, 20, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${a},0.9)`; ctx.fill();
  ctx.beginPath(); ctx.arc(-6, -7, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(60,0,0,0.7)'; ctx.fill();
  ctx.beginPath(); ctx.arc(6, -7, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(60,0,0,0.7)'; ctx.fill();

  ctx.restore();
}

function drawRudraksha(ctx, w, h, phase, accent) {
  const a = hexRgb(accent);
  const cx = w / 2, cy = h / 2 - 10;
  const r = Math.min(w, h) * 0.3;
  if (r < 10) return;

  ctx.save(); ctx.translate(cx, cy); ctx.rotate(phase * 0.18);

  for (let i = 0; i < 22; i++) {
    const ang = (i / 22) * Math.PI * 2;
    const bx = Math.cos(ang) * r, by = Math.sin(ang) * r;

    ctx.beginPath(); ctx.arc(bx, by, 7, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(61,26,26,0.95)'; ctx.fill();
    ctx.strokeStyle = `rgba(${a},0.5)`; ctx.lineWidth = 1.5; ctx.stroke();

    // Gold caps
    ctx.beginPath(); ctx.arc(bx + Math.cos(ang) * 5, by + Math.sin(ang) * 5, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${a},0.8)`; ctx.fill();
  }
  ctx.restore();

  // Lingam pendant
  ctx.save(); ctx.translate(cx, cy + r * 0.65);
  ctx.beginPath(); ctx.ellipse(0, 0, 13, 22, 0, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${a},0.9)`; ctx.fill();
  ctx.beginPath(); ctx.arc(0, -22, 13, Math.PI, 0);
  ctx.fillStyle = `rgba(${a},0.7)`; ctx.fill();
  ctx.restore();
}

function drawRing(ctx, w, h, phase, accent) {
  const a = hexRgb(accent);
  const cx = w / 2, cy = h / 2;
  const r = Math.min(w, h) * 0.26;
  if (r < 10) return;

  ctx.save(); ctx.translate(cx, cy); ctx.rotate(phase * 0.22 + Math.PI / 5);

  // Ring band with glow layers
  for (let t = 3; t >= 0; t--) {
    ctx.beginPath(); ctx.arc(0, 0, r + t * 4, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${a},${0.9 - t * 0.22})`; ctx.lineWidth = t === 0 ? 14 : t === 1 ? 9 : 5; ctx.stroke();
  }

  // Coin setting top
  ctx.beginPath(); ctx.arc(0, -r, 22, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${a},0.95)`; ctx.fill();
  ctx.beginPath(); ctx.arc(0, -r, 18, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1; ctx.stroke();

  // Sun rays on coin
  for (let i = 0; i < 8; i++) {
    const ang = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(ang) * 5, Math.sin(ang) * 5 - r);
    ctx.lineTo(Math.cos(ang) * 15, Math.sin(ang) * 15 - r);
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();
  }

  ctx.restore();

  // Radial glow
  const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.6);
  grd.addColorStop(0, `rgba(${a},0.06)`); grd.addColorStop(1, 'transparent');
  ctx.fillStyle = grd; ctx.fillRect(0, 0, w, h);
}

function drawEarchain(ctx, w, h, phase, accent) {
  const a = hexRgb(accent);
  const cx = w / 2, cy = h * 0.2;
  const side = Math.min(w, h) * 0.26;
  if (side < 10) return;

  // Headgear arc
  ctx.save(); ctx.translate(cx, cy);
  ctx.beginPath(); ctx.arc(0, 0, side * 1.15, Math.PI, 0, false);
  ctx.strokeStyle = `rgba(${a},0.75)`; ctx.lineWidth = 5; ctx.stroke();

  for (let i = 0; i <= 6; i++) {
    const ang = Math.PI + (i / 6) * Math.PI;
    ctx.beginPath(); ctx.arc(Math.cos(ang) * side * 1.15, Math.sin(ang) * side * 1.15, i === 3 ? 7 : 4, 0, Math.PI * 2);
    ctx.fillStyle = i === 3 ? `rgba(${a},1)` : `rgba(${a},0.6)`; ctx.fill();
  }
  ctx.restore();

  // Left + right ear chains
  for (const [xOffset, phaseMod] of [[-side * 0.75, 0], [side * 0.75, Math.PI]]) {
    const ex = cx + xOffset, ey = cy + side * 0.35;
    ctx.beginPath(); ctx.arc(ex, ey, 10, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${a},0.8)`; ctx.lineWidth = 3; ctx.stroke();

    for (let i = 0; i < 8; i++) {
      const y = ey + 14 + i * 22 + Math.sin(phase * 1.5 + i + phaseMod) * 5;
      ctx.beginPath(); ctx.ellipse(ex, y, 5, 7, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${a},${0.75 - i * 0.06})`; ctx.lineWidth = 2; ctx.stroke();
      if (i < 7) {
        ctx.beginPath(); ctx.moveTo(ex, y + 7); ctx.lineTo(ex, y + 15);
        ctx.strokeStyle = `rgba(${a},0.3)`; ctx.lineWidth = 1; ctx.stroke();
      }
    }

    // Bottom gem
    const gemY = ey + 14 + 8 * 22 + Math.sin(phase * 1.5 + phaseMod) * 5;
    ctx.beginPath(); ctx.arc(ex, gemY, 8, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${a},0.9)`; ctx.fill();
  }

  // Stage sparkles
  for (let i = 0; i < 14; i++) {
    const sp = phase * 2.8 + i * 0.45;
    const sx = cx + Math.cos(sp) * side * 1.8;
    const sy = cy + Math.sin(sp * 0.7) * h * 0.45;
    ctx.beginPath(); ctx.arc(sx, sy, Math.abs(Math.sin(sp)) * 2.5 + 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${a},${0.15 + Math.abs(Math.sin(sp)) * 0.45})`; ctx.fill();
  }
}

const DRAW_FN = {
  kanthi:   drawKanthi,
  armlet:   drawArmlet,
  rudraksha: drawRudraksha,
  ring:     drawRing,
  earchain: drawEarchain,
};

// ── COMPONENT ───────────────────────────────────────────────
export default function JewelCanvas({ modelType, accent = '#D4AF37', style = {} }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w === 0 || h === 0) return; // skip if not yet laid out
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset before re-scaling
      ctx.scale(dpr, dpr);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const drawFn = DRAW_FN[modelType];

    const loop = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
      phaseRef.current += 0.007;
      if (drawFn) drawFn(ctx, w, h, phaseRef.current, accent);
      animRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      ro.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [modelType, accent]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  );
}
