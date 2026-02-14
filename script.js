const projects = [
  {
    title: "Sales Dashboard",
    description:
      "Interactive dashboard for tracking KPIs, trends, and conversion insights from business data.",
    tags: ["Python", "Pandas", "Matplotlib"]
  },
  {
    title: "Customer Churn Predictor",
    description:
      "Machine learning model that identifies at-risk customers and supports retention decisions.",
    tags: ["Scikit-learn", "Classification", "Data Cleaning"]
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal site to present skills, project highlights, and contact details.",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const projectGrid = document.getElementById("project-grid");
const yearElement = document.getElementById("year");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const tags = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tag-row">${tags}</div>
  `;

  projectGrid.appendChild(card);
});

yearElement.textContent = new Date().getFullYear();
