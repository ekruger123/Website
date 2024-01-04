import { Download } from 'react-bootstrap-icons';

const Home = () => {
    
    return(
    <div>
        <h2 className='fs-2 purple'>About</h2>

        <p className='fs-5'>A  <strong>Software Developer</strong> trained in <strong>JavaScript, React, jQuery, Node.js, Python, PHP, Bootstrap</strong> and <strong>SQL.</strong> I  have always been interested in technology and I am now looking to establish a career in the industry. This interest has led me to recently graduate from a coding Traineeship as a <strong>full stack developer</strong> including completing two real-world projects successfully to specification using a wide range of programming languages. Highly self-disciplined and organised with a thirst for learning new skills. Ability to communicate well and give over ideas clearly.  A  flexible team player with a proven track record in solving problems in creative and efficient ways. I am confident that I will make a valuable addition to your development team.  I am available immediately. </p>

        <p className='fs-5'>I had (and still have) a fascination with how organisations work and numbers and decided to pursue a BA in Business Studies with a focus in Accounting.  After completing my BA, I pursued a Post Graduate Certificate in Education and taught for over 5 years.  My curiosity and thirst for learning has lead me to coding where I took a course with IT Careers Switch where I have enjoy the problem solving and creativity involved in coding. The ability to break things down; explain seemingly complex concepts simply (even to myself);  constantly learn new ideas; are all skills I gained in my teaching career.  These skill have served me well in my coding journey am I am looking forward to using them in my future career.</p>

        <p className='fs-5'>Download full CV<a className='ps-2' href="Elizabeth Kruger CV.docx" download><Download size='25'/></a></p>
    </div>
    )
}

export default Home;