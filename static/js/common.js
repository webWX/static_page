
/**
 * 小于10的补0
 * @method add0
 * @param { Number } num 数字
 * @return { String } 改后的数字
 **/

function add0(num) {
    return num < 10 ? '0' + num : num;
}
