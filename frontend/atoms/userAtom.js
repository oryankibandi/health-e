import { atom } from 'recoil'

const userIdAtom = atom({
  key: 'userId',
  default: null,
})

const userAccessTokenAtom = atom({
  key: 'acessToken',
  default: null,
})

export { userIdAtom, userAccessTokenAtom }
