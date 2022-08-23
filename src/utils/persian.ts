const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const englishRegexNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g]

export function convertEnglishNumberToPersian(input: string | number) : string {
  if (typeof input !== 'string' && typeof input !== 'number') {
    return input
  }
  let str = String(input)
  for (let i = 0; i < 10; i++) {
    str = str.replace(englishRegexNumbers[i], persianNumbers[i])
  }
  return str
}
