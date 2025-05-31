
document.getElementById('resume-form').addEventListener('input', () => {
  document.getElementById('preview-name').textContent = document.getElementById('name').value;
  document.getElementById('preview-email').textContent = document.getElementById('email').value;
  document.getElementById('preview-phone').textContent = document.getElementById('phone').value;
  document.getElementById('preview-summary').textContent = document.getElementById('summary').value;
  document.getElementById('preview-education').textContent = document.getElementById('education').value;
  document.getElementById('preview-skills').textContent = document.getElementById('skills').value;
  document.getElementById('preview-experience').textContent = document.getElementById('experience').value;
});
