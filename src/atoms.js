import { atom } from "recoil"

export const notificationValue = atom({
    key: 'notificationValue',
    default: 0,
});

export const notificationUsers = atom ({
    key: 'notificationUsers',
    default: {0: false, 1: false, 2: false}
})