import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContentLayout from './ContentLayout'

interface PageProps {
    children: React.ReactNode
}

function PageLayout({ children }: PageProps) {
    return (
        <div className="container mx-auto py-4 md:max-w-3xl">
            <Navbar />
            <ContentLayout>{children}</ContentLayout>
            <Footer />
        </div>
    )
}

export default PageLayout
