/**
 * Generate OG images with pixel font style
 * Use SVG to generate cool pixel-style images on server side
 */

export async function generateOGImage({
  title,
  description = '',
  background = '#0a0a0a',
  textColor = '#00ff00',
  particleColor = '#00ff00',
  width = 1200,
  height = 630,
  particleCount = 50
}) {
  // Direct SVG approach, emphasizing pixel font style
  return generatePixelSVGImage({
    title, description, background, textColor, particleColor, width, height, particleCount
  });
}

function generatePixelSVGImage({
  title,
  description,
  background,
  textColor,
  particleColor,
  width,
  height,
  particleCount = 50
}) {
  // Generate pixel-style particles (small squares)
  const pixels = [];
  for (let i = 0; i < particleCount; i++) {
    const pixelSize = Math.floor(Math.random() * 4) + 2;
    pixels.push(`
      <rect
        x="${Math.floor(Math.random() * (width - pixelSize))}"
        y="${Math.floor(Math.random() * (height - pixelSize))}"
        width="${pixelSize}"
        height="${pixelSize}"
        fill="${particleColor}"
        opacity="${Math.random() * 0.6 + 0.2}"
      />
    `);
  }

  // Generate pixel-style grid background
  const gridSize = 20;
  const gridLines = [];
  for (let x = 0; x < width; x += gridSize) {
    gridLines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${textColor}" stroke-width="1" opacity="0.05"/>`);
  }
  for (let y = 0; y < height; y += gridSize) {
    gridLines.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${textColor}" stroke-width="1" opacity="0.05"/>`);
  }

  // Calculate font size
  const titleFontSize = Math.floor(width / 12);
  const descFontSize = Math.floor(titleFontSize / 2.5);
  const titleY = height / 2 - (description ? 40 : 0);

  // Create pixel text (use monospace font to simulate pixel font)
  const titleText = title.toUpperCase(); // Uppercase for more pixelated look
  const descText = description.toUpperCase();

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Pixel font style -->
        <style>
          .pixel-font {
            font-family: 'Courier New', 'Monaco', 'Menlo', 'Consolas', monospace;
            font-weight: bold;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            text-anchor: middle;
          }
          .pixel-title {
            font-size: ${titleFontSize}px;
            fill: ${textColor};
            filter: drop-shadow(3px 3px 0 rgba(0,0,0,0.8)) drop-shadow(6px 6px 0 rgba(0,0,0,0.5));
          }
          .pixel-desc {
            font-size: ${descFontSize}px;
            fill: ${textColor};
            opacity: 0.9;
            filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.8));
          }
        </style>

        <!-- Pixel glow effect -->
        <filter id="pixelGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <!-- Scanline effect -->
        <linearGradient id="scanline" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${textColor};stop-opacity:0.1" />
          <stop offset="50%" style="stop-color:${textColor};stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:${textColor};stop-opacity:0.1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="${background}"/>

      <!-- Pixel grid background -->
      ${gridLines.join('')}

      <!-- Pixel decorative squares -->
      ${pixels.join('')}

      <!-- Pixel border -->
      <rect x="10" y="10" width="${width - 20}" height="${height - 20}"
            fill="none" stroke="${textColor}" stroke-width="4" filter="url(#pixelGlow)"/>

      <!-- Inner border -->
      <rect x="20" y="20" width="${width - 40}" height="${height - 40}"
            fill="none" stroke="${textColor}" stroke-width="2" opacity="0.5"/>

      <!-- Scanline effect -->
      <rect x="10" y="10" width="${width - 20}" height="${height - 20}"
            fill="url(#scanline)" opacity="0.1"/>

      <!-- Pixel decorative corners -->
      <g fill="${textColor}">
        <!-- Top left corner -->
        <rect x="10" y="10" width="20" height="4"/>
        <rect x="10" y="10" width="4" height="20"/>
        <rect x="30" y="10" width="4" height="10"/>
        <rect x="10" y="30" width="10" height="4"/>

        <!-- Top right corner -->
        <rect x="${width - 30}" y="10" width="20" height="4"/>
        <rect x="${width - 14}" y="10" width="4" height="20"/>
        <rect x="${width - 34}" y="10" width="4" height="10"/>
        <rect x="${width - 20}" y="30" width="10" height="4"/>

        <!-- Bottom left corner -->
        <rect x="10" y="${height - 14}" width="20" height="4"/>
        <rect x="10" y="${height - 30}" width="4" height="20"/>
        <rect x="30" y="${height - 20}" width="4" height="10"/>
        <rect x="10" y="${height - 34}" width="10" height="4"/>

        <!-- Bottom right corner -->
        <rect x="${width - 30}" y="${height - 14}" width="20" height="4"/>
        <rect x="${width - 14}" y="${height - 30}" width="4" height="20"/>
        <rect x="${width - 34}" y="${height - 20}" width="4" height="10"/>
        <rect x="${width - 20}" y="${height - 34}" width="10" height="4"/>
      </g>

      <!-- Title -->
      <text x="${width / 2}" y="${titleY}" class="pixel-font pixel-title">
        ${titleText}
      </text>

      <!-- Description -->
      ${description ? `
        <text x="${width / 2}" y="${titleY + titleFontSize + 20}" class="pixel-font pixel-desc">
          ${descText}
        </text>
      ` : ''}

      <!-- Pixel decorative text "PIXEL" -->
      <text x="50" y="${height - 30}" class="pixel-font" style="font-size: 20px; fill: ${textColor}; opacity: 0.3;">
        PIXEL
      </text>
      <text x="${width - 100}" y="40" class="pixel-font" style="font-size: 20px; fill: ${textColor}; opacity: 0.3;">
        THEME
      </text>

      <!-- Timestamp pixel style -->
      <text x="${width - 200}" y="${height - 20}" class="pixel-font" style="font-size: 12px; fill: ${textColor}; opacity: 0.5;">
        ${new Date().getFullYear()}
      </text>
    </svg>
  `;

  return Buffer.from(svg);
}

/**
 * Generate OG image in data URL format
 */
export async function generateOGImageDataUrl(options) {
  const buffer = await generateOGImage(options);
  const base64 = buffer.toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}