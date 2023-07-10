export default function rgbToHex(color: string): string {
  const colorArr = color.slice(4, color.length - 1).split(", ");
  const result: string[] = colorArr.map((el) => {
    const num = Number(el).toString(16);
    if (num.length === 1) {
      result.push("0" + num);
    } else {
      result.push(num);
    }
  });
  return "#" + result.join("");
}
