export function limitTitleLength(title: string, limit: number) {
  if (title.length > limit) {
    return title.slice(0, limit) + '...';
  } else {
    const words = title.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return title;
    }
  }
}
