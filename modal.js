document.addEventListener('DOMContentLoaded', function() {

  const uploadModal = document.getElementById('uploadModal');
  const cvModal = document.getElementById('cvModal');
  const closeModal = document.getElementById('closeModal');
  const closeCvModal = document.getElementById('closeCvModal');

  const fileUploadContainer = document.getElementById('fileUploadContainer');
  const fileUpload = document.getElementById('fileUpload');
  const cvFileUploadContainer = document.getElementById('cvFileUploadContainer');
  const cvFileUpload = document.getElementById('cvFileUpload');
  
  function openUploadModal() {
    uploadModal.style.display = 'flex';
  }
  
  function openCvModal() {
    cvModal.style.display = 'flex';
  }
  
  function closeModals() {
    uploadModal.style.display = 'none';
    cvModal.style.display = 'none';
  }
  
  const uploadButtons = document.querySelectorAll('.upload-questionnaire-btn');
  const cvButtons = document.querySelectorAll('.upload-cv-btn');
  
  uploadButtons.forEach(button => {
    button.addEventListener('click', openUploadModal);
  });
  
  cvButtons.forEach(button => {
    button.addEventListener('click', openCvModal);
  });
  
  closeModal.addEventListener('click', closeModals);
  closeCvModal.addEventListener('click', closeModals);
  
  window.addEventListener('click', function(event) {
    if (event.target === uploadModal) {
      closeModals();
    }
    if (event.target === cvModal) {
      closeModals();
    }
  });
  
  fileUploadContainer.addEventListener('click', function() {
    fileUpload.click();
  });
  
  cvFileUploadContainer.addEventListener('click', function() {
    cvFileUpload.click();
  });
  
  fileUpload.addEventListener('change', function() {
    if (this.files.length > 0) {
      fileUploadContainer.textContent = this.files[0].name;
    }
  });
  
  cvFileUpload.addEventListener('change', function() {
    if (this.files.length > 0) {
      cvFileUploadContainer.textContent = this.files[0].name;
    }
  });
  
  const forms = document.querySelectorAll('.modal-form');
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      alert('Form submitted successfully!');
      closeModals();
      form.reset();
    });
  });
});