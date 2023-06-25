export function limitTitleWords(title: string, limit: number) {
  const words = title.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  } else {
    return title;
  }
}
