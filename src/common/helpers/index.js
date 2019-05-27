export const getProp = (object, path, defaultVal) => {
  const _path = Array.isArray(path)
    ? path
    : path.split('.').filter(i => i.length);

  if (!_path.length) {
    return object === undefined ? defaultVal : object;
  }

  return getProp(object[_path.shift()], _path, defaultVal);
};

// Adds namespace to each module
export const namespaced = (modules) => Object.entries(modules)
  .reduce((acc, [key, value]) => {
    acc[key] = Object.assign({}, value, {namespaced: true});
    return acc;
  }, {});

// Proxies namespace object to create module/operation at [[Get]].
export const getVuex = (namespace, module) => new Proxy(namespace, {
  get(target, key) {
    const vuexModule = module || target.module;
    const nextTarget = target[key];

    return nextTarget.constructor === Object
      ? getVuex(nextTarget, vuexModule)
      : vuexModule + '/' + key;
  }
});

export const aggregateEntities = (arr) => arr.reduce((acc, next) => {
  acc[next.slice(next.lastIndexOf('/') + 1)] = next;
  return acc;
}, {});

// Agregates names of operations from mapState
export const aggregateEntitiesForState = (arr) => arr.reduce((acc, next) => {
  const name = next.slice(next.lastIndexOf('.') + 1);
  acc[name] = (state) => getProp(state, next);
  return acc;
}, {});


export const wrapVuexFn = (fn, mapper) => (array) => fn(mapper(array));
