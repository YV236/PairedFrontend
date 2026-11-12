import type { CSSProperties } from "react";
import BrandButton from "@/components/ui/BrandButton";
import LinkButton from "@/components/ui/LinkButton";
import styles from "./LandingPage.module.css";

function ArrowUpRight() {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <path d="m7.25 4.9 8.1 4.55a.63.63 0 0 1 0 1.1l-8.1 4.55a.63.63 0 0 1-.94-.55v-9.1a.63.63 0 0 1 .94-.55Z" fill="currentColor" />
        </svg>
    );
}

function SpotifyMark() {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="currentColor" />
            <path d="M5.6 9.2c4.6-1.2 9.4-.7 13.1 1.4M6.5 12.4c3.8-1 7.7-.5 10.7 1.2M7.3 15.3c3-.7 6-.4 8.4.9" stroke="var(--landing-accent-ink)" strokeWidth="1.35" strokeLinecap="round" />
        </svg>
    );
}

function Waveform() {
    return (
        <span className={styles.waveform} aria-label="Now playing">
            {[12, 20, 15, 24, 12, 18, 26, 14, 21, 11, 19, 25, 13, 22, 16, 10, 23, 15, 20, 12, 24, 17, 11, 21].map((height, index) => (
                <i key={index} style={{ "--bar-height": `${height / 16}rem`, opacity: 0.45 + (index % 5) * 0.1, animationDelay: `${index * -55}ms` } as CSSProperties} />
            ))}
        </span>
    );
}

const steps = [
    { number: "01", title: "Share the song", description: "Send a track straight from the music app you already use." },
    { number: "02", title: "Paired finds it", description: "We match the track to your friend's streaming platform." },
    { number: "03", title: "Press play", description: "They get the right song, ready to open and enjoy." },
];

