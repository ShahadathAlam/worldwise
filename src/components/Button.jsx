import styles from "./Button.module.css";
// console.log(styles["btn"]);

function Button({ children, type, navigate }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      type="button"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {children}
    </button>
  );
}

// function Button({ children, type, navigate }) {
//   return (
//     <button
//       className={`${styles.btn} ${styles[type]}`}
//       type="button"
//       onClick={() => {
//         navigate(-1);
//       }}
//     >
//       {children}
//     </button>
//   );
// }

export default Button;
