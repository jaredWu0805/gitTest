function reverse(str) {
    var reverseStr = [];
    for (var i = str.length; i > 0; i--) {
        reverseStr.push(str[i-1]);
    }
    var s = reverseStr.join('');
    console.log(s);
}

reverse('1,2,3');
