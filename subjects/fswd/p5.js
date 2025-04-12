// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `

  //registration form usinf bootstrap
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-lg">
                    <div class="card-header bg-primary text-white">
                        <h3 class="text-center mb-0">Student Registration Form</h3>
                    </div>
                    <div class="card-body">
                        <form id="registrationForm" onsubmit="saveData(event)">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="rollNumber" placeholder="Roll Number" required>
                                        <label for="rollNumber">Roll Number</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="firstName" placeholder="First Name" required>
                                        <label for="firstName">First Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3">
                                        <input type="tel" class="form-control" id="mobile" placeholder="Mobile Number" required>
                                        <label for="mobile">Mobile Number</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="Email ID" required>
                                        <label for="email">Email ID</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" id="address" placeholder="Address" style="height: 100px" required></textarea>
                                        <label for="address">Address</label>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-primary btn-lg px-5">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    
        <div class="row justify-content-center mt-4">
            <div class="col-md-8">
                <div class="card shadow">
                    <div class="card-header bg-success text-white">
                        <h4 class="mb-0">Registered Students</h4>
                    </div>
                    <div class="card-body">
                        <div id="storedData"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
    <script>
        window.onload = function() {
            displayStoredData();
        };

        function saveData(event) {
            event.preventDefault();

            const studentData = {
                rollNumber: document.getElementById('rollNumber').value,
                firstName: document.getElementById('firstName').value,
                mobile: document.getElementById('mobile').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value,
                timestamp: new Date().toLocaleString()
            };

            let existingData = JSON.parse(localStorage.getItem('studentRegistrations')) || [];
            existingData.push(studentData);
            localStorage.setItem('studentRegistrations', JSON.stringify(existingData));
            document.getElementById('registrationForm').reset();
            displayStoredData();
            alert('Registration successful!');
        }

        function displayStoredData() {
            const storedData = JSON.parse(localStorage.getItem('studentRegistrations')) || [];
            const displayDiv = document.getElementById('storedData');
            
            if (storedData.length === 0) {
                displayDiv.innerHTML = '<p class="text-center">No registrations yet</p>';
                return;
            }

            let html = '<div class="table-responsive"><table class="table table-striped">';
            html += '<thead><tr><th>Roll Number</th><th>Name</th><th>Mobile</th><th>Email</th><th>Address</th><th>Timestamp</th></tr></thead><tbody>';
            
            storedData.forEach(student => {
                html += <tr>
                    <td>${student.rollNumber}</td>
                    <td>${student.firstName}</td>
                    <td>${student.mobile}</td>
                    <td>${student.email}</td>
                    <td>${student.address}</td>
                    <td>${student.timestamp}</td>
                </tr>;
            });
            
            html += '</tbody></table></div>';
            displayDiv.innerHTML = html;
        }

        function clearData() {
            localStorage.removeItem('studentRegistrations');
            displayStoredData();
        }
    </script>
</body>
</html>







  `;
  res.json({ code: codeString });
});

module.exports = router;
