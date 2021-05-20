import React, { useEffect, useState } from "react";

import { useFetch as APICaller } from "use-http";

export const APICall = async () => {
  useEffect(() => {}, []);
  return {};
};

async function APICssll(props) {
  const apiDomain = "http://fakerestapi.azurewebsites.net/api/v1/Users";
  // const { request, response, loading, error } = APICaller(apiDomain);

  const fc = async () => {};
  useEffect(() => {
    fc();
    // console.log("store ", store.getState());
    // document.title = "Login to PlatyPlus";
  }, []);

  // useEffect(() => {
  //   functionCall();
  // }, []);

  //   const loadInitialTodos = useCallback(async () => {
  //     // const { ok } = response // BAD, DO NOT DO THIS
  //     const initialTodos = await get("/Users");
  //     if (response.ok) console.log("initialTodos");
  //   }, [get, response]);

  //   useEffect(() => {
  //     loadInitialTodos();
  //   }, [loadInitialTodos]); // componentDidMount

  //   console.log("FetchResponse ", loadInitialTodos, response);
  return {};

  //   const { get, post, patch, response, loading, error } = FetchResponse;
  //   const postResponse = post(
  //     JSON.stringify({
  //       username: "mor_2314",
  //       password: "83r5^_",
  //     })
  //   );
  //   console.log("Call ", postResponse);
  //   console.log("response ", response);
  //   if (response.ok) {
  //     return postResponse;
  //   } else {
  //     return {};
  //   }
}
