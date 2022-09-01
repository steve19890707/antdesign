import axios from "axios";
import noop from "lodash";
import { getData } from "./functions";
const fetchData = (
  res = {},
  setData = noop
) => {
  const status = getData(res, ['status']);
  const statusText = getData(res, ['statusText']);
  if (status !== 200) {
    console.error(statusText)
    return;
  } else {
    const data = getData(res, ['data'], {});
    setData({
      isLoading: false,
      data: data
    });
  }
}

export const getSingleProduct = ({
  setData = noop
}) => {
  return axios.get('https://dummyjson.com/products/1').then(res => fetchData(
    res,
    setData
  )).catch(error => console.error(error));
}