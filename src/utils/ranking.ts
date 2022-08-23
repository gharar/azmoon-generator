export function normalizeStudentsData(rawData: StudentData[]): Array<Array<StudentData>> {
  let allData: Array<Array<StudentData>> = [];
  rawData.forEach(s => {
    const index: number = s.rank - 1;
    if (allData[index]) {
      allData[index].push(s);
    } else {
      allData[index] = [s];
    }
  });
  let i: number = -1;
  let remaining: number = 10;
  let finalData: Array<Array<StudentData>> = [];
  while (remaining > 0) {
    i++;
    if (!allData[i]) {
      continue;
    }
    const currentStage: Data = allData[i];
    if (currentStage.length <= remaining) {
      remaining -= currentStage.length;
      finalData.push(currentStage);
    } else if (finalData.length < 3) {
      finalData.push(currentStage.slice(0, remaining));
      remaining = 0;
    } else {
      break;
    }
  }
  return finalData;
}
