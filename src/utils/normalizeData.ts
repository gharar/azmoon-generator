import { Data, StudentData } from './types'

export function normalizeData(rawData: StudentData[]) {
  const finalData = makeMatrix(rawData.slice(0,10))

  const firstRanks = finalData[0]
  const secondRanks = (finalData.slice(1).find(row => !!row)) || []
  const thirdRanks = (secondRanks.length > 0 && finalData.slice(finalData.indexOf(secondRanks) + 1).find(row => !!row)) || []
  const otherRanks = (thirdRanks?.length > 0) ?
    finalData.slice(finalData.indexOf(thirdRanks) + 1).reduce((acc: Data[], currentRow: Data) => {
        if (!!currentRow && (!rawData[10] || (currentRow[0]?.rank !== rawData[10]?.rank))) {
          acc.push(currentRow)
        }
        return acc
      }, []).flat() || []
    : []

  return { firstRanks, secondRanks, thirdRanks, otherRanks }
}

export function makeMatrix(rawData: StudentData[]): Array<Array<StudentData>> {
  let data: Array<Array<StudentData>> = [];
  rawData.forEach(s => {
    const index = s.rank - 1;
    if (data[index]) {
      data[index].push(s);
    } else {
      data[index] = [s];
    }
  });
  return data;
}
