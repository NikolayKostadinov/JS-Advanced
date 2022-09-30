function validator(reques) {
    const method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[\w.]+$/gm;
    let messageRegex = /^[^<>\\&'"]*$/;

    if (!(reques.method && method.includes(reques.method))) {
        throw Error('Invalid request header: Invalid Method');
    }
    if (!(reques.uri && (reques.uri === '*' || uriRegex.test(reques.uri)))) {
        throw Error('Invalid request header: Invalid URI')
    }
    if (!(reques.version && versions.includes(reques.version))) {
        throw Error('Invalid request header: Invalid Version');
    }
    if (!(reques.hasOwnProperty('message') && (reques.message === '' || messageRegex.test(reques.message)))) {
        throw Error('Invalid request header: Invalid Message')
    }

    return reques
}

console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

validator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});