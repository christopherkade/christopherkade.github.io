---
title: "Introduction to React Query in 2023"
description: "So much more than a request framework"
date: "2022-12-23"
slug: "/posts/react-query"
isPublished: true
---

I’ve been introduced to React Query at work last year and I wouldn’t be the first to say that it was a bit jarring initially. For the sake of personal growth, let’s document an introduction to it with actual use cases !

> The complete Codesandbox with example is available [here](https://codesandbox.io/s/react-query-seh4sj).

## What’s React Query?

React Query is a library for managing asynchronous data in React applications. It helps with tasks such as fetching, caching & updating data.

At a high level, React Query works by providing a set of hooks that can be used to fetch and manage data. These hooks allow developers to declaratively specify the data that their components need, and React Query takes care of the rest.

## Chris, show me an example please 😬

Let’s check out a basic example:

```jsx
import { useQuery } from "react-query";

function BasicExample() {
  const { data, isLoading, error } = useQuery("fetch-user-example", () => {
    return fetch("https://random-data-api.com/api/v2/users").then((res) =>
      res.json()
    );
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <h1>Basic example of data fetching</h1>
      <div>Random user: {data.username}</div>
    </>
  );
}
```

In this example, the **`useQuery`** hook is used to fetch data from the **`/api/v2/users`** endpoint. The hook takes two arguments: a key and a function that returns a promise. The key is used to uniquely identify the data being fetched, and the function is responsible for making the network request and returning a promise that resolves with the data.

## What about the other cool things React Query can do?

React Query is so much more than just a request framework it offers a lot of tools such as **caching, refetching, pre-fetching & pagination**. Let’s go over them one by one and see why they might justify using this library.

### Caching

One of the key features of React Query is its ability to cache data. When a component makes a request for data using one of the React Query hooks, the library will first check its cache to see if the data is already available. If it is, React Query will return the cached data immediately, eliminating the need to make a network request. This can greatly improve the performance of an application, especially when dealing with data that doesn't change very frequently (for example, on an online training platform offering static courses).

### Refetching

React Query allows you to refetch data when certain conditions are met, such as when a component is re-rendered or when the user navigates to a new page. This helps ensure that data is always up-to-date and consistent across your application.

Let’s take our previous example and check out how it works in action:

```jsx
import { useQuery } from "react-query";

function Refetching() {
  // The hook returns a refetch method that can be called anytime
  const { data, isLoading, error, refetch } = useQuery(
    "refetch-user-example",
    () => {
      return fetch("https://random-data-api.com/api/v2/users").then((res) =>
        res.json()
      );
    }
  );

  function handleRefetch() {
    refetch();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <h1>Refetching</h1>
      <div className="wrapper">
        <div>Random user: {data.username}</div>
        <button onClick={handleRefetch}>Refetch</button>
      </div>
    </>
  );
}
```

### Pre-fetching

Let’s say your user might need certain data soon, then you can use React Query’s pre-fetching functionality to optimize the performance of your application. This way you can show it almost instantly to your user once they will actually need it.

Once more, let’s build up our example with pre-fetching:

```jsx
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

function Prefetching() {
  const [showData, setShowData] = useState(false);
  const queryClient = useQueryClient();

  const fetchData = () => {
    return fetch("https://random-data-api.com/api/v2/users").then((res) =>
      res.json()
    );
  };

  const { data, isLoading, error } = useQuery(
    "prefetch-user-example",
    fetchData
  );

  useEffect(() => {
    // Data will be prefetched here once the component is mounted
    queryClient.prefetchQuery("prefetch-user-example", fetchData);
  }, [queryClient]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      <h1>Prefetching</h1>
      <button onClick={() => setShowData(true)}>Show prefetched data</button>
      {showData && <p>{data.username}</p>}
    </>
  );
}
```

### Pagination

What if you want infinite scrolling or pagination for your website? When working with large datasets it’s often impractical (and downright not recommended, depending on your use case) to load all the data at once. React Query makes it easy to paginate data and load new pages as needed, while also providing the ability to infinitely scroll through large datasets.

Here’s what a basic example would look like:

```jsx
import React, { useState } from "react";
import { useQuery } from "react-query";

function MyComponent() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery(
    ["pagination-example", page],
    () => {
      return fetch(`/api/my-data?page=${page}`).then((res) => res.json());
    },
    { keepPreviousData: true }
  );

  function handleNextClick() {
    setPage(page + 1);
  }

  function handlePrevClick() {
    setPage(page - 1);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <div>
        <button onClick={handlePrevClick} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={!data.hasMore}>
          Next
        </button>
      </div>
    </div>
  );
}
```

### Rapid fire of other cool React Query features

- Refetch on window focus (using the `refetchOnWindowFocus` option, that's `true` by default)
- Cache invalidation, you can specify when the data is stale and should be refetched
- Mutation functions, using a set of helper functions to create, update and delete data
- Error handling using the `onError` callback or the error object returned by the query

### Are there any risks when using React Query?

As with any framework out there, there's always the risk of introducing additional complexity to your codebase. React Query provides a lot of features and options for managing asynchronous data, and it can be tempting to use them all in an effort to optimize your application. However, this can lead to code that is difficult to understand and maintain, especially if you have multiple developers working on the same codebase.

Another risk to consider is the possibility of introducing performance issues. While React Query can greatly improve the performance of your application, make sure to use it correctly in order to avoid introducing new performance issues. For example, if you're using the **`keepPreviousData`** option to paginate data, it's important to use a cache key that's specific enough to avoid caching unrelated data. If you're not careful, you may end up with a large cache that negatively impacts the performance of your project.

Just like any other library out there, it’s important to weigh the benefits and risks it may offer.

## Conclusion

Overall, React Query is a powerful tool for managing asynchronous data in React applications. Its caching and lifecycle management features make it easy to build performant and scalable applications, and its support for pagination and infinite scrolling make it well-suited for working with large datasets.

Once you get the hang of it, it's a very potent tool to add to your toolbelt and I hope this quick article pushed you over the edge to try it out.

As always I'd **love** to stay in touch on [Twitter](https://twitter.com/christo_kade) (which surprisingly, hasn't imploded yet) so feel free to connect with me there.
