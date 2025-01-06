function displayStudentInfo() {
    const form = document.getElementById('studentForm');
    const formData = new FormData(form);

    const studentDetails = document.getElementById('studentDetails');
    studentDetails.innerHTML = '';

    const studentInfo = document.createElement('div');
    studentInfo.classList.add('student-info');

    const fields = ['name', 'rollNumber', 'class', 'course', 'division', 'email', 'year', 'phonenumbr', 'birthDate'];
    const labels = ['Name', 'Roll Number', 'Class', 'Course', 'Division', 'Email', 'Year', 'Phone Number', 'Date of Birth'];

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const value = formData.get(field);
        const label = labels[i];
        const paragraph = document.createElement('p');
        paragraph.textContent = `${label}: ${value}`;
        studentInfo.appendChild(paragraph);
    }
    const photoFile = formData.get('photo');
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        studentInfo.appendChild(img);
    }
    reader.readAsDataURL(photoFile);

    studentDetails.appendChild(studentInfo);
}
