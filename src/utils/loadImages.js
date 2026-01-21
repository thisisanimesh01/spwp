export function loadImages(folderName) {
  return [
    new URL(`./${folderName}/img1.webp`, import.meta.url).href,
    new URL(`./${folderName}/img2.webp`, import.meta.url).href,
    new URL(`./${folderName}/img3.webp`, import.meta.url).href,
    new URL(`./${folderName}/img4.webp`, import.meta.url).href,
  ];
}
