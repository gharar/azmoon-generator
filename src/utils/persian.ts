const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export function convertEnglishNumberToPersian(input: string | number) {
  return `${input}`.replace(/[0-9]/g,(char: string) => persianNumbers[Number(char)]);
}
