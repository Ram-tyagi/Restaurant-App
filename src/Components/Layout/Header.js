import {Fragment} from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <Fragment>
      <Header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton/>
      </Header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table fulll of delecious food"/>
      </div>
    </Fragment>
  )
}

export default Header