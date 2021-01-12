import { createSelector } from 'reselect';

const userSelector = state => state.user;

const currentUserSelector = createSelector(
    [userSelector],
    (user) => (user.currentUser)
);

const isFetchingSelector = createSelector(
    [userSelector],
    (user) => user.isFetching
)

const errorSelector = createSelector(
    [userSelector],
    (user) => user.errMsg
)

export {
    currentUserSelector,
    isFetchingSelector,
    errorSelector
}