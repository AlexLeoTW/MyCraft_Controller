/*jsversion: 6, node: true */

function parseLog (line) {
    var data = line.trim().split("]:"),
        meta = {
            // datetime: '00:01:04',
            // level:    'Server thread/INFO',
            // text:     '[Multiverse-Core] 4 - World(s) loaded.'
        };

    meta.text = data[1].trim();
    data = data[0].split(' ');

    meta.datetime = data.shift().replace(/[\[|\]]/g, '');
    meta.level = data.join().replace(/[\[|\]]/g, '');

    return meta;
}

module.exports.parseLog = parseLog;
