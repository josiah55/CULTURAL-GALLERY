 // Content data for each number
    const content = {
      1: {
        title: "1. Lagos Cityscape",
        text: "The skyline, Third Mainland Bridge, yellow danfos, and street hustle—all define modern Nigerian urban life. Every collection should showcase the energy of Lagos."
      },
      2: {
        title: "2. Northern Nigerian Landscapes",
        text: "From the sand dunes of Yobe to the rocky terrains of Jos, these landscapes capture a side of Nigeria that is raw and breathtaking."
      },
      3: {
        title: "3. Yoruba Traditional Wedding",
        text: "The rich fabrics, coral beads, gele, and ceremony setup tell stories of tradition, elegance, and love. This is a visual treasure in any collection."
      },
      4: {
        title: "4. Nigerian Street Food",
        text: "Images of suya, boli, puff-puff, or akara sellers on the roadside show daily life, flavor, and cultural expression through food."
      },
      5: {
        title: "5. Local Markets",
        text: "From Balogun Market in Lagos to Ariaria Market in Aba, these photos reflect the heartbeat of trade, hustle, and colors unique to Nigeria."
      },
      6: {
        title: "6. Cultural Dances & Festivals",
        text: "Calabar Carnival, Durbar in Kano, or Egungun festivals—each offers dramatic visuals of movement, color, and identity."
      },
      7: {
        title: "7. Religious Leaders",
        text: "Photographs of influential Nigerian pastors and imams capture both the spirituality and social influence of religion in Nigeria."
      },
      8: {
        title: "8. Political Rallies & Movements",
        text: "Powerful images of campaigns, protests, or national events document history and collective emotion."
      },
      9: {
        title: "9. Nigerian Celebrities & Creatives",
        text: "Nollywood stars, musicians like Burna Boy or Tiwa Savage, and fashion influencers represent Nigeria on a global stage. Their portraits are iconic additions."
      },
      10: {
        title: "10. Iconic Nigerian Landmarks",
        text: "Photos of Zuma Rock, the National Mosque, Obudu Cattle Ranch, or Erin Ijesha Waterfall round out the collection with national pride."
      }
    };

    // Get dropdown items and display box
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const displayBox = document.getElementById('displayBox');

    // Add event listeners
    dropdownItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const number = e.target.getAttribute('data-number');
        const { title, text } = content[number];
        displayBox.innerHTML = `
          <h2 class="mt-2 text-success">${title}</h2>
          <p class="mt-3">${text}</p>
        `;
      });
    });


    //footer modal
  const contentData = {
    about: "This website curates and shares rich collections of Nigerian cultural and historical images.",
    history: "Founded in 2025, our platform is dedicated to preserving Nigeria’s visual heritage.",
    press: "Featured in top Nigerian media outlets for its visual contribution to cultural awareness.",
    contact: "Reach us via email at info@photonaija.com or on social media @photonaija."
  };

  function openPopup(type) {
    const popupBox = document.getElementById("popupBox");
    const popupContent = document.getElementById("popupContent");
    popupContent.textContent = contentData[type] || "No information available.";
    popupBox.classList.remove("d-none");
  }

  function closePopup() {
    document.getElementById("popupBox").classList.add("d-none");
  }
