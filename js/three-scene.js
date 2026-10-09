/**
 * ====================================================================
 * 3D DEVELOPER ENVIRONMENT - THREE.JS
 * Refined, Professional, Subtle & Lightweight 3D Tech Core
 * Perfectly tuned for a high-end software engineer portfolio
 * ====================================================================
 */

(function () {
  'use strict';

  function isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  const container = document.getElementById('hero-3d-canvas');
  if (!container || !isWebGLAvailable() || typeof THREE === 'undefined') {
    const fallback = document.getElementById('hero-fallback-card');
    if (fallback) fallback.style.display = 'block';
    if (container) container.style.display = 'none';
    return;
  }

  let scene, camera, renderer;
  let coreGroup, techRings = [], particleSystem;
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let clock = new THREE.Clock();
  let animId = null;

  function init() {
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 380;

    // 1. Scene
    scene = new THREE.Scene();

    // 2. Camera
    camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.4);

    // 3. High Performance Renderer
    renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true, 
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Subtle, Professional Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 3.2, 16);
    cyanLight.position.set(3.5, 3.5, 3.5);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 2.6, 16);
    purpleLight.position.set(-3.5, -2.5, 2.5);
    scene.add(purpleLight);

    // 5. Main 3D Core Group
    coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Central Multifaceted Geometric Core (Sleek, Solid with Edges)
    const polyGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const polyMat = new THREE.MeshStandardMaterial({
      color: 0x090f1d,
      roughness: 0.25,
      metalness: 0.85,
      flatShading: true,
      transparent: true,
      opacity: 0.88
    });
    const polyMesh = new THREE.Mesh(polyGeo, polyMat);
    coreGroup.add(polyMesh);

    // Subtle Glowing Edge Wireframe
    const edgesGeo = new THREE.EdgesGeometry(polyGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.65
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    coreGroup.add(edgesMesh);

    // Inner Glowing Core Sphere (Breathes gently)
    const innerGeo = new THREE.SphereGeometry(0.72, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.25,
      wireframe: true
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Orbiting Tech Ring 1 (Refined, Thin Cyan Ring)
    const ring1Geo = new THREE.TorusGeometry(1.85, 0.016, 16, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({ 
      color: 0x00f2fe, 
      transparent: true, 
      opacity: 0.65 
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);
    techRings.push({ mesh: ring1, rotX: 0.002, rotY: 0.005 });

    // Orbiting Tech Ring 2 (Refined, Thin Purple Ring)
    const ring2Geo = new THREE.TorusGeometry(2.05, 0.014, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({ 
      color: 0x8b5cf6, 
      transparent: true, 
      opacity: 0.55 
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);
    techRings.push({ mesh: ring2, rotX: -0.003, rotY: 0.004 });

    // Orbiting Satellite Nodes (Python, Django, Database)
    const satellites = [
      { color: 0x00f2fe, size: 0.12, dist: 1.85, speed: 0.45, angle: 0 },
      { color: 0x10b981, size: 0.11, dist: 2.05, speed: 0.35, angle: 2.1 },
      { color: 0x8b5cf6, size: 0.12, dist: 1.85, speed: 0.40, angle: 4.2 }
    ];

    satellites.forEach(sat => {
      const satGeo = new THREE.SphereGeometry(sat.size, 16, 16);
      const satMat = new THREE.MeshStandardMaterial({ 
        color: sat.color, 
        emissive: sat.color, 
        emissiveIntensity: 0.4,
        roughness: 0.3 
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      coreGroup.add(satMesh);
      sat.mesh = satMesh;
    });

    // Gentle Ambient Particle Stardust (Subtle, not noisy)
    const pCount = 75;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);

    const cyan = new THREE.Color(0x00f2fe);
    const purple = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < pCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2.2 + Math.random() * 0.8;

      pPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = radius * Math.cos(phi);

      const col = Math.random() > 0.5 ? cyan : purple;
      pColors[i * 3] = col.r;
      pColors[i * 3 + 1] = col.g;
      pColors[i * 3 + 2] = col.b;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(pGeo, pMat);
    coreGroup.add(particleSystem);

    // Smooth, Contained Mouse Tracking on the Card
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    });

    container.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    window.addEventListener('resize', onResize);

    // Check user reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      animate();
    } else {
      render();
    }

    function animate() {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth, gentle parallax lerp (calm and comfortable)
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      if (coreGroup) {
        coreGroup.rotation.y = elapsed * 0.12 + targetX * 0.15;
        coreGroup.rotation.x = Math.sin(elapsed * 0.25) * 0.06 + targetY * 0.12;
      }

      // Subtle pulse on inner core
      if (innerMesh) {
        const pulse = 1 + Math.sin(elapsed * 1.5) * 0.05;
        innerMesh.scale.set(pulse, pulse, pulse);
      }

      // Calm orbital rotation
      techRings.forEach(r => {
        r.mesh.rotation.x += r.rotX;
        r.mesh.rotation.y += r.rotY;
      });

      // Smooth satellite progression
      satellites.forEach(sat => {
        const curAngle = sat.angle + elapsed * sat.speed;
        sat.mesh.position.x = Math.cos(curAngle) * sat.dist;
        sat.mesh.position.z = Math.sin(curAngle) * sat.dist;
        sat.mesh.position.y = Math.sin(curAngle * 1.5) * 0.35;
      });

      // Gentle particle drift
      if (particleSystem) {
        particleSystem.rotation.y = elapsed * 0.04;
      }

      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    function onResize() {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        render();
      }
    }

    window.resizeHero3D = onResize;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
