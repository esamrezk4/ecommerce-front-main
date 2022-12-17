import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Category } from "../components/ecom-ui";
import { getCategories } from "../state/categorySlice";
import { GridList } from "../components/Layout";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <GridList items={records}>
        <Category />
      </GridList>
    </div>
  );
};

export default Categories;
