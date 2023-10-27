import React from "react";

type ParagraphProps = {
    ParagraphText: string
}

export const Paragraph = ({ ParagraphText }: ParagraphProps) => {
    return (
        <p>{ParagraphText}</p>
    )
}