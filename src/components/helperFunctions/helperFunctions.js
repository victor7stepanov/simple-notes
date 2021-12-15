export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
    const onlyEngAndNumRegExp = /^[A-Za-z0-9]+$/;
    const isOnlyEngAndNum = onlyEngAndNumRegExp.test(password);
    return (password.length) >= 8 && (password.indexOf(' ') === -1) && isOnlyEngAndNum;
}
