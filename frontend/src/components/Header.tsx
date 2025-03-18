import React from "react";

interface HeaderProps  {
    title: string
}

const Header: React.FC<HeaderProps> = ({
    title
}) => {
    return (
        <header>
            <h1 data-testid="title" className="text-4xl">{title}</h1>
        </header>
    )
}

export default Header;