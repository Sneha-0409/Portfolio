import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Resume & Experience</h2>
                <div className="text-center mb-10">
                    {/* Download Resume button as required  */}
                    <a href="/resume.pdf" download className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors">
                        Download My Resume
                    </a>
                    {/* TODO: Add your actual resume file to the `public` folder in your client directory and name it resume.pdf */}
                </div>

                {/* Work/Education Timeline as required  */}
                <div className="max-w-3xl mx-auto">
                    <div className="border-l-2 border-teal-400 pl-6">
                        {/* Timeline Item 1 */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-teal-400">[Job Title / Degree]</h3>
                            <p className="text-gray-400">[Company Name / University] | [Start Date] - [End Date]</p>
                            <p className="mt-2 text-gray-300">[A brief description of your responsibilities, achievements, or field of study.]</p>
                        </div>
                        {/* Timeline Item 2 */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-teal-400">[Previous Job Title / Degree]</h3>
                            <p className="text-gray-400">[Company Name / University] | [Start Date] - [End Date]</p>
                            <p className="mt-2 text-gray-300">[A brief description of your responsibilities, achievements, or field of study.]</p>
                        </div>
                        {/* TODO: Add more timeline items */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;