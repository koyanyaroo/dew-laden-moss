import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="id" className="scroll-smooth h-full bg-white">
                <Head>
                    <link rel="icon" href="/dmicon.svg" />
                </Head>
                <body className="h-full bg-gray-50/50">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
