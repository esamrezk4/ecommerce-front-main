import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";

const Item = ({ btnText, actionType, id, title, price, img }) => {
  const { item } = styles;
  console.log("id", id);
  const dispatch = useDispatch();
  const actionHandeler = () => {
    if (actionType === "add") {
      dispatch({ type: "cart/addToCart", payload: id });
    }
  };

  return (
    <div className={item}>
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        onClick={actionHandeler}
      >
        {btnText || "Add to card"}
      </Button>
    </div>
  );
};

export default Item;
