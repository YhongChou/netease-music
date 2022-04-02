import React, { useState, useEffect } from 'react';


const App = () => {
    const [query, setQuery] = useState('react');
    const [data, setData] = useState({})

    // 1. 如果我们忘记去更新使用这些函数（很可能通过其他函数调用）的effects的依赖，我们的effects就不会同步props和state带来的变更
    // Imagine this function is also long
    function getFetchUrl() {
      return 'https://hn.algolia.com/api/v1/search?query=' + query;
    }

    // Imagine this function is also long
    async function fetchData() {
      const result = await axios(getFetchUrl());
      setData(result.data);
    }

    useEffect(() => {
      fetchData();
    }, []);

    // 2. 如果某些函数仅在effect中调用，你可以把它们的定义移到effect中
    useEffect(() => {
        // We moved these functions inside!
        function getFetchUrl() {
          return 'https://hn.algolia.com/api/v1/search?query=react';
        }
        async function fetchData() {
          const result = await axios(getFetchUrl());
          setData(result.data);
        }

        fetchData();
      }, []); // ✅ Deps are OK
}

export default App