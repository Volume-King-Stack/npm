function genBugArmy(range) {
    if (typeof range !== 'number' || range < 0) return;
    const transBug = (bh) => {let cp = parseInt(bh, 16);if (cp > 0x10000) {cp -= 0x10000;let h = String.fromCharCode((cp >> 10) + 0xD800), l = String.fromCharCode((cp & 0x3FF) + 0xDC00);return h + l;} else {return String.fromCharCode(cp)}}, 
        bug = '1f99f,1fab0,1fab3,1fab2,1f982,1f41c,1fab1,1f41b,1f40c,1f41e,1f997,1f577'.split(',').map(b => transBug(b)), 
        index = () => Math.floor(Math.random() * bug.length);
    let str = '', i = 0;
    while (i < range) {i++;str = str + bug[index()];}
    return str;
}

module.exports.genBugArmy = genBugArmy;