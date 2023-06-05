import React from "react";
import styles from "./IssueList.module.css";
import ListHeader from "../ListHeader/ListHeader";
import IssueItem from "../IssueItem/IssueItem";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Filter from "../filter/Filter";

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  let lastElementRef = useRef();
  console.log(lastElementRef.current);
  const observerRef = useRef();

  lastElementRef = (node) => {
    if (isLoading) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        console.log(node);
        setPage((p) => p + 1);
      }
    });
    if (node) observerRef.current.observe(node);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
      .then((res) => {
        console.log(res.data);

        setIssues((p) => {
          return [...p, ...res.data];
        });
        setIsLoading(false);
      });
  }, [page]);

  return (
    <div className={styles.list__container}>
      <Filter />
      <ListHeader />
      {issues.map((item, index) => {
        if (index === issues.length - 1) {
          return <IssueItem details={item} ref={lastElementRef} />;
        } else {
          return <IssueItem details={item} />;
        }
      })}
      {isLoading && <h2>Loading.........</h2>}
    </div>
  );
};

export default IssueList;
