import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter/Counter';
import useStyles from './products-style';
const Products = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('details');
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.texto}>PRODUCTOS</Typography>
      <Counter />
      <Button onClick={onClickButton} className={classes.boton}>Ir a Detalles</Button>
    </div>
  );
};

export default Products;
