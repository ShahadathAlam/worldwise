import styles from "./Button.module.css";
// console.log(styles["btn"]);
function Button({ children, type, navigate }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
