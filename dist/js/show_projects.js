// Create an Array object for all the projects
const singleProjects = document.querySelector('.singleProjects')
const allFilterButtons = document.querySelector('.allFilterButtons');

// console.log(allFilterButtons)


function showBtnProejct() {
  showProjectItem(projects);
  showBtns();
}

function showBtns() {
  const categories = projects.reduce(function(values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values;
  }, ["all"]);
  // console.log("Unique Categories:", categories);

  const categoryBtns = categories.map(function(category) {
    return `<button class="btn filter-button" data-project=${category}>${category}</button>`
  }).join("");
  //It will display the buttons in the UI
  allFilterButtons.innerHTML = categoryBtns;

  // FYI, We could have create a DOM ELEMENT at the very top but it will not be accessbile in this showBTNS since button has been generated dynamically

  const filterButtons = document.querySelectorAll('.filter-button');
  // console.log(filterButtons)

  filterButtons.forEach(function(buttonParam) {
    buttonParam.addEventListener('click', function(elem) {
      console.log(elem.currentTarget.dataset.project)
      const dataSetValue = elem.currentTarget.dataset.project;
      const projectCategory = projects.filter(function(projectItem) {
        if (projectItem.category === dataSetValue) {
          return projectItem;
        }
      });
      if (dataSetValue ==="all") {
        showProjectItem(projects);
      }
      else {
        showProjectItem(projectCategory);
      }
    })
  })

}


function showProjectItem(projectItem) {
  // Passing Project item as a parameter
  let displayProject = projectItem.map(function (singleProj) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card my-3 card-shadow">
        <div class="project-content">
          <div class="img-box">
            <img src=${singleProj.img} />
            <h2> ${singleProj.title} </h2>
            <span class="h1"></span>
            <span class="h2"></span>
            <span class="h3"></span>
          </div>
        </div>
        <div class="card-body">
          <div class="project-heading text-center">
            <h4>${singleProj.title}</h4>
            <p> <i class="fas fa-laptop-code" aria-hidden="true"></i> ${singleProj.languages}</p>
          </div>
          <hr>
          <p class="description-box text-center">
          ${singleProj.description}
          </p>
          <hr>
          <a href=${singleProj.url} target="_blank" class="btn more-info btn-block">More Info</a>
        </div>
      </div>
    </div>`;
  });
  displayProject = displayProject.join("");
  singleProjects.innerHTML = displayProject;
}

function showNew(projectitem) {
  let strtDate = "2020-05-20T18:22:41.420Z";
  let endDate = "2020-07-20T18:22:41.420Z";

  let result = projectitem.filter(function(dateFilter) {
    let output = dateFilter.published_date >=strtDate;
    return output;
  })
  // console.log(result)
}

showNew(projects);
window.addEventListener('DOMContentLoaded', showBtnProejct);