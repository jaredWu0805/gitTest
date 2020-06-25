function search(arr, target) {
    if (arr.length == 0) return -1;
    return search_index(arr, 0, arr.length - 1, target);
}

function search_index(arr, lo, hi, tar) {

    if (lo > hi) return -1;

    var i = lo + Math.floor((hi - lo) / 2);
    console.log('lo: '+ lo + ' hi: ' + hi + ' i: ' + i);
    if (arr[i] == tar) return i;
    if (arr[i] > tar) return search_index(arr, lo, i - 1, tar);
    if (arr[i] < tar) return search_index(arr, i + 1, hi, tar);
}

console.log(search([1, 3, 10, 14, 39], 299));
