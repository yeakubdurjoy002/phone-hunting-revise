const loadPhones = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhones(phones);
};
const displayPhones = (phones) => {
  // step 1: find the id by the getElementById
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  //   console.log(phones.length);
  const showAllButton = document.getElementById("show-all-button");
  if (phones.length > 6) {
    showAllButton.classList.remove("hidden");
  } else {
    showAllButton.classList.add("hidden");
  }
  phones = phones.slice(0, 6);

  phones.forEach((phones) => {
    console.log(phones);
    //step 2 : create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 w-96 shadow-xl p-5`;
    // step 3 : set innerHTML
    phoneCard.innerHTML = `
<figure>
        <img
        src="${phones.image}"
        alt="Shoes"
        />
    </figure>
    <div class="card-body">
        <h2 class="card-title">${phones.phone_name}</h2>
        <p>${phones.slug}</p>
        <div class="m-6 text-center">
        <button class="btn bg-[#0D6EFD] text-white ">Show Details</button>
        </div>
    </div>
    </div>
          `;
    //   step 4: appendChild
    phoneContainer.appendChild(phoneCard);
  });
  //
};
const searchHandler = () => {
  const searchBar = document.getElementById("search-bar");
  const searchText = searchBar.value;
  //   console.log(searchText);
  loadPhones(searchText);
};
// loadPhones();
