import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterItems } from "../state/itemSlice";
import { useParams } from "react-router-dom";
import { GridList } from "../components/Layout";
import { Item } from "../components/ecom-ui";

const Items = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { loading, error, records } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(filterItems(prefix));
    return () => dispatch({ type: "items/cleanRecords" });
  }, [dispatch, prefix]);

  return (
    <div>
      <GridList
        items={records}
        loading={loading}
        error={error}
      >
        <Item actionType="add" />
      </GridList>
    </div>
  );
};

export default Items;
