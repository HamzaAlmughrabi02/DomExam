const navList = document.getElementById('navbar__list');
const allSections = document.querySelectorAll('section');

allSections.forEach((sec, i) => {
  const li = document.createElement('li');
  const link = document.createElement('a');

  let secName = "Section " + (i + 1);
  let secId = sec.id;

  link.textContent = secName;
  link.href = `#${secId}`;

  li.appendChild(link);
  navList.appendChild(li);
});
