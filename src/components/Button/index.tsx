import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    href: string
}

function Button({ children, href }: ButtonProps) {
    return (
        <a
            className="flex h-12 items-center justify-center space-x-3 rounded-md bg-neutral-300 px-2 py-4 font-bold transition-colors duration-300 ease-in-out hover:bg-black/0 dark:border dark:border-neutral-800 dark:bg-black/0 dark:hover:bg-neutral-900"
            aria-label="Resume"
            href={href}
        >
            <span>{children}</span>
        </a>
    )
}

export default Button
