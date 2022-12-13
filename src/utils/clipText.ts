export default function clipText(text: string, length?: number) {
  if (length && text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
}
