var spawn = require('child_process').spawn;

module.exports = exports = function (cmd) {
    cmd = cmd.trim();
    cmd.replace(/%s+/g, ' ');

    var components = cmd.split(' ');
    var component0 = components[0];
    var params = components.slice(1);

    spawn(component0, params, {
        stdio: ['pipe', process.stdout, process.stderr]
    });
}