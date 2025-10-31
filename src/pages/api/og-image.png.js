import { generateOGImage } from '../../scripts/generate-image.js';

export async function GET({ request }) {
  const url = new URL(request.url);
  const title = url.searchParams.get('title') || 'Pixel Astro Theme';
  const description = url.searchParams.get('description') || '';
  const textColor = url.searchParams.get('textColor') || '#00ff00';
  const particleColor = url.searchParams.get('particleColor') || '#00ff00';
  const background = url.searchParams.get('background') || '#0a0a0a';

  try {
    const imageBuffer = await generateOGImage({
      title,
      description,
      textColor,
      particleColor,
      background
    });

    return new Response(imageBuffer, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}