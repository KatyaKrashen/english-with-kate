<script>
  const menuIcon = document.querySelector('.menu-icon');
  const dropdown = document.querySelector('.dropdown');

  menuIcon.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
</script>
