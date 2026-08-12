import styles from "./TrustBar.module.css";

const items = [
  { title: "Ships from Dubai", text: "Carefully packed & tracked" },
  { title: "Secure checkout", text: "Encrypted payments via Stripe" },
  { title: "Made to celebrate you", text: "Fine jewelry for everyday joy" },
  { title: "Concierge care", text: "WhatsApp & email support" },
];

export function TrustBar() {
  return (
    <section className={styles.bar} aria-label="Shopping assurances">
      <div className={`container ${styles.grid}`}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
