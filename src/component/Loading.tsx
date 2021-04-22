import './styles.scss';
import { useSelector, shallowEqual } from "react-redux";
function Loading() {
    const loading: boolean = useSelector(
        (state: ArticleState) => state.loading,
        shallowEqual
      )
      console.log("dad", loading);
  return (
    <div className="Loading">
    </div >
  );
}

export default Loading;
