import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ search }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    search(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        onKeyPress={onKeyPress}
        type="search"
        placeholder="Search"
      />
      <button className={styles.button} onClick={onClick} type="submit">
        <img className={styles.buttonImg} src="/images/search.png" alt="" />
      </button>
    </header>
  );
};

export default SearchHeader;
