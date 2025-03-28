const images = import.meta.glob('/assets/**/*.(png|jpg|svg|gif)', { eager: true });

export const getImageUrl = (path) => {
  const imagePath = `/assets/${path}`;
  const image = images[imagePath];
  if (!image) {
    console.warn(`Image not found: ${imagePath}`);
    return '';
  }
  return image.default;
};