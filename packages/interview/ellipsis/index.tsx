import React, { useMemo } from "react";

interface EllipsisProps {
    text?: string;
    rows?: number;
}

/** 省略号占用的字符数 */
const DEFAULT_PLACEHOLDER_LENGTH = 1;

const DEFAULT_ELLIPSIS = '...';

const Ellipsis = (props: EllipsisProps) => {
    const { text, rows = 1 } = props;

    if (!props.text) {
        return null;
    }

    const splittedText = useMemo(() => {
        const container = document.querySelector('.ellipsis-text');
        if (container) {
            const { fontSize, width } = window.getComputedStyle(container);
            const charCountSingleLine = parseInt(width) / parseInt(fontSize);
            const totalVisibleChars = Math.floor(charCountSingleLine) * rows - DEFAULT_PLACEHOLDER_LENGTH;
            const visibleText = text?.substring(0, totalVisibleChars) + DEFAULT_ELLIPSIS;
            return visibleText;
        }
        return text;
    }, [rows, text]);

    return <div className="ellipsis-text">{splittedText}</div>
}

export default Ellipsis;