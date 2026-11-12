import BrandButton from "@/components/ui/BrandButton";
import LinkButton from "@/components/ui/LinkButton";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
    return (
        <main className={styles["not-found-page"]}>
            <BrandButton />
            <div className={styles["not-found-content"]}>
                <span className={styles["not-found-code"]}>404 · WRONG TURN</span>
                <h1>This page isn’t playing.</h1>
                <p>That link doesn’t lead anywhere. Head back and find your people.</p>
                <LinkButton to="/" value="Back to Paired" />
            </div>
        </main>
    );
}
