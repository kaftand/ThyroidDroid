export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectMode = (mode) => {
    console.log("You clicked on mode: ", mode);
    return {
        type: 'MODE_SELECTED',
        payload: mode
    }
};
