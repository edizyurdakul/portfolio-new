import React from 'react'

interface PageProps {
    children: React.ReactNode
}

function ContentLayout({ children }: PageProps) {
    return <main className="mx-auto max-w-3xl">{children}</main>
}

export default ContentLayout
