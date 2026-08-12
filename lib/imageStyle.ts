/** Catalogue shots are on pure white; lifestyle (-2) keep natural blend. */
export function isStudioProductImage(src: string) {
  return !src.includes("-2.");
}
