const timerId = setTimeout (
    () => console.log('You will not see this one!'),
    3
);

//setInmediate

clearTimeout(timerId);
