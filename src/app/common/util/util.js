export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFileExtension(filename) {
  // accommodate file name without extension
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}
