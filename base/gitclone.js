var spawn = require('child_process').spawn;

module.exports = exports = function(repositoryURL, workTreeName) {
    var params = ['clone', repositoryURL];
    if (workTreeName) {
        params.push(workTreeName);
    }

    var options = {
        stdio: ['pipe', process.stdout, process.stderr]
    }

    spawn('git', params, options);
}
