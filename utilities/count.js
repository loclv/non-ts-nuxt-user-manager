export function countGender(arr, targetType) {
  let count = 0

  for (const item of arr) {
    if (item.gender === targetType) {
      count++
    }
  }
  return count
}
