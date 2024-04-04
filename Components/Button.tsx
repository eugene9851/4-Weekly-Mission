import styles from "@/styles/button.module.css";

export function Button({
  folderName,
  onClick,
}: {
  folderName: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button className={styles.titleButton} onClick={onClick}>
      {folderName}
    </button>
  );
}
