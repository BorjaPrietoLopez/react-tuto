import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import useStyles from '../counter/counter-style';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrementCount = () => {
        setCount(count + 1);
    };
    const onDicrementCount = () => {
        setCount(count - 1);
    };
    const classes = useStyles();
    return (
        <div>
            <Typography>{count}</Typography>
            <div className={classes.botonmas}>
                <Button onClick={onIncrementCount} className={classes.texto}>+</Button>
            </div>
            <div className={classes.botonmenos}>
                <Button onClick={onDicrementCount} className={classes.texto}>-</Button>
            </div>
        </div>
    );
};
export default Counter;