export default function LandingPage() {
    return (
        <main className={styles["landing-page"]}>
            <header className={styles["landing-nav"]} id="top">
                <BrandButton to="/#top" />
                <nav className={styles["desktop-nav"]} aria-label="Main navigation">
                    <a href="#how-it-works">How it works</a>
                    <a href="#made-for-sharing">Made for sharing</a>
                </nav>
                <LinkButton to="/app" value="Open Paired" variant="outline" size="compact" />
            </header>

            <section className={styles.hero}>
                <div className={styles["hero-copy"]}>
                    <div className={styles.eyebrow}><span className={styles["eyebrow-dot"]} /> GOOD MUSIC TRAVELS</div>
                    <h1>Your song.<br /><span>Their app.</span><br />Same moment.</h1>
                    <p className={styles["hero-description"]}>
                        Send a song from the streaming app you love. Paired finds it on your friend’s platform, so you can share the feeling without the link hunt.
                    </p>
                    <div className={styles["hero-actions"]}>
                        <LinkButton to="/app" value="Start sharing" />
                        <a className={styles["text-cta"]} href="#how-it-works"><span className={styles["play-icon"]}><PlayIcon /></span> See how it works</a>
                    </div>
                    <p className={styles["hero-note"]}><span className={styles["note-check"]}>✓</span> One track in. Their version out.</p>
                </div>

                <div className={styles["hero-art"]} role="img" aria-label="Example: Sunset Lover is matched from Spotify to Apple Music">
                    <div className={`${styles.orbit} ${styles["orbit-one"]}`} />
                    <div className={`${styles.orbit} ${styles["orbit-two"]}`} />
                    <div className={`${styles["float-note"]} ${styles["float-note-top"]}`}><span className={styles["float-note-icon"]}>♪</span> made for your people</div>
                    <div className={styles["transfer-card"]}>
                        <div className={styles["transfer-heading"]}>
                            <span>THE HANDOFF</span>
                            <span className={styles["live-indicator"]}><i /> LIVE</span>
                        </div>
                        <div className={`${styles["track-row"]} ${styles["source-track"]}`}>
                            <div className={`${styles["album-art"]} ${styles["album-sunrise"]}`}><span className={styles["album-sun"]} /></div>
                            <div className={styles["track-meta"]}><span className={styles["track-label"]}>FROM YOUR APP</span><strong>Sunset Lover</strong><small>Petit Biscuit</small></div>
                            <span className={`${styles["service-badge"]} ${styles["service-spotify"]}`} aria-label="Spotify"><SpotifyMark /></span>
                        </div>
                        <div className={styles["match-path"]}><span className={styles["path-line"]} /><span className={styles["match-spark"]}>✦</span><span className={styles["path-line"]} /></div>
                        <div className={`${styles["track-row"]} ${styles["target-track"]}`}>
                            <div className={`${styles["album-art"]} ${styles["album-sunset"]}`}><span className={styles["album-moon"]} /></div>
                            <div className={styles["track-meta"]}><span className={styles["track-label"]}>FOUND FOR YOUR FRIEND</span><strong>Sunset Lover</strong><small>Petit Biscuit</small></div>
                            <span className={`${styles["service-badge"]} ${styles["service-apple"]}`} aria-label="Apple Music">♫</span>
                        </div>
                        <div className={styles["match-footer"]}><span className={styles["success-check"]}>✓</span><span><strong>Same song, found.</strong><small>Ready when they are</small></span><Waveform /></div>
                    </div>
                    <div className={`${styles["float-note"]} ${styles["float-note-bottom"]}`}><span className={styles["friend-avatar"]}>A</span> Alex is listening <span className={styles["tiny-sound"]}>♫</span></div>
                    <span className={`${styles["hero-star"]} ${styles["hero-star-one"]}`}>✳</span>
                    <span className={`${styles["hero-star"]} ${styles["hero-star-two"]}`}>✦</span>
                </div>
            </section>

            <section className={styles["platform-strip"]} id="made-for-sharing" aria-label="Share across music platforms">
                <p>YOUR PEOPLE. THEIR PLAYLISTS.</p>
                <div className={styles["platform-list"]}>
                    <span><i className={`${styles["platform-mark"]} ${styles["spotify-mark"]}`}><SpotifyMark /></i> Spotify</span>
                    <span><i className={`${styles["platform-mark"]} ${styles["apple-mark"]}`}>♫</i> Apple Music</span>
                    <span><i className={`${styles["platform-mark"]} ${styles["youtube-mark"]}`}>▶</i> YouTube Music</span>
                    <span className={styles["platform-more"]}>and more, together <span>↗</span></span>
                </div>
            </section>

            <section className={styles["how-section"]} id="how-it-works">
                <div className={styles["section-intro"]}>
                    <div className={styles.eyebrow}><span className={styles["eyebrow-dot"]} /> SHARING, SORTED</div>
                    <h2>Less “which app?”<br /><span>More “listen to this.”</span></h2>
                    <p>That song you can’t stop thinking about deserves an easy way to get there.</p>
                </div>
                <div className={styles["steps-grid"]}>
                    {steps.map((step) => (
                        <article className={styles["step-card"]} key={step.number}>
                            <span className={styles["step-number"]}>{step.number}</span>
                            <span className={styles["step-arrow"]}><ArrowUpRight /></span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles["closing-cta"]}>
                <div className={styles["closing-mark"]}><img src="/favicon.svg" alt="" /></div>
                <div><p className={styles["closing-kicker"]}>PASS THE GOOD STUFF ON</p><h2>Good music sounds<br />better shared.</h2></div>
                <LinkButton className={styles["closing-button"]} to="/app" value="Let’s go" />
                <span className={`${styles["closing-spark"]} ${styles["closing-spark-one"]}`}>✳</span>
                <span className={`${styles["closing-spark"]} ${styles["closing-spark-two"]}`}>✦</span>
            </section>

            <footer className={styles["landing-footer"]}>
                <BrandButton to="/#top" size="footer" />
                <span>Made for the songs that make you think of someone.</span>
                <a href="#top">Back to top ↑</a>
            </footer>
        </main>
    );
}
