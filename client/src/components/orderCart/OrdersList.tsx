import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Grid, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import { countQuantity, countTotalPrice } from '../../util/cart'

const useStyles1 = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      minWidth: '176px',
      maxWidth: '232px',
      minHeight: '45px',
      maxWeight: '60px',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  })
)

const CustomerCart = () => {

  const classes = useStyles()
  /*const cart = useSelector((state: AppState) => state.user.cart)*/


  return(
    <div className="customerCart">
      <ul className="Orders">Your Orders
          <li>{/*cart.map(product =>{
            product.name, product.Id, product.price 
          })*/}</li>
      </ul>
    </div>
  )


}

