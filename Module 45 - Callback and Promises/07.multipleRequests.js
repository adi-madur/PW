async function getCombinedData() {
  const [datal, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
      response.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
      response.json()
    ),
  ]);
  const combinedData = {
    todo: data1,
    post: data2,
  };
  return combinedData;
}
getCombinedData().then((data) => console.log(data));
