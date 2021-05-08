/**
 * 将byte单位转换为合理单位
 * @param val byte数
 * @returns {string} 数+单位
 */
export function formatCalculate(val) {
  let count = 0
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (val < 1024) {
      val = Math.round(val)
      if (count === 0) {
        return val + 'byte'
      } else if (count === 1) {
        return val + 'KB'
      } else if (count === 2) {
        return val + 'MB'
      } else if (count === 3) {
        return val + 'GB'
      } else {
        return val + 'TB'
      }
    }
    val /= 1024
    count++
  }
}



