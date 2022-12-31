import { Button } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const Item = ({ btnText, actionType, id, title, price, img }) => {
  const [disabled, setDisabled] = useState(false);
  const [btnClicked, setBtnClicked] = useState(0);

  const { item } = styles;
  const dispatch = useDispatch();

  useEffect(() => {
    if (btnClicked === 0) return;
    setDisabled(true);
    const debounce = setTimeout(() => {
      setDisabled(false);
    }, 400);

    return () => {
      clearTimeout(debounce);
    };
  }, [btnClicked]);

  const actionHandeler = () => {
    if (actionType === "add") {
      dispatch({ type: "cart/addToCart", payload: id });
      setBtnClicked((prev) => prev + 1);
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
        disabled={disabled}
      >
        {disabled ? (
          <Fragment>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Fragment>
        ) : (
          btnText || "Add to card"
        )}
      </Button>
    </div>
  );
};

export default Item;
