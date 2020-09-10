function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function tryTask(cb) {
	console.log('test');
	cb();
}

exports.default = defaultTask
exports.tryTask = tryTask