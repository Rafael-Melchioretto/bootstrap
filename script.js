<script>
document.getElementById("formAluno").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;
  let confirmar = document.getElementById("confirmarSenha").value;

  if(nome === "") {
    alert("Nome é obrigatório!");
    return;
  }

  if(senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Cadastro realizado com sucesso!");
});
</script>