import { useEffect, useState } from "react";

const useCustomFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could'nt connect to DB server");
        }
        return res?.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setErrMsg(null);
      })
      .catch((err) => {
        setErrMsg(err.message);
        setLoading(false);
        setData(null);
      });
  }, [url]);
  return { data, loading, errMsg };
};
export default useCustomFetch;
