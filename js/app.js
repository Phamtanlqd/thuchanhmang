const students = [
    { name: "Nguyễn Văn A", evidence: "anh_phan_quyen.png", link: "Canva Link", aiEval: "Rất tốt, nhận diện đúng rủi ro", status: "Hoàn thành" },
    { name: "Trần Thị B", evidence: "chia_se_o_D.png", link: "GDocs Link", aiEval: "Tốt, biết cách check AI", status: "Hoàn thành" },
    { name: "Lê Văn C", evidence: "", link: "", aiEval: "", status: "Chưa nộp" }
];

document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById("student-data");
    let submitted = 0;

    students.forEach(st => {
        if (st.status === "Hoàn thành") submitted++;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${st.name}</td>
            <td><a href="#">${st.evidence}</a></td>
            <td><a href="#">${st.link}</a></td>
            <td>${st.aiEval}</td>
            <td style="color: ${st.status === 'Hoàn thành' ? 'green' : 'red'}; font-weight: bold;">${st.status}</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById("submitted-count").innerText = submitted;
    document.getElementById("missing-count").innerText = students.length - submitted;
});