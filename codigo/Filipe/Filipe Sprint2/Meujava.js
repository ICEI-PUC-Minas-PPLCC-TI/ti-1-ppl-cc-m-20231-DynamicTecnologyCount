var notifications = [];
var currentPage = 1;
var notificationsPerPage = 8;

function showPopup() {
  var notificationPopup = document.getElementById("notificationPopup");
  var notificationList = document.getElementById("notificationList");
  var paginationContainer = document.getElementById("paginationContainer");

  notificationPopup.style.display = "block";
  populateNotificationList();

  function populateNotificationList() {
    notificationList.innerHTML = "";
    var totalPages = Math.ceil(notifications.length / notificationsPerPage);

    if (totalPages > 1) {
      createPagination(paginationContainer, totalPages);
    }

    var startIndex = (currentPage - 1) * notificationsPerPage;
    var endIndex = currentPage * notificationsPerPage;
    var currentPageNotifications = notifications.slice(startIndex, endIndex);

    currentPageNotifications.forEach(function(notification) {
      var li = document.createElement("li");
      var closeButton = document.createElement("span");
      closeButton.classList.add("close-button");
      closeButton.textContent = "×";
      closeButton.onclick = function() {
        deleteNotification(notification);
      };
      var text = document.createTextNode(notification.message);
      li.appendChild(text);
      li.appendChild(closeButton);
      notificationList.appendChild(li);
    });
  }
}

function createPagination(paginationContainer, totalPages) {
  paginationContainer.innerHTML = "";

  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.onclick = function() {
      goToPage(parseInt(this.textContent));
    };

    if (i === currentPage) {
      pageButton.classList.add("current-page");
    }

    paginationContainer.appendChild(pageButton);
  }
}

function goToPage(pageNumber) {
  currentPage = pageNumber;
  showPopup();
}

function closePopup() {
  var notificationPopup = document.getElementById("notificationPopup");
  notificationPopup.style.display = "none";
}

function addNotification(message) {
  var notification = {
    message: message,
    read: false
  };
  notifications.push(notification);
  localStorage.setItem("notifications", JSON.stringify(notifications));
  updateNotificationBadge();

  if (notifications.length > notificationsPerPage) {
    showPopupPageTwo();
  }
}

function showPopupPageTwo() {
  var notificationPopup = document.getElementById("notificationPopup");
  notificationPopup.classList.add("multi-page");

  var notificationList = document.getElementById("notificationList");
  notificationList.innerHTML = "";

  var notificationPageTwo = document.createElement("div");
  notificationPageTwo.classList.add("notification-page-two");

  var text = document.createTextNode("Segunda página de notificações");
  notificationPageTwo.appendChild(text);

  notificationList.appendChild(notificationPageTwo);
}

function deleteNotification(notification) {
  var index = notifications.indexOf(notification);

  if (index > -1) {
    notifications.splice(index, 1);
    localStorage.setItem("notifications", JSON.stringify(notifications));
    updateNotificationBadge();
    showPopup();
  }
}

function deleteAllNotifications() {
  notifications = [];
  localStorage.removeItem("notifications");
  currentPage = 1; // Reset currentPage to the first page
  var paginationContainer = document.getElementById("paginationContainer");
  paginationContainer.innerHTML = ""; // Clear the pagination container
  showPopup(); // Refresh the notification popup
  updateNotificationBadge();
}

function updateNotificationBadge() {
  var notificationBadge = document.getElementById("notificationBadge");
  var unreadCount = notifications.filter(function(notification) {
    return !notification.read;
  }).length;

  notificationBadge.textContent = unreadCount;
  notificationBadge.style.display = unreadCount > 0 ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function() {
  var notificationBadge = document.getElementById("notificationBadge");
  var notificationPopup = document.getElementById("notificationPopup");
  var notificationList = document.getElementById("notificationList");

  // Recupera as notificações do LocalStorage
  if (localStorage.getItem("notifications")) {
    notifications = JSON.parse(localStorage.getItem("notifications"));
  }

  updateNotificationBadge();

  setTimeout(function() {
    addNotification("Paralelepipedo\nParalelepipedo\nParalelepipedo\nParalelepipedo\nParalelepipedo\nParalelepipedo");
    addNotification("Nova notificação 2");
    addNotification("Nova notificação 3");
    addNotification("Nova notificação 4");
    addNotification("Nova notificação 5");
    addNotification("Nova notificação 6");
    addNotification("Nova notificação 7");
    addNotification("Nova notificação 8");
    addNotification("Nova notificação 9");
    addNotification("Nova notificação 10");
  }, 3000);
});

