import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="flex flex-col font-afacad justify-evenly text-center items-center bg-gradient-to-tl bg-accent h-svh text-primary">
            <h1 className="text-5xl font-semibold">Did you know?</h1>
            <p>We created Hyperlinks and navigations available on the app... Why?<br /> 
            Because we wanted to make it easier for you to navigate. <br />
            Still you lost your way?
            Return to<Link to="/" className="p-1 m-1 underline font-semibold hover:bg-primary hover:text-darkAccent  duration-300 hover:rounded-lg">Homepage</Link>here, and use the Navigation, and Links provided to access the pages.</p>
        </div>
    )
}

export default ErrorPage;