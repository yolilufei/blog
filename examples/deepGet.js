const deepGet = (obj, methodChaining, defaultValue) => {
    // const proxyObj = new Proxy(obj, {
    //     get(target, property, receiver) {
    //         if (target[property]) {
    //             return Reflect.get(receiver, property);
    //         } else {
    //             return defaultValue;
    //         }
    //     }
    // })
    const chainingList = methodChaining.split('.');
    let deepObj = {...obj};
    chainingList.forEach(property => {
        if (typeof deepObj === 'object' && deepObj !== null) {
            deepObj = deepObj[property];
        } else {
            deepObj = defaultValue;
        }
    });
    return deepObj;
}

const v = deepGet({a: {b: { c: 1}}}, 'a.b.c.d', 'none');
console.log(v);