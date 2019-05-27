import SupleRepository from './suple.repository';
import MetaRepository from './meta.repository';
import UserRepository from './user.repository';

export const REPOSITORIES = {
  SUPLE: 'suple',
  META: 'meta',
  USER: 'user'
};

const repositoriesMap = {
  [REPOSITORIES.SUPLE]: SupleRepository,
  [REPOSITORIES.META]: MetaRepository,
  [REPOSITORIES.USER]: UserRepository
};

export default name => repositoriesMap[name];
