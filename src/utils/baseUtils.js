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
        return val + 'B'
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

/**
 * 用途：js中字符串超长作固定长度加省略号（...）处理
 * 参数说明：
 * str:需要进行处理的字符串，可含汉字
 * len:需要显示多少个汉字，两个英文字母相当于一个汉字。
 */
export function beautySub(str, len) {
  let reg = /[\u4e00-\u9fa5]/g    // 匹配中文
  let slice = str.substring(0, len)
  let chineseCharNum = (~~(slice.match(reg) && slice.match(reg).length))
  let realen = slice.length * 2 - chineseCharNum
  return str.substr(0, realen) + (realen < str.length ? "..." : "")
}

/**
 * 通过扩展名获取对应的文件图片：传入null时返回文件夹图片
 * @param extension 扩展名
 */
export function getFileImage(extension) {
  switch (extension) {
    case null:
      return require('@/assets/images/folder-img.png')
    case '.mp3':
      return require('@/assets/images/music-img.png')
    default :
      return require('@/assets/images/orther-img.png')
  }
}
