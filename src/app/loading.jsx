"use client";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Loading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", endLoading);
    Router.events.on("routeChangeError", endLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", endLoading);
      Router.events.off("routeChangeError", endLoading);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="flex justify-center">
          <img className="h-96" src="/spinner.svg" alt="loading..." />
        </div>
      )}
    </>
  );
}
