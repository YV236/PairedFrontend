import styles from "./EmptyChatView.module.css";

export default function EmptyChatView() {
    return (
        <div className={styles["empty-chat-view"]}>
            <div className={styles["empty-state-logo"]}><img src="/favicon.svg" alt="" /></div>
            <span className={styles["empty-state-eyebrow"]}>YOUR SPACE TO SHARE</span>
            <h1>Good music starts<br />with a hello.</h1>
            <p>Pick a conversation and send a song. Paired helps it find its way to their music app.</p>
            <span className={styles["empty-state-hint"]}><i /> Choose a chat to get started</span>
            <svg className={styles["empty-state-music"]} viewBox="0 0 900 700" aria-hidden="true" focusable="false">
                <g className={styles["music-orbit"]}>
                    <ellipse className={styles["music-track"]} cx="450" cy="350" rx="382" ry="214" />
                    <g className={styles["music-staff"]}>
                        <path d="M 104 322 C 286 263, 592 263, 796 322" />
                        <path d="M 101 337 C 285 278, 593 278, 799 337" />
                        <path d="M 99 352 C 284 293, 594 293, 801 352" />
                        <path d="M 101 367 C 285 308, 593 308, 799 367" />
                        <path d="M 104 382 C 286 323, 592 323, 796 382" />
                        <path className={styles["music-clef"]} d="M 209 309 C 192 291 169 300 169 319 C 169 339 199 343 211 321 C 227 292 211 258 201 235 C 193 217 201 199 214 201 C 231 203 235 233 233 256 C 231 283 218 321 214 347 C 209 379 221 397 239 392 C 256 387 256 367 244 359 C 232 351 220 358 218 371" />
                        <g className={styles["music-note"]}>
                            <ellipse cx="606" cy="294" rx="9" ry="6" transform="rotate(-24 606 294)" />
                            <path d="M 614 291 V 246 C 629 250 635 257 635 267" />
                        </g>
                        <g className={styles["music-note"]}>
                            <ellipse cx="663" cy="326" rx="9" ry="6" transform="rotate(-24 663 326)" />
                            <path d="M 671 323 V 276" />
                            <path d="M 671 277 C 687 281 692 290 687 301" />
                        </g>
                        <g className={styles["music-chord"]}>
                            <ellipse cx="731" cy="341" rx="8" ry="5.5" transform="rotate(-24 731 341)" />
                            <ellipse cx="746" cy="335" rx="8" ry="5.5" transform="rotate(-24 746 335)" />
                            <path d="M 738 338 V 294 M 753 332 V 288 M 738 294 Q 747 286 753 288" />
                        </g>
                    </g>
                </g>
                <g className={`${styles["music-orbit"]} ${styles["music-orbit-two"]}`}>
                    <ellipse className={styles["music-track"]} cx="450" cy="350" rx="322" ry="269" />
                    <g className={styles["music-staff"]}>
                        <path d="M 190 444 C 333 401, 567 401, 710 444" />
                        <path d="M 187 459 C 332 416, 568 416, 713 459" />
                        <path d="M 185 474 C 331 431, 569 431, 715 474" />
                        <path d="M 187 489 C 332 446, 568 446, 713 489" />
                        <path d="M 190 504 C 333 461, 567 461, 710 504" />
                        <g className={styles["music-note"]}>
                            <ellipse cx="294" cy="431" rx="9" ry="6" transform="rotate(-24 294 431)" />
                            <path d="M 302 428 V 385" />
                        </g>
                        <g className={styles["music-note"]}>
                            <ellipse cx="557" cy="438" rx="9" ry="6" transform="rotate(-24 557 438)" />
                            <path d="M 565 435 V 391 C 579 395 584 402 580 412" />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}
