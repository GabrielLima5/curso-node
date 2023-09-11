const path = require('path')

console.log(path.basename('basename', '../Event/event.js'))
console.log(path.normalize('normalize', 'c:\\temp/dir//subdir/dir/..'))
console.log('join path:', path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..'))
console.log('resolve', path.resolve('path2.js'))
console.log('extension', path.extname('path2.js'))