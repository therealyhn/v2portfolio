// src/hooks/useScrollLock.js
import { useEffect } from "react";

export default function useScrollLock(open, onClose) {
    useEffect(() => {
        if (!open) return;

        // zapamti prethodno stanje
        const prevHtml = document.documentElement.style.overflow;
        const prevBody = document.body.style.overflow;

        // zaključa scroll
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        // spriječi dodirni scroll izvan modal-content
        const preventScroll = (e) => {
            if (!e.target.closest(".modal-content")) {
                e.preventDefault();
            }
        };

        // ESC za zatvaranje
        const onEsc = (e) => e.key === "Escape" && onClose?.();

        document.addEventListener("touchmove", preventScroll, { passive: false });
        document.addEventListener("keydown", onEsc);

        return () => {
            // vrati staro stanje
            document.documentElement.style.overflow = prevHtml;
            document.body.style.overflow = prevBody;
            document.removeEventListener("touchmove", preventScroll);
            document.removeEventListener("keydown", onEsc);
        };
    }, [open, onClose]);
}
