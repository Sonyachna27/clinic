const stageList = document.querySelector('.stage__container-wrap');
if(stageList){
  const allContentBlocks = Array.from(document.querySelectorAll('.stage__container-wrap-content'));
  const allStageLinks = Array.from(document.querySelectorAll('.stage__container-wrap-list-item'));
  
  let currentIndex = 0;
  let frontBlockId = "stage-1";
  const tabsLinks = document.querySelectorAll('.stage__container-wrap-list-item');
  function addTabsActive () {
      tabsLinks.forEach((button, index) => {
        button.addEventListener('click', () => {
          tabsLinks.forEach((otherButton) => {
            otherButton.classList.remove('active');
          });
          button.classList.add('active');
          showContent(button.dataset.name, index);
        });
      });
    }
  addTabsActive ();
  function updateActiveTab(index) {
     
      tabsLinks.forEach((button, i) => {
          if (i === index) {
              button.classList.add('active'); 
          } else {
              button.classList.remove('active'); 
          }
      });
  }
  
  function changeSlide(blockId) {
      allContentBlocks.forEach((block, index) => {
          if (block.getAttribute('id') === blockId) {
              block.style.display = 'flex';
              block.style.opacity = 1;
              currentIndex = index;
          } else {
              block.style.opacity = 0;
              block.style.display = 'none';
          }
      });
      frontBlockId = blockId;
  }
  
  function animate(itemName) {
      const duration = 1000;
      const startTimestamp = performance.now();
      
      const item = document.getElementById(itemName);
  
      function step(timestamp) {
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          item.style.opacity = progress;
          if (progress < 1) {
              requestAnimationFrame(step);
          }
      }
      requestAnimationFrame(step);
  }
  
  function showContent(itemName, index) {
      animate(itemName);
      changeSlide(itemName, index);
      updateActiveTab(index);
  }
  addTabsActive();
  showContent(frontBlockId, 0);

}


const expertSwiper = new Swiper(".expertSlider", {
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextEl: '.expert__container-top-arrow-next',
        prevEl: '.expert__container-top-arrow-prev',
        
    },
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1023: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
  });
const blogSwiper = new Swiper(".blogSlider", {
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextEl: '.blog__container-top-arrow-next',
        prevEl: '.blog__container-top-arrow-prev',
        
    },
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
  });
const reviewsSwiper = new Swiper(".reviewsSlider", {
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextEl: '.reviews__container-top-arrow-next',
        prevEl: '.reviews__container-top-arrow-prev',
        
    },
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1023: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
  });
const gallerySwiper = new Swiper(".gallerySlider", {
    speed: 400,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextEl: '.gallery__container-top-arrow-next',
        prevEl: '.gallery__container-top-arrow-prev',
        
    },
    slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
  });

  const accordionItemsFaq = document.querySelectorAll('.faq__container-accord-item');
  if(accordionItemsFaq){
    accordionItemsFaq.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  }

    const galleryNameImg = document.querySelectorAll(".gallery__container-wrap-content-img");
    const galleryTabsBtn = document.querySelectorAll(".gallery__container-wrap-btns-btn");
    
    if(galleryTabsBtn){
      function showImage(imageSlug) {
        galleryNameImg.forEach((image) => {
              let imageDataSlug = image.dataset.slug;
              if (imageDataSlug === imageSlug) {
                  image.style.display = "block";
              } else {
                  image.style.display = "none";
              }
          });
      }
      
      function activeTabs() {
        galleryTabsBtn.forEach((tab) => {
              let tabsSlug = tab.dataset.slug;
              let hasImage = false; 
              
              galleryNameImg.forEach((image) => {
                  let imageDataSlug = image.dataset.slug;
                  if (imageDataSlug === tabsSlug) {
                      hasImage = true;
                      return; 
                  }
              });
      
              if (hasImage || tabsSlug === 'all') {
                  tab.style.display = "flex";
              } else {
                  tab.style.display = "none";
              }
      
              tab.addEventListener('click', () => {
                galleryTabsBtn.forEach((t) => t.classList.remove('active-tab'));
                  tab.classList.add('active-tab');
                  if (tabsSlug === 'all') {
                      nameImg.forEach((image) => {
                          image.style.display = "block";
                      });
                  } else {
                      showImage(tab.dataset.slug);
                  }
              });
          });
      }
      
      activeTabs();
    }
  
    const navBarItem = document.querySelectorAll('.menu-item-has-children');
    
   if(navBarItem){
    navBarItem.forEach((navLink) =>{
      navLink.addEventListener('click', () => navLink.classList.toggle('show'));
  })
   }

   const serviceSinglePage = document.querySelector('.single__container-tabs');
   if(serviceSinglePage){
    const servicesSingleTabs = document.querySelectorAll('.single__container-tabs-btn');
    const servicesContentBlock = document.querySelectorAll('.single__container-tabs-content');
    
    function showServicesContent(servicesContentName) {
        servicesContentBlock.forEach((content) => {
            let contentDataName = content.dataset.name;
            if (contentDataName === servicesContentName) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    }
    
    function activeServicesTabs() {
        servicesSingleTabs.forEach((content) => {
            let contentDataName = content.dataset.name;
    
            content.addEventListener('click', () => {
                servicesSingleTabs.forEach((t) => t.classList.remove('active-tab'));
                content.classList.add('active-tab');
                showServicesContent(contentDataName);
            });
    
            if (contentDataName === 'description') {
                showServicesContent(contentDataName);
            }
        });
    }
    
    activeServicesTabs();
    
   }