function openUserPopup() {
    var userPopup = document.getElementById("userPopup");
    userPopup.style.display = "block";
  }
  
  function closeUserPopup() {
    var userPopup = document.getElementById("userPopup");
    userPopup.style.display = "none";
  }

  
  document.addEventListener("DOMContentLoaded", function() {
    var closeButton = document.querySelector("#userPopup .close-button");
    closeButton.addEventListener("click", closePopup);
  });

function showCustomPopup(text, event) {
    var popup = document.createElement("div");
    popup.classList.add("custom-popup");
    popup.textContent = text;
    document.body.appendChild(popup);
    positionPopup();
  
    function positionPopup() {
      var icon = event.target;
      var iconRect = icon.getBoundingClientRect();
      var popupRect = popup.getBoundingClientRect();
      var popupLeft = iconRect.left + iconRect.width + 10;
      var popupTop = iconRect.top + (iconRect.height - popupRect.height) / 2;
      popup.style.left = popupLeft + "px";
      popup.style.top = popupTop + "px";
    }
  }
  
function hideCustomPopup() {
    var popup = document.querySelector(".custom-popup");
    if (popup) {
      document.body.removeChild(popup);
    }
  }
  
function toggleNavigation() {
    var icons = document.querySelectorAll(".sidebar-item:not(.bar)");
    icons.forEach(function (icon) {
      icon.classList.toggle("hide");
    });
    var homeIcon = document.querySelector(".home");
    homeIcon.classList.toggle("clicked");
  }
  
  
document.addEventListener('DOMContentLoaded', function() {
  // Dados dos retângulos
    var rectangles = [
        {
            title: 'Financeiro',
            description: 'Informações financeiras',
            link: 'pagina1.html',
            image: 'https://conube.com.br/blog/wp-content/uploads/2017/07/Gerenciar-o-setor-financeiro-da-empresa-com-sucesso.jpg'
        },
        {
            title: 'Dados Gerais',
            description: 'Dados gerais para cálculo',
            link: 'pagina2.html',
            image: 'https://blog.vitta.com.br/wp-content/uploads/2020/03/extrato-inss-informacoes-gerais-e-maneiras-de-solicita-lo-1200x675.jpg'
        },
        {
            title: 'Espaços',
            description: 'Área de atuação dos enfermeiros',
            link: 'pagina3.html',
            image: 'https://fasig.com.br/wp-content/uploads/2019/03/FASIG_MARCO_TESTEIRA_BLOG_QUALIDADE_VIDA_2560x1343.png'
        },
        {
            title: 'Info-Enfermeiros',
            description: 'Informações dos enfermeiros',
            link: 'pagina4.html',
            image: 'https://vivomeunegocio.com.br/vivo-b2b/wp-content/uploads/2020/05/08130207/tecnologia-na-enfermagem.jpg'
        },
        {
            title: 'A contratar',
            description: 'Área de contratação',
            link: 'pagina5.html',
            image: 'https://blog.me.com.br/wp-content/uploads/2020/03/4379-scaled-e1585676622446.jpg'
        },
        {
            title: 'Comparativo',
            description: 'Comparação de dados totais',
            link: 'pagina6.html',
            image: 'https://analistamodelosdenegocios.com.br/wp-content/uploads/2019/06/sites-de-comparacao-de-precos2.jpg'
        }
    ];



// Função para criar os retângulos
function createRectangles() {
  var container = document.getElementById('dynamicCount');

  rectangles.forEach(function (rectangle) {
    var link = document.createElement('a');
    link.href = rectangle.link;
    link.className = 'vai';
    link.style.backgroundImage = 'url(' + rectangle.image + ')';

    var title = document.createElement('h1');
    title.textContent = rectangle.title;

    var description = document.createElement('p');
    description.textContent = rectangle.description;

    var arrow = document.createElement('span');
    arrow.innerHTML = '&#8250;';

    link.appendChild(title);
    link.appendChild(description);
    link.appendChild(arrow);

    container.appendChild(link);
  });
}

// Chamada da função para criar os retângulos
createRectangles();



});