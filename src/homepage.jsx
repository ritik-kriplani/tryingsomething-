import React, { useState, useEffect } from "react";
import Preloader from "./preloader";
import axios from "axios";
import Lottie from "lottie-react";
import loaderAnimation from "./loader5.json"; 
import loaderAnimation2 from "./Animation-3.json"; 

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", rollNo: "101", branch: "CSE", feePaid: false },
    { id: 2, name: "Jane Smith", rollNo: "102", branch: "ECE", feePaid: true },
    { id: 3, name: "Sam Wilson", rollNo: "103", branch: "ME", feePaid: false },
  ]);
  const [searchText, setSearchText] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);
  const [isFeePaid, setIsFeePaid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCheckboxClick = (id, currentStatus) => {
    setCurrentStudentId(id);
    setIsFeePaid(!currentStatus);
    setShowConfirm(true);
  };

  const handleConfirmation = (confirm) => {
    if (confirm) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === currentStudentId
            ? { ...student, feePaid: isFeePaid }
            : student
        )
      );
    }
    setShowConfirm(false);
    setCurrentStudentId(null);
  };

  /* useEffect(() => {
    axios
    .get("api")
    .then((res) => setStudents(res.data));
},[]);*/
    

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="here2">
          <header>
            <h1 className="teacher-name">Teacher Name</h1>
            <input
              id="searchBar"
              type="text"
              placeholder="Search Student Name.."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} 
            />
            
          </header>
          
          <div className="table-container">
            <h1 className="table-title">Student Fee Table</h1>
            <table className="student-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Roll No.</th>
                  <th>Branch</th>
                  <th>Fee Paid</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.rollNo}</td>
                    <td>{student.branch}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={student.feePaid}
                        onChange={() =>
                          handleCheckboxClick(student.id, student.feePaid)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showConfirm && (
            <div className="confirmation-modal">
              <div className="confirmation-content">
                <p>whatever the confirmation text is </p>
                <div className="confirmation-buttons">
                  <button
                    className="yes-button"
                    onClick={() => handleConfirmation(true)}
                  >
                    Confirm
                  </button>
                  <button
                    className="no-button"
                    onClick={() => handleConfirmation(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
