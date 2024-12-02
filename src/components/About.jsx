function About() {
    return (
        <div className="flex flex-col justify-center items-center bg-secondary min-h-[calc(100vh-6rem)] text-primary" >
            <h1 className="mb-6 font-bold text-4xl text-accent text-center">
                About Me
            </h1>
            <p className="mx-56 mb-4 text-justify text-lg">
                I’m a passionate Full Stack Developer skilled in the MERN stack. I love solving complex problems and creating impactful web applications. I strive to build scalable, user-friendly systems and am constantly learning to stay ahead in the field.
            </p>
            <p className="mt-8 text-center">
                Please check more by <a href="http://preciousumang.github.io/portfolioWebsite" className="hover:bg-accent hover:p-1 hover:rounded-md hover: hover:font-semibold hover:text-darkAccent duration-300">clickingHere
                </a></p>
        </div>
    );
}

export default About;
