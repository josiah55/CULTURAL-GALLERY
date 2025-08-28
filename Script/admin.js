// // Dummy photo data (simulate server response)
//     const uploadedPhotos = [
//       {
//         id: 1,
//         title: "Lagos Sunset",
//         category: "Nature",
//         price: "5000",
//         description: "A beautiful view of the sunset in Lagos.",
//         imageUrl: "https://via.placeholder.com/400x250"
//       },
//       {
//         id: 2,
//         title: "Cultural Dance",
//         category: "Culture",
//         price: "7000",
//         description: "Igbo traditional dance scene.",
//         imageUrl: "https://via.placeholder.com/400x250"
//       }
//     ];

//     const photoList = document.getElementById("photoList");

//     function renderPhotos() {
//       photoList.innerHTML = uploadedPhotos.map(photo => `
//         <div class="col-md-4">
//           <div class="card photo-card shadow-sm">
//             <img src="${photo.imageUrl}" class="card-img-top" alt="${photo.title}">
//             <div class="card-body">
//               <h5 class="card-title">${photo.title}</h5>
//               <p class="card-text"><strong>Category:</strong> ${photo.category}</p>
//               <p class="card-text"><strong>Price:</strong> ₦${photo.price}</p>
//               <p class="card-text">${photo.description}</p>
//               <div class="d-flex justify-content-between">
//                 <button class="btn btn-success btn-sm" onclick="approvePhoto(${photo.id})">Approve ✅</button>
//                 <button class="btn btn-danger btn-sm" onclick="rejectPhoto(${photo.id})">Reject ❌</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       `).join("");
//     }

//     function approvePhoto(id) {
//       alert(`Photo ID ${id} approved.`);
//       // Here you'd send a request to your backend to approve the image
//     }

//     function rejectPhoto(id) {
//       alert(`Photo ID ${id} rejected.`);
//       // Here you'd send a request to your backend to reject/delete the image
//     }

//     renderPhotos();


// Sample data – Replace this with dynamic data from your backend
const uploadedPhotos = [
  {
    id: 1,
    title: "Lagos Sunset",
    category: "Nature",
    price: "₦3000",
    description: "A beautiful sunset in Lagos city.",
    imageUrl: "https://via.placeholder.com/400x250"
  },
  {
    id: 2,
    title: "Igbo Cultural Dance",
    category: "Culture",
    price: "₦5000",
    description: "Traditional dancers at an Igbo festival.",
    imageUrl: "https://via.placeholder.com/400x250"
  }
];

// Inject photo cards into admin dashboard
function renderPhotos() {
  const photoList = document.getElementById('photoList');
  photoList.innerHTML = '';

  uploadedPhotos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'col';

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${photo.imageUrl}" class="card-img-top" alt="${photo.title}">
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
          <p class="card-text"><strong>Category:</strong> ${photo.category}</p>
          <p class="card-text"><strong>Price:</strong> ${photo.price}</p>
          <p class="card-text">${photo.description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button class="btn btn-success btn-sm" onclick="approvePhoto(${photo.id})">Approve</button>
          <button class="btn btn-danger btn-sm" onclick="rejectPhoto(${photo.id})">Reject</button>
        </div>
      </div>
    `;

    photoList.appendChild(card);
  });
}

// Simulated approve function
function approvePhoto(photoId) {
  alert(`Photo ID ${photoId} approved!`);
  // Here, send approval to backend using fetch()
}

// Simulated reject function
function rejectPhoto(photoId) {
  alert(`Photo ID ${photoId} rejected!`);
  // Here, send rejection to backend using fetch()
}

// Render the dashboard on load
document.addEventListener('DOMContentLoaded', renderPhotos);
