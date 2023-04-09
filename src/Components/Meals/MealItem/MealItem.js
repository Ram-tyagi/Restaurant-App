
import classes from './MealItem.module.css'
const MealItem = (props) => {
    const price=`$${props.price.toFixed(2)}`
  return (
    <li classes={classes.meal}>
        <div>
            <h3>
                {props.name}
            </h3>
            <div classes={classes.description}>{props.description}</div>
            <div classes={classes.price}>
                {price}
            </div>
        </div>
        <div>

        </div>
    </li>
  )
}

export default MealItem