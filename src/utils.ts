export function SlugTransform(str:string) {
  return str.trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, '')                 // no accent
    .replace(/[^a-z0-9\s]/gi, '')                                     // no special except space
    .replaceAll(' ','-') 
    .toLowerCase()
}