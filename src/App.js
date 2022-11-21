import React from "react";
import "./App.css";
import pic from "./image.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <div class="column1">
        <br />
        <img src={pic} alt="my" class="img" border="3px" />
      </div>
      <div class="column2">
        <br />
        <br />
        <h1>
          RASHMI <i>JAYASUNDARA</i>
        </h1>
      </div>
      <div class="column2">
        <h2> Profile </h2>
        <p>
          I am a third-year undergraduate in the Faculty of Science studying{" "}
          <strong>Computer Science, Statistics and Mathematics</strong> at the
          University of Colombo. As a Computer Science student, I'm looking
          forward to learning about how Computer science is used in the real
          world. I like to learn new things and improve my skills.
          <br />
          <br />I am able to work under pressure and in a team environment. I
          enjoy working with team members. Moreover, I am a quick learner and
          would like to broaden my knowledge.
        </p>
      </div>
      <div class="column1">
        <h2>Personal Information</h2>
        <strong>Name:</strong>
        <dd>Rashmi Nirmani Nimeshika Jayasundara</dd>
        <strong>Birthday:</strong> <dd>23/12/1997</dd>
        <strong>Gender:</strong> <dd>Female</dd>
        <strong>NIC:</strong>
        <dd>978581366V</dd>
        <strong>Nationality:</strong>
        <dd>SriLankan</dd>
      </div>
      <div class="column2">
        <h2>Education</h2>
        <ol>
          <li>
            <h3>
              Bachelor of Computer Science, Statistics and Mathematics in
              Physical Science(2019 present)
            </h3>
            <ul>
              {" "}
              University of Colombo,Colombo
              <br />
              Computer Science, Statistics, Applied Mathematics,Information
              Technology, Pure Mathematics
            </ul>
          </li>

          <li>
            <h3>G.C.E Advance Level Examination,2017</h3>
            <ul>
              Holy Family Balika,Kurunegala
              <br />
              Combined Mathematics: A, Chemistry: B, Physics: C
            </ul>
          </li>

          <li>
            <h3>G.C.E Advance Level Examination,2013</h3>
            <ul>
              {" "}
              Holy Family Balika,Kurunegala
              <br />
              A: 8'S | C: 1<br />
              Mathematics: A, Science: A, English: C<br />
              English:B (G.C.E. O/L in 2018)
            </ul>
          </li>

          <li>
            <h3>Diploma in English,2018</h3>
            <ul>National Youth Service Council,Kurunegala</ul>
          </li>

          <li>
            <h3>
              Certificate course in Practical Training in Tamil Language,2019
            </h3>
            <ul>Department of Official Languages & University of Colombo</ul>
          </li>
        </ol>
      </div>
      <div class="column1">
        <h2>Objective</h2>
        <ul>
          <li>
            Seek an entry-level position in a high-level professional
            environment to begin my career.
          </li>
          <li>
            Make a significant contributionto the success of the company while
            enhancing my skills.
          </li>
          <li> Interested in a challenging career.</li>
        </ul>
        <br />

        <h2>Interests</h2>
        <ul>
          <li>Learning New Skills</li>
          <li>Club Memberships</li>
          <li>Following new technolog</li>
        </ul>
        <br />

        <h2>Skills</h2>
        <h3>Soft skills</h3>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Problem Solving</td>
              <td>
                <ProgressBar variant="info" now={80} />
              </td>
            </tr>
            <tr>
              <td>Leadership</td>
              <td>
                <ProgressBar variant="info" now={80} />
              </td>
            </tr>
            <tr>
              <td>Team work</td>
              <td>
                <ProgressBar variant="info" now={100} />
              </td>
            </tr>
            <tr>
              <td>Creativity</td>
              <td>
                <ProgressBar variant="info" now={80} />
              </td>
            </tr>
            <tr>
              <td>Communication</td>
              <td>
                <ProgressBar variant="info" now={90} />
              </td>
            </tr>
            <tr>
              <td>Version controlling</td>
              <td>
                <ProgressBar variant="info" now={50} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <h3>Computer Literacy</h3>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MS Office</td>
              <td>
                <ProgressBar variant="info" now={90} />
              </td>
            </tr>
            <tr>
              <td>Unity</td>
              <td>
                <ProgressBar variant="info" now={70} />
              </td>
            </tr>
            <tr>
              <td>Java, C#</td>
              <td>
                <ProgressBar variant="info" now={60} />
              </td>
            </tr>
            <tr>
              <td>HTML,CSS</td>
              <td>
                <ProgressBar variant="info" now={90} />
              </td>
            </tr>
            <tr>
              <td>React.js</td>
              <td>
                <ProgressBar variant="info" now={50} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <h3>Languages</h3>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sinhala</td>
              <td>
                <ProgressBar variant="info" now={100} />
              </td>
            </tr>
            <tr>
              <td>English</td>
              <td>
                <ProgressBar variant="info" now={70} />
              </td>
            </tr>
            <tr>
              <td>Tamil</td>
              <td>
                <ProgressBar variant="info" now={40} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <h2>References</h2>
        <strong>Mr. G.P. Niyomal Boteju</strong>
        <ul>
          B.Com. (Col), PG Dip in Comp Tec (Col) (Instructor In Computer
          Technology)
          <br />
          University of Colombo School of Computing
          <br />
          0777377313
          <br />
          <a href="mailto:gpn@ucsc.cmb.ac.lk?subject = Feedback&body = Message">
            gpn@ucsc.cmb.ac.lk
          </a>
        </ul>
        <strong>Dr.C.J.A.Jayawardena</strong>
        <ul>
          B.Sc (Colombo) , M.Sc (Ohio State) , M.Sc. , Ph.D. (Memphis State)
          [Graph Theory , Combinatorics, Networking and Discrete Optimization.]
          <br />
          University of Colombo, Faculty of Science
          <br />
          0775550540
          <br />
          <a href="mailto:c_jayawardene@yahoo.com?subject = Feedback&body = Message">
            c_jayawardene@yahoo.com
          </a>
        </ul>
      </div>

      <div class="column2">
        <h2>Projects</h2>
        <ol>
          <li>
            <h3>SOFT DRINKS MINI VENDING MACHINE(2021)</h3>
            <ul>
              University of Colombo
              <br />
              Used C# language in visual basic software (Group Project)
            </ul>
          </li>
          <li>
            <h3>UNITY LEVEL DESIGN(2022)</h3>
            <ul>
              Fiver
              <br />
              Used Unity
            </ul>
          </li>
          <li>
            <h3>UNITY BASIC GAME(2022)</h3>
            <ul>
              <a href="https://github.com/rashmin66/my_work_01">
                https://github.com/rashmin66/my_work_01
              </a>
              <br />
              Used C#,Unity,Visual Basic Software
            </ul>
          </li>
          <li>
            <h3>PORTFOLIO WEBSITE(2022)</h3>
            <ul>
              <a href="https://rashmin66.github.io/React_Project_01">
                https://rashmin66.github.io/React_Project_01/
              </a>
              <br />
              Used React.js, CSS, HTML
            </ul>
          </li>
          <li>
            <h3>
              ANALYSIS OF ACCEPTANCE AND THE AMOUNT OF UTILIZATION OF DIGITAL
              DELIVERY CHANNELS IN THE BANKING INDUSTRY(2021/2022)
            </h3>
            <ul>
              University of Colombo
              <br />
              Corporate Sponsor - Nations Trust Bank PLC
              <br />
              Used Spss,Exel,Google Sheets
            </ul>
          </li>
        </ol>
        <h2>Extra-Curricular Activities</h2>
        <ul>
          <li>
            Active member of Leo Club, Astronomy society in Faculty of Science,
            University of Colombo. Member of Sri Lanka Red Cross Society since
            2012.
          </li>
          <li>
            Fresher`s Inter Faculty Championship of University of Colombo 2019,
            Player of faculty hockey team, Faculty of science.
          </li>
          <li>
            {" "}
            Participated in Australian National Chemistry Quiz in 2013 and Quiz
            Competition organized by Wayamba University of Sri Lanka in 2015 .
            <li>
              Former member of board of prefect in Holy Family Balika Kurunegala
              in 2015.
            </li>
          </li>
        </ul>
        <br />
        <h2>Contact</h2>
        <strong>Address:</strong>
        <dd>Henegedara,Walpola,Pothuhera</dd>
        <strong>Tele:</strong> <dd>0716671147</dd>
        <strong>Email:</strong> <dd>hansi20ra@gmail.com</dd>
        <strong>Linkedin:</strong>
        <dd>
          <a href="https://www.linkedin.com/in/rashmi-jayasundara-155610203?subject">
            https://www.linkedin.com/in/rashmi-jayasundara-155610203
          </a>
        </dd>
        <strong>github:</strong>
        <dd>
          <a href="https://github.com/rashmin66?subject">
            https://github.com/rashmin66
          </a>
        </dd>
        <strong>fb:</strong>
        <dd>
          <a href="https://www.facebook.com/rashmi.herath.77920">
            https://www.facebook.com/rashmi.herath.77920
          </a>
        </dd>
      </div>
    </div>
  );
}
export default App;
