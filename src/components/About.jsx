function About() {
    return (
        <div className="bg-secondary text-primary" style={{ minHeight:"calc(100vh-96px)" }}>
            <h1 className="text-4xl font-bold text-center mb-6 text-accent">
                About Me
            </h1>
            <p className="text-lg text-center mb-4 mx-16">
                I’m a passionate Full Stack Developer skilled in the MERN stack. I love solving complex problems and creating impactful web applications. I strive to build scalable, user-friendly systems and am constantly learning to stay ahead in the field.
            </p>
            <p className="text-center text-darkAccent mt-8">
                Please check more by <a href="http://preciousumang.github.io/portfolioWebsite" className="hover:rounded-md hover:p-1 hover: hover:bg-accent duration-300">clickingHere
                </a></p>
        </div>
    );
}

export default About;